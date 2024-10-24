'use client'

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
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
import { propertySearch, resetSearch } from '@/app/redux/features/listingSlice'
import mockBrowseDreamHomesData from '@/app/mock-data/mock-browser-dream-homes-data'
import cleanInputs from '@/app/utils/cleanInputs'
import { useSearchParams } from 'next/navigation'

const AdvancedSearchForm = () => {
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const [hasDispatched, setHasDispatched] = useState(false)
  const { hasSearched } = useAppSelector((state: RootState) => state.listing)
  const filters = {} as any

  searchParams.forEach((value, key) => {
    filters[key] = value
  })

  const { inputs, handleInput, handleSelect, handleToggle, setInputs } = useForm(
    ADVANCED_SEARCH_FIELDS,
    filters
  )

  useEffect(() => {
    if (!hasDispatched) {
      if (Object.keys(filters).length > 0) {
        dispatch(propertySearch({ properties: mockBrowseDreamHomesData, searchCriteria: filters }))
        setHasDispatched(true)
      }
    }
  }, [dispatch, hasDispatched, filters])

  const handlePropertySearch = (e: FormEvent) => {
    e.preventDefault()

    const cleanedInputs = cleanInputs(inputs)
    dispatch(
      propertySearch({ properties: mockBrowseDreamHomesData, searchCriteria: cleanedInputs })
    )
  }

  const handleReset = (e: FormEvent) => {
    e.preventDefault()

    dispatch(resetSearch())

    const resetState = inputConfig.reduce((acc: any, curr) => {
      acc[curr.name] = ''

      return acc
    }, {})

    setInputs(resetState)
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
          inputNames={['minSqFt', 'maxSqFt']}
          inputConfig={inputConfig}
          inputs={inputs}
          handleSelect={handleSelect}
        />
        <DynamicInputGroup
          inputNames={['minLandAreaSqFt', 'maxLandAreaSqFt']}
          inputConfig={inputConfig}
          inputs={inputs}
          handleSelect={handleSelect}
        />
      </div>
      <OtherFeatures handleToggle={handleToggle} inputs={inputs} />
      <div className="flex justify-end w-full text-white gap-x-1.5 mt-3">
        {hasSearched && (
          <button
            onClick={handleReset}
            className="bg-zinc-900 flex items-center gap-x-1 px-5 py-2.5 text-orange"
          >
            <span className="text-sm">Reset</span>
          </button>
        )}
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
