import React, { FC } from 'react'
import Accordion from '@/app/components/common/Accordion'
import { toggleOtherFeatures } from '@/app/lib/redux/features/listingSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/app/lib/redux/store'
import { Inputs } from '@/app/lib/types/form-types'
import { ChevronUp } from 'lucide-react'

interface OtherFeaturesProps {
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputs: Inputs
}

const features = [
  { name: 'Air Conditioning', inputName: 'coolingYN' },
  { name: 'Heating', inputName: 'heatingYN' },
  { name: 'Swimming Pool', inputName: 'poolPrivateYN' },
  { name: 'Property Attached', inputName: 'propertyAttachedYN' },
  { name: 'Central Heating', inputName: 'heatingYN' },
  { name: 'Fire Place', inputName: 'fireplaceYN' },
  { name: 'Attached Garage', inputName: 'attachedGarageYN' },
  { name: 'Garage', inputName: 'garageYN' },
  { name: 'Car Port', inputName: 'carportYN' },
  { name: 'Horse', inputName: 'horseYN' },
  { name: 'Water Front', inputName: 'waterfrontYN' },
  { name: 'Open Parking', inputName: 'openParkingYN' },
  { name: 'Sauna', inputName: 'spaYN' }
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
          <ChevronUp
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
