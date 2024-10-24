import { ChangeEvent } from 'react'

interface DynamicInputConfig {
  type: 'select' | 'input'
  name: string
  label: string
  options?: string[]
  placeholder?: string
  className?: string
}

interface DynamicInputProps {
  config: DynamicInputConfig
  value: string | number | undefined | any
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

interface DynamicInputGroupProps {
  inputNames: string[]
  inputConfig: DynamicInputConfig[]
  inputs: Record<string, string | number | boolean | undefined>
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void
}

export type { DynamicInputConfig, DynamicInputProps, DynamicInputGroupProps }
