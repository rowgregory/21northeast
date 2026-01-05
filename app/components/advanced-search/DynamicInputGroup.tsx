import { ChangeEvent, FC } from 'react'
import DynamicInput from './DynamicInput'
import { DynamicInputGroupProps } from '@/app/lib/types/search-types'

const DynamicInputGroup: FC<DynamicInputGroupProps> = ({
  inputNames,
  inputConfig,
  inputs,
  handleSelect
}) => {
  return (
    <div className="flex space-x-4 col-span-1">
      {inputNames.map((inputName) => {
        const config = inputConfig.find((input) => input.name === inputName)
        if (!config) return null

        return (
          <DynamicInput
            key={inputName}
            config={config}
            value={inputs[inputName]}
            onChange={(e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) =>
              handleSelect(e as ChangeEvent<HTMLSelectElement>)
            }
          />
        )
      })}
    </div>
  )
}

export default DynamicInputGroup
