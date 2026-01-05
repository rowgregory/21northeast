'use client'

import React, { FC, useEffect, useState } from 'react'

interface DualSliderProps {
  min: number
  max: number
  value: [number, number]
  onInputChange: (values: [number, number]) => void
  text: string
}

const DualSlider: FC<DualSliderProps> = ({ min, max, value, onInputChange, text }) => {
  const [thumb1, setThumb1] = useState(value[0] || min)
  const [thumb2, setThumb2] = useState(value[1] || max)

  useEffect(() => {
    setThumb1(value[0] || min)
    setThumb2(value[1] || max)
  }, [max, value, min])

  const handleThumb1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)
    if (newValue < thumb2) {
      setThumb1(newValue)
      onInputChange([newValue, thumb2])
    }
  }

  const handleThumb2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)
    if (newValue > thumb1) {
      setThumb2(newValue)
      onInputChange([thumb1, newValue])
    }
  }

  const filledPercentage = ((thumb1 - min) / (max - min)) * 100
  const filledPercentage2 = ((thumb2 - min) / (max - min)) * 100

  return (
    <div className="pt-2 pr-2.5 col-span-12 md:col-span-6 lg:col-span-4">
      <p className="text-sm text-[#a8a8a8] mb-3">
        {text}{' '}
        <span className="text-orange-500 font-semibold">
          [{thumb1} - {thumb2}]
        </span>{' '}
        {text === 'Size' ? 'SqFt' : 'Acres'}
      </p>

      {/* Slider Container */}
      <div className="relative h-2 bg-gray-200">
        {/* Filled Track */}
        <div
          className="absolute h-full bg-orange-500"
          style={{
            left: `${filledPercentage}%`,
            right: `${100 - filledPercentage2}%`
          }}
        />

        {/* First Input (Min) */}
        <input
          type="range"
          min={min}
          max={max}
          value={thumb1}
          onChange={handleThumb1Change}
          className="dual-slider-input absolute w-full h-2 top-0 left-0 appearance-none bg-transparent pointer-events-none cursor-pointer z-20"
        />

        {/* Second Input (Max) */}
        <input
          type="range"
          min={min}
          max={max}
          value={thumb2}
          onChange={handleThumb2Change}
          className="dual-slider-input absolute w-full h-2 top-0 left-0 appearance-none bg-transparent pointer-events-none cursor-pointer z-20"
        />
      </div>

      {/* Custom Slider Styles */}
      <style>{`
        .dual-slider-input {
          -webkit-appearance: none;
          appearance: none;
        }

        .dual-slider-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 0;
          background: #f97316;
          cursor: pointer;
          pointer-events: auto;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: background-color 0.2s;
        }

        .dual-slider-input::-webkit-slider-thumb:hover {
          background: #ea580c;
        }

        .dual-slider-input::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 0;
          background: #f97316;
          cursor: pointer;
          pointer-events: auto;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: background-color 0.2s;
        }

        .dual-slider-input::-moz-range-thumb:hover {
          background: #ea580c;
        }

        .dual-slider-input::-webkit-slider-runnable-track {
          background: transparent;
        }

        .dual-slider-input::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  )
}

export default DualSlider
