import { Inputs } from '../types/form-types'

const cleanInputs = (inputs: Inputs) => {
  const cleanedInputs = {} as Record<string, any>

  for (const key in inputs) {
    const value = inputs[key]

    if (value !== '' && value !== undefined) {
      cleanedInputs[key] = value
    }
  }

  return cleanedInputs
}

export default cleanInputs
