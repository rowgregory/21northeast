const addCommas = (value: string | number) => {
  // Convert the input to a string (if it's a number)
  const strValue = value?.toString()

  // Use a regular expression to add commas
  return strValue?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default addCommas
