'use client'

import { ChangeEvent, useEffect } from 'react'
import Banner from '@/app/components/common/Banner'
import { orangeUnderline } from '@/app/components/common/styles'
import PropertySearchForm from '@/app/components/forms/PropertySearchForm'
import { LISTINGS_SORTING_OPTIONS } from '@/app/lib/constants/form-select-options'
import useForm from '@/app/lib/hooks/useForm'
import ListingsPropertyCard from '@/app/components/listings/ListingsPropertyCard'
import FilterDrawer from '@/app/components/listings/FilterDrawer'
import { RootState, useAppDispatch, useAppSelector } from '@/app/lib/redux/store'
import { resetSearch, setToggleFilter, sortProperties } from '@/app/lib/redux/features/listingSlice'
import { FilterIcon } from 'lucide-react'

const ListingsPage = () => {
  const dispatch = useAppDispatch()
  const { originalListings, searchedListings, sortedListings, toggleFilter } = useAppSelector(
    (state: RootState) => state.listing
  )
  const { inputs, setInputs } = useForm(['sortingOption'])

  useEffect(() => {
    dispatch(resetSearch())
  }, [dispatch])

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target

    setInputs((prev: any) => ({
      ...prev,
      [name]: value
    }))

    dispatch(sortProperties(value))
  }

  const displayListings =
    sortedListings !== null
      ? sortedListings
      : searchedListings !== null
      ? searchedListings
      : originalListings

  return (
    <div className="pb-60">
      <FilterDrawer toggleFilter={toggleFilter} setToggleFilter={setToggleFilter} />
      <Banner src="/images/listings.jpg" title="Listings" breadcrumb="Properties" />
      <div
        onClick={() => dispatch(setToggleFilter(true))}
        className="fixed left-0 top-80 z-20 flex lg:hidden bg-white p-2.5 rounded-tr-md rounded-br-md shadow-[1px_2px_4px_rgba(0,0,0,.4)] items-center justify-center cursor-pointer"
      >
        <FilterIcon className="w-3 h-3" />
      </div>
      <div className="mt-24 max-w-1200 mx-auto w-full grid grid-cols-12 lg:gap-x-6 xl:gap-x-10">
        <div className="hidden lg:block lg:col-span-3 bg-[#f8f8f8] h-fit w-full p-2.5">
          <PropertySearchForm type="listings" />
        </div>
        <div className="col-span-12 lg:col-span-9 px-3 sm:px-10 md:px-12 lg:px-0">
          <div className="flex gap-x-2">
            <h2 className={`uppercase text-4xl font-bold relative pb-4 mb-6 ${orangeUnderline}`}>
              Properties
            </h2>
            <span className="text-xl">({displayListings?.length})</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div></div>
            <div className="flex items-center">
              <select
                id="sortingOption"
                name="sortingOption"
                value={inputs.sortingOption as string}
                onChange={handleSelect}
                aria-label="Sorting Option"
                tabIndex={0}
                className="form-control py-3 px-1.5 text-sm text-[#7c7c7c] rounded-sm bg-[#f8f8f8] focus:outline-none"
              >
                {LISTINGS_SORTING_OPTIONS.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            {displayListings?.map((property: any, i: number) => (
              <ListingsPropertyCard key={i} property={property} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingsPage
