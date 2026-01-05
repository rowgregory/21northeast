import { DynamicInputProps } from '@/app/lib/types/search-types'
import { FC } from 'react'

const styles = {
  inputs: `text-sm border-[1px] border-[#dedede] rounded-sm 
  text-[#8f8f8f] focus:border-orange-500 px-2 h-[44px] w-full
  focus:outline-none placeholder:text-[#8f8f8f]`
}

const DynamicInput: FC<DynamicInputProps> = ({ config, value, onChange }) => {
  if (config.type === 'select') {
    return (
      <select
        name={config.name}
        id={config.name}
        onChange={onChange}
        value={value}
        className={`${styles.inputs} ${config.className}`}
        aria-label={config.label}
        tabIndex={0}
      >
        {config.options?.map((option, index) => (
          <option key={option} value={index === 0 ? '' : option}>
            {option} {['rangeValue1', 'rangeValue2'].includes(config.name) ? ' SqFt' : ''}
          </option>
        ))}
      </select>
    )
  }

  return (
    <input
      name={config.name}
      id={config.name}
      onChange={onChange}
      value={value || ''}
      className={`${styles.inputs}`}
      aria-label={config.label}
      tabIndex={0}
      placeholder={config.placeholder}
    />
  )
}

export default DynamicInput
