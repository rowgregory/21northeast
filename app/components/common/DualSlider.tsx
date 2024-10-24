import React, { FC, useEffect, useState } from 'react'
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb
} from '@chakra-ui/react'

interface DualSliderProps {
  min: number
  max: number
  value: [number, number]
  onInputChange: (values: [number, number]) => void
  text: string
}

const DualSlider: FC<DualSliderProps> = ({ min, max, value, onInputChange, text }) => {
  const [thumb1, setThumb1] = useState(0)
  const [thumb2, setThumb2] = useState(10000)

  useEffect(() => {
    setThumb1(value[0] || 0)
    setThumb2(value[1] || 10000)
  }, [value])

  const handleChange = (values: number[]) => {
    const newThumb1 = values[0]
    const newThumb2 = values[1]

    // Ensure thumbs can't cross
    if (newThumb1 < newThumb2) {
      setThumb1(newThumb1)
      setThumb2(newThumb2)
      onInputChange([newThumb1, newThumb2]) // Call the provided handler
    }
  }

  return (
    <div className="pt-2 pr-2.5 col-span-12 md:col-span-6 lg:col-span-4">
      <p className="text-sm text-[#a8a8a8] mb-1">
        {text} {`[${thumb1} - ${thumb2}]`} SqFt
      </p>
      <RangeSlider
        min={min}
        max={max}
        step={1}
        value={[thumb1, thumb2]}
        onChange={handleChange}
        colorScheme="orange"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} sx={{ bg: '#fa7317' }} />
        <RangeSliderThumb index={1} sx={{ bg: '#fa7317' }} />
      </RangeSlider>
    </div>
  )
}

export default DualSlider
