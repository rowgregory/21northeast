'use client'

import React, { ChangeEvent, FormEvent, useEffect, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ADVANCED_SEARCH_FIELDS } from '../../data/form-input-fields'
import useForm from '../../hooks/useForm'
import OtherFeatures from './other-features/OtherFeatures'
import AwesomeIcon from '@/app/components/common/AwesomeIcon'
import { magnifyingGlassIcon } from '@/app/icons'
import DynamicInput from '@/app/components/advanced-search/DynamicInput'
import DynamicInputGroup from '@/app/components/advanced-search/DynamicInputGroup'
import inputConfig from '@/app/data/search/inputConfig'
import pairedFormInputs from '@/app/data/search/pairedFormInputs'
import { RootState, useAppDispatch, useAppSelector } from '@/app/redux/store'
import { propertySearch, resetSearch, setHasDispatched } from '@/app/redux/features/listingSlice'
import cleanInputs from '@/app/utils/cleanInputs'

const AdvancedSearchForm = () => {
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const navigation = useRouter()
  const { hasSearched, hasDispatched, listings } = useAppSelector(
    (state: RootState) => state.listing
  )
  const cityName = searchParams.get('cityName')
  const noListings = listings?.length === 0
  const filters = useMemo(() => {
    const filterObj: Record<string, string> = {}
    searchParams.forEach((value, key) => {
      filterObj[key] = value
    })
    return filterObj
  }, [searchParams])

  const { inputs, handleInput, handleSelect, handleToggle, setInputs } = useForm(
    ADVANCED_SEARCH_FIELDS,
    filters
  )

  useEffect(() => {
    if (cityName) {
      dispatch(propertySearch({ searchCriteria: filters }))
      dispatch(setHasDispatched(false)) // Reset to allow dispatch
    }
  }, [cityName, dispatch, filters])

  useEffect(() => {
    if (Object.keys(filters).length > 0 && !hasDispatched) {
      dispatch(propertySearch({ searchCriteria: filters }))
      dispatch(setHasDispatched(true))
    }
  }, [filters, dispatch, hasDispatched])

  const handlePropertySearch = (e: FormEvent) => {
    e.preventDefault()

    const cleanedInputs = cleanInputs(inputs)
    if (Object.keys(cleanedInputs).length > 0) {
      dispatch(propertySearch({ searchCriteria: cleanedInputs }))
    }
  }

  const handleReset = (e: FormEvent) => {
    e.preventDefault()

    dispatch(resetSearch())

    const resetState = inputConfig.reduce((acc: any, curr) => {
      acc[curr.name] = ''

      return acc
    }, {})

    setInputs(resetState)

    const pathname = window.location.pathname
    // Update the URL without the query string
    navigation.replace(pathname)
  }

  return (
    <form onSubmit={handlePropertySearch} className="border-b-2 border-b-orange-500 pb-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {inputConfig.map((input) =>
          pairedFormInputs.includes(input.name) ? null : (
            <DynamicInput
              key={input.name}
              config={input}
              value={inputs[input.name] as string | number | undefined}
              onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
                if (input.type === 'select') {
                  handleSelect(e as ChangeEvent<HTMLSelectElement>)
                } else {
                  handleInput(e as ChangeEvent<HTMLInputElement>)
                }
              }}
            />
          )
        )}
        <DynamicInputGroup
          inputNames={['minPrice', 'maxPrice']}
          inputConfig={inputConfig}
          inputs={inputs}
          handleSelect={handleSelect}
        />
        <DynamicInputGroup
          inputNames={['rangeValue1', 'rangeValue2']}
          inputConfig={inputConfig}
          inputs={inputs}
          handleSelect={handleSelect}
        />
        <DynamicInputGroup
          inputNames={['rangeValue3', 'rangeValue4']}
          inputConfig={inputConfig}
          inputs={inputs}
          handleSelect={handleSelect}
        />
      </div>
      <OtherFeatures handleToggle={handleToggle} inputs={inputs} />
      <div className="flex items-center justify-end w-full text-white gap-x-1.5 mt-3">
        {hasSearched && (
          <button
            onClick={handleReset}
            className="bg-zinc-900 flex items-center gap-x-1 px-5 py-2.5 text-orange-500"
          >
            <span className="text-sm">Reset</span>
          </button>
        )}
        {noListings && <div className="text-sm text-black">No active listings</div>}
        <button
          type="submit"
          className="bg-orange-500 flex items-center gap-x-1 px-5 py-2.5 text-white"
        >
          <AwesomeIcon icon={magnifyingGlassIcon} className="w-3 h-3" />
          <span className="text-sm">Search</span>
        </button>
      </div>
    </form>
  )
}

export default AdvancedSearchForm
