'use client'

import React, { FC, FormEvent } from 'react'
import useForm from '../hooks/useForm'
import { PROPERTY_SEARCH_FIELDS } from '../data/form-input-fields'
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
import { magnifyingGlassIcon } from '../icons'
import DualSlider from '../components/common/DualSlider'
import { PropertySearchFormProps } from '../types/pages/home-page-types'
import getPropertySearchFormStyles from '../utils/getPropertySearchFormStylts'
import PropertyStatusButton from '../components/common/PropertyStatusButton'
import cleanInputs from '../utils/cleanInputs'
import { useRouter } from 'next/navigation'

const PropertySearchForm: FC<PropertySearchFormProps> = ({ type }) => {
  const navigate = useRouter()
  const { inputs, handleInput, handleSelect, setInputs } = useForm(PROPERTY_SEARCH_FIELDS)

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

    const cleanedInputs = cleanInputs(inputs)
    const queryString = new URLSearchParams(cleanedInputs).toString()
    navigate.push(`/search?${queryString}`)
  }

  return (
    <form onSubmit={handleSubmitPropertySearch}>
      <div className={`flex items-center gap-2 mb-10 ${type === 'listings' ? 'bg-zinc-900' : ''}`}>
        <PropertyStatusButton text="For Sale" active={true} />
      </div>
      <div className={styles.form}>
        <select
          name="propertyType"
          id="propertyType"
          onChange={handleSelect}
          value={inputs.propertyType as string}
          className={`${styles.inputs}`}
          aria-label="Property Type"
          tabIndex={0}
        >
          {ALL_TYPES_OPTIONS.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          name="status"
          id="status"
          onChange={handleSelect}
          value={inputs.status as string}
          className={`${styles.inputs}`}
          aria-label="Status"
          tabIndex={0}
        >
          {STATUS_OPTIONS.map((status, index) => (
            <option key={status} value={index === 0 ? '' : status}>
              {status}
            </option>
          ))}
        </select>
        <select
          name="propertySubType"
          id="propertySubType"
          onChange={handleSelect}
          value={inputs.propertySubType as string}
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
          value={inputs.bedrooms as string}
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
          name="bathrooms"
          id="bathrooms"
          onChange={handleSelect}
          value={inputs.bathrooms as string}
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
          max={10000}
          value={[inputs.rangeValue3 as number, inputs.rangeValue4 as number]}
          onInputChange={handleLandAreaSliderChange}
          text="Land Area"
        />
        <input
          name="propertyId"
          id="propertyId"
          onChange={handleInput}
          value={(inputs.propertyId as string) || ''}
          className={` ${styles.inputs}`}
          aria-label="Property Id"
          placeholder="Property Id"
        />
        <button
          type="submit"
          className={`${styles.button} gap-1.5 flex justify-center items-center py-2.5 bg-orange-500 border-2 border-orange-500 group duration-200 hover:bg-transparent`}
        >
          <FontAwesomeIcon
            icon={magnifyingGlassIcon}
            className="text-white group-hover:text-orange-500 w-3 h-3"
          />
          <p className="text-sm text-white group-hover:text-orange-500">Search</p>
        </button>
      </div>
    </form>
  )
}

export default PropertySearchForm
