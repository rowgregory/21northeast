import PropertySearchForm from "@/app/forms/PropertySearchForm";
import React from "react";

const PropertySearch = () => {
  return (
    <div className="bg-[#1a1a1a] w-full overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 pt-28">
          <h4 className="text-white uppercase text-lg">Discover Your</h4>
          <h1 className="text-5xl text-white uppercase font-bold">
            <span className="text-orange-500">E</span>pic <br />
            <span className="text-orange-500">J</span>ourney
          </h1>
        </div>
        <div
          className={`col-span-12 md:col-span-9 bg-[#2c2c2c] relative px-3 pt-1.5 pb-5
          after:absolute after:content-[''] after:z-0 
          after:w-[1000%] after:bg-[#2c2c2c]
          after:left:-0 after:bottom-0 after:top-0
        `}
        >
          <div className="flex flex-col relative z-10 gap-y-8">
            <div className="bg-orange-500 text-white font-normal px-2.5 py-3 w-fit text-sm">
              For Sale
            </div>
            <PropertySearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
