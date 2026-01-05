'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { Errors, Inputs, UseFormHook } from '../types/form-types'

const useForm = (fields: string[], data?: Inputs): UseFormHook => {
  const initialInputs = fields.reduce(
    (acc: Record<string, string | number | boolean | undefined>, name: string) => {
      if (name.startsWith('is') || name.startsWith('has')) {
        acc[name] = undefined // Explicitly set to undefined for boolean values
      }
      return acc
    },
    {}
  )

  const [inputs, setInputs] = useState<Inputs>(initialInputs)
  const [errors, setErrors] = useState<Errors>({})
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (data && !initialized) {
      const mappedInputs = fields.reduce((acc: Inputs, name: string) => {
        acc[name] = data[name] !== undefined ? data[name] : ''
        return acc
      }, {})

      setInputs(mappedInputs)
      setInitialized(true)
    }
  }, [data, fields, initialized])

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setInputs((prev: Inputs) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target

    setInputs((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    setInputs((prev: Inputs) => ({
      ...prev,
      [name]: checked
    }))
  }

  return {
    inputs,
    errors,
    handleInput,
    handleSelect,
    handleToggle,
    setInputs,
    setErrors
  }
}

export default useForm
