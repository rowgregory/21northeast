"use client";

import React, { FormEvent } from "react";
import useForm from "../hooks/useForm";
import { PROPERTY_SEARCH_FIELDS } from "../data/form-input-fields";
import {
  ALL_TYPES_OPTIONS,
  BATHROOM_OPTIONS,
  BEDROOM_OPTIONS,
  MAX_PRICE_OPTIONS,
  MIN_PRICE_OPTIONS,
} from "../data/form-select-options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { magnifyingGlassIcon } from "../icons";
import DualSlider from "../components/common/DualSlider";

const inputstyles = `py-3 px-1.5 h-12 border-2 border-[#565656] rounded-sm bg-transparent text-[#7c7c7c] focus:border-orange-500 focus:outline-none`;

const PropertySearchForm = () => {
  const { inputs, handleInput, handleSelect, setInputs } = useForm(
    PROPERTY_SEARCH_FIELDS
  );

  const handleSqFtSliderChange = (values: [number, number]) => {
    setInputs((prev) => ({
      ...prev,
      rangeValue1: values[0],
      rangeValue2: values[1],
      sqft: `${values[0]} - ${values[1]}`,
    }));
  };
  const handleLandAreaSliderChange = (values: [number, number]) => {
    setInputs((prev) => ({
      ...prev,
      rangeValue3: values[0],
      rangeValue4: values[1],
      landAreaSqFt: `${values[0]} - ${values[1]}`,
    }));
  };

  const handleSubmitPropertySearch = (e: FormEvent) => {
    e.preventDefault();
    // ToDo
    // getPropertySearch(inputs).unwrap()
  };

  return (
    <form
      onSubmit={handleSubmitPropertySearch}
      className="grid grid-cols-12 gap-x-8 gap-y-4"
    >
      <select
        name="propertyType"
        id="propertyType"
        onChange={handleSelect}
        className={`form-control col-span-12 md:col-span-6 lg:col-span-4 sm${inputstyles}`}
        aria-label="Property Type"
        tabIndex={0}
      >
        {ALL_TYPES_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input
        name="title"
        id="title"
        onChange={handleInput}
        value={inputs.title as string}
        className={`form-control col-span-12 md:col-span-6 lg:col-span-4 sm${inputstyles}`}
        aria-label="Title"
        placeholder="Title"
      />
      <input
        name="address"
        id="address"
        onChange={handleInput}
        value={inputs.address as string}
        className={`form-control col-span-12 md:col-span-6 lg:col-span-4 sm${inputstyles}`}
        aria-label="Address"
        placeholder="Address"
      />
      <select
        name="bedrooms"
        id="bedrooms"
        onChange={handleSelect}
        value={inputs.bedrooms as string}
        className={`form-control col-span-12 md:col-span-6 lg:col-span-4 sm${inputstyles}`}
        aria-label="Bedrooms"
        tabIndex={0}
      >
        {BEDROOM_OPTIONS.map((bedroom) => (
          <option key={bedroom} value={bedroom}>
            {bedroom}
          </option>
        ))}
      </select>
      <select
        name="bathrooms"
        id="bathrooms"
        onChange={handleSelect}
        value={inputs.bathrooms as string}
        className={`form-control col-span-12 md:col-span-6 lg:col-span-4 sm${inputstyles}`}
        aria-label="Bathrooms"
        tabIndex={0}
      >
        {BATHROOM_OPTIONS.map((bedroom) => (
          <option key={bedroom} value={bedroom}>
            {bedroom}
          </option>
        ))}
      </select>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 flex gap-8">
        <select
          name="minPrice"
          id="minPrice"
          onChange={handleSelect}
          value={inputs.minPrice as string}
          className={`form-control w-full sm${inputstyles}`}
          aria-label="Min Price"
          tabIndex={0}
        >
          {MIN_PRICE_OPTIONS.map((minPrice) => (
            <option key={minPrice} value={minPrice}>
              {minPrice}
            </option>
          ))}
        </select>
        <select
          name="maxPrice"
          id="maxPrice"
          onChange={handleSelect}
          value={inputs.maxPrice as string}
          className={`form-control w-full sm${inputstyles}`}
          aria-label="Max Price"
          tabIndex={0}
        >
          {MAX_PRICE_OPTIONS.map((maxPrice) => (
            <option key={maxPrice} value={maxPrice}>
              {maxPrice}
            </option>
          ))}
        </select>
      </div>
      <DualSlider
        min={0}
        max={3000}
        value={[inputs.rangeValue1 as number, inputs.rangeValue2 as number]}
        onInputChange={handleSqFtSliderChange}
        text="Size"
      />
      <DualSlider
        min={0}
        max={3000}
        value={[inputs.rangeValue3 as number, inputs.rangeValue4 as number]}
        onInputChange={handleLandAreaSliderChange}
        text="Land Area"
      />
      <input
        name="propertyId"
        id="propertyId"
        onChange={handleInput}
        value={inputs.propertyId as string}
        className={`form-control col-span-12 md:col-span-6 lg:col-span-4 sm${inputstyles}`}
        aria-label="Property Id"
        placeholder="Property Id"
      />
      <button
        type="submit"
        className="col-span-12 md:col-span-2 md:col-start-11 gap-1.5
          flex justify-center items-center py-2.5  bg-orange-500  border-2 border-orange-500 group duration-200
          hover:bg-transparent"
      >
        <FontAwesomeIcon
          icon={magnifyingGlassIcon}
          className="text-white group-hover:text-orange-500 w-3 h-3"
        />
        <p className="text-sm text-white group-hover:text-orange-500">Search</p>
      </button>
    </form>
  );
};

export default PropertySearchForm;
