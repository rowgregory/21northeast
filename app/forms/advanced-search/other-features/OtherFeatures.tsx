import React, { FC } from 'react'
import Accordion from '@/app/components/common/Accordion'
import AwesomeIcon from '@/app/components/common/AwesomeIcon'
import { chevronUpIcon } from '@/app/icons'
import { toggleOtherFeatures } from '@/app/redux/features/listingSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/app/redux/store'
import { Inputs } from '@/app/types/form-types'

interface OtherFeaturesProps {
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputs: Inputs
}

const features = [
  { name: 'Air Conditioning', inputName: 'hasAirConditioning' },
  { name: 'Laundry', inputName: 'hasLaundry' },
  { name: 'Swimming Pool', inputName: 'hasSwimmingPool' },
  { name: 'Central Heating', inputName: 'hasCentralHeating' },
  { name: 'Laundry Room', inputName: 'hasLaundryRoom' },
  { name: 'TV Cable', inputName: 'hasTVCable' },
  { name: 'Electric Range', inputName: 'hasElectricRange' },
  { name: 'Marble Floors', inputName: 'hasMarbleFloors' },
  { name: 'Washer', inputName: 'hasWasher' },
  { name: 'Fire Alarm', inputName: 'hasFireAlarm' },
  { name: 'Microwave', inputName: 'hasMicrowave' },
  { name: 'WiFi', inputName: 'hasWiFi' },
  { name: 'Gym', inputName: 'hasGym' },
  { name: 'Refrigerator', inputName: 'hasRefrigerator' },
  { name: 'Home Theatre', inputName: 'hasHomeTheater' },
  { name: 'Sauna', inputName: 'hasSauna' }
]

const OtherFeatures: FC<OtherFeaturesProps> = ({ handleToggle, inputs }) => {
  const dispatch = useAppDispatch()
  const { otherFeatures } = useAppSelector((state: RootState) => state.listing)
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-x-2 mb-4">
        <div
          onClick={() => dispatch(toggleOtherFeatures())}
          className="w-5 h-5 flex items-center justify-center bg-orange-500"
        >
          <AwesomeIcon
            icon={chevronUpIcon}
            className={`${otherFeatures ? '' : 'rotate-180'} duration-200 text-white w-3 h-3`}
          />
        </div>
        <h3 className="font-bold text-sm">Other Features</h3>
      </div>
      <Accordion>
        <section className="grid grid-cols-12 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-2 flex flex-col gap-y-4"
            >
              <label htmlFor={feature.inputName} className="flex items-center gap-x-2">
                <input
                  name={feature.inputName}
                  id={feature.inputName}
                  type="checkbox"
                  onChange={handleToggle}
                  checked={(inputs[feature.inputName] as boolean) || false}
                  className="cursor-pointer"
                />
                <span className="text-sm text-[#787878]">{feature.name}</span>
              </label>
            </div>
          ))}
        </section>
      </Accordion>
    </div>
  )
}

export default OtherFeatures
