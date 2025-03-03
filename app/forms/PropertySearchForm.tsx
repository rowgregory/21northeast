'use client'

import React, { FC, FormEvent } from 'react'
import useForm from '../hooks/useForm'
import { ADVANCED_SEARCH_FIELDS } from '../data/form-input-fields'
import {
  ALL_TYPES_OPTIONS,
  BATHROOM_OPTIONS,
  BEDROOM_OPTIONS,
  MAX_PRICE_OPTIONS,
  MIN_PRICE_OPTIONS,
  PROPERTY_SUB_TYPE_OPTIONS,
  STATUS_OPTIONS
} from '../data/form-select-options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { filterIcon, magnifyingGlassIcon } from '../icons'
import DualSlider from '../components/common/DualSlider'
import { PropertySearchFormProps } from '../types/pages/home-page-types'
import getPropertySearchFormStyles from '../utils/getPropertySearchFormStylts'
import PropertyStatusButton from '../components/common/PropertyStatusButton'
import cleanInputs from '../utils/cleanInputs'
import { useRouter } from 'next/navigation'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { propertySearch, resetSearch, setHasDispatched } from '../redux/features/listingSlice'
import AwesomeIcon from '../components/common/AwesomeIcon'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'

const PropertySearchForm: FC<PropertySearchFormProps> = ({ type }) => {
  const navigate = useRouter()
  const dispatch = useAppDispatch()
  const { inputs, handleInput, handleSelect, setInputs } = useForm(ADVANCED_SEARCH_FIELDS)
  const { hasSearched, listings } = useAppSelector((state: RootState) => state.listing)
  const noListings = listings?.length === 0

  const styles = getPropertySearchFormStyles(type)

  const handleSqFtSliderChange = (values: [number, number]) => {
    setInputs((prev) => ({
      ...prev,
      rangeValue1: values[0],
      rangeValue2: values[1]
    }))
  }
  const handleLandAreaSliderChange = (values: [number, number]) => {
    setInputs((prev) => ({
      ...prev,
      rangeValue3: values[0],
      rangeValue4: values[1]
    }))
  }

  const handleSubmitPropertySearch = (e: FormEvent) => {
    e.preventDefault()
    dispatch(setHasDispatched(false))
    const cleanedInputs = cleanInputs(inputs)
    if (Object.keys(cleanedInputs).length > 0) {
      if (type === 'listings') {
        dispatch(propertySearch({ searchCriteria: cleanedInputs }))
      } else {
        const queryString = new URLSearchParams(cleanedInputs).toString()
        navigate.push(`/search?${queryString}`)
      }
    }
  }

  const handleReset = (e: FormEvent) => {
    e.preventDefault()

    dispatch(resetSearch())
    setInputs({})
  }

  return (
    <form onSubmit={handleSubmitPropertySearch}>
      <div
        className={`flex items-center gap-2 mb-10 ${
          type === 'listings' || type === 'listing-details' ? 'bg-zinc-900' : ''
        }`}
      >
        <PropertyStatusButton text="For Sale" active={true} />
      </div>
      <div className={styles.form}>
        <select
          name="propType"
          id="propType"
          onChange={handleSelect}
          value={inputs.propType as string}
          className={`${styles.inputs}`}
          aria-label="Property Type"
          tabIndex={0}
        >
          {ALL_TYPES_OPTIONS.map((type, index) => (
            <option key={type} value={index === 0 ? '' : type}>
              {type}
            </option>
          ))}
        </select>
        <select
          name="propStatus"
          id="propStatus"
          onChange={handleSelect}
          value={inputs.propStatus as string}
          className={`${styles.inputs}`}
          aria-label="Property Status"
          tabIndex={0}
        >
          {STATUS_OPTIONS.map((status, index) => (
            <option key={status} value={index === 0 ? '' : status}>
              {status}
            </option>
          ))}
        </select>
        <select
          name="propSubType"
          id="propSubType"
          onChange={handleSelect}
          value={inputs.propSubType as string}
          className={`${styles.inputs}`}
          aria-label="Property Sub Type"
          tabIndex={0}
        >
          {PROPERTY_SUB_TYPE_OPTIONS.map((subType, index) => (
            <option key={subType} value={index === 0 ? '' : subType}>
              {subType}
            </option>
          ))}
        </select>
        <select
          name="bedrooms"
          id="bedrooms"
          onChange={handleSelect}
          value={inputs.bedrooms as number}
          className={` ${styles.inputs}`}
          aria-label="Bedrooms"
          tabIndex={0}
        >
          {BEDROOM_OPTIONS.map((bedroom, index) => (
            <option key={bedroom} value={index === 0 ? '' : bedroom}>
              {bedroom}
            </option>
          ))}
        </select>
        <select
          name="totalBaths"
          id="totalBaths"
          onChange={handleSelect}
          value={inputs.totalBaths as string}
          className={` ${styles.inputs}`}
          aria-label="Bathrooms"
          tabIndex={0}
        >
          {BATHROOM_OPTIONS.map((bathroom, index) => (
            <option key={bathroom} value={index === 0 ? '' : bathroom}>
              {bathroom}
            </option>
          ))}
        </select>
        <div className={`${styles.minMaxContainer}`}>
          <select
            name="minPrice"
            id="minPrice"
            onChange={handleSelect}
            value={inputs.minPrice as string}
            className={`w-full ${styles.inputs}`}
            aria-label="Min Price"
            tabIndex={0}
          >
            {MIN_PRICE_OPTIONS.map((minPrice, index) => (
              <option key={minPrice} value={index === 0 ? '' : minPrice}>
                {minPrice}
              </option>
            ))}
          </select>
          <select
            name="maxPrice"
            id="maxPrice"
            onChange={handleSelect}
            value={inputs.maxPrice as string}
            className={`w-full ${styles.inputs}`}
            aria-label="Max Price"
            tabIndex={0}
          >
            {MAX_PRICE_OPTIONS.map((maxPrice, index) => (
              <option key={maxPrice} value={index === 0 ? '' : maxPrice}>
                {maxPrice}
              </option>
            ))}
          </select>
        </div>
        <DualSlider
          min={0}
          max={10000}
          value={[inputs.rangeValue1 as number, inputs.rangeValue2 as number]}
          onInputChange={handleSqFtSliderChange}
          text="Size"
        />
        <DualSlider
          min={0}
          max={10}
          value={[inputs.rangeValue3 as number, inputs.rangeValue4 as number]}
          onInputChange={handleLandAreaSliderChange}
          text="Land Area"
        />
        <input
          name="listingID"
          id="listingID"
          onChange={handleInput}
          value={(inputs.listingID as string) || ''}
          className={` ${styles.inputs}`}
          aria-label="Property Id"
          placeholder="Property Id"
        />
        <div className={`${styles.button} flex gap-x-2 items-center w-full justify-end`}>
          {noListings && <div className="text-xs whitespace-nowrap">No active listings</div>}
          <button
            type="submit"
            className={`gap-1.5 flex justify-center w-28 flex-shrink-0 items-center py-2.5 bg-orange-500 border-2 border-orange-500 group duration-200 hover:bg-transparent`}
          >
            <FontAwesomeIcon
              icon={type === 'listings' ? filterIcon : magnifyingGlassIcon}
              className="text-white group-hover:text-orange-500 w-3 h-3"
            />
            <p className="text-sm text-white group-hover:text-orange-500">
              {type === 'listings' ? 'Filter' : 'Search'}
            </p>
          </button>
        </div>
        {hasSearched && type === 'listings' && (
          <button
            onClick={handleReset}
            className="bg-gray-200 flex items-center justify-center gap-x-1 px-5 py-2.5 text-white text-center w-full"
          >
            <AwesomeIcon icon={faRotateLeft} className="w-3 h-3" />
            <span className="text-sm">Reset</span>
          </button>
        )}
      </div>
    </form>
  )
}

export default PropertySearchForm
