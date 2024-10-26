const getPropertySearchFormStyles = (type: string) => {
  let formStyles = {
    form: '',
    inputs: '',
    button: '',
    minMaxContainer: ''
  }

  switch (type) {
    case 'home':
      formStyles = {
        form: 'grid grid-cols-12 gap-y-4 sm:gap-x-8',
        inputs:
          'form-control py-3 px-1.5 h-12 border-2 border-[#565656] rounded-sm bg-transparent text-[#7c7c7c] focus:border-orange-500 focus:outline-none col-span-12 md:col-span-6 lg:col-span-4',
        button: `col-span-12 md:col-span-2 md:col-start-11`,
        minMaxContainer: `col-span-12 md:col-span-6 lg:col-span-4 flex gap-x-4 sm:gap-8`
      }
      break
    default:
      formStyles = {
        form: 'flex flex-col gap-y-4',
        inputs:
          'form-control py-3 px-1.5 w-full border-2 border-[#dedede] rounded-sm bg-transparent text-[#c7c7c7] placeholder:text-[#c7c7c7] focus:border-orange-500 focus:outline-none',
        button: ``,
        minMaxContainer: `w-full flex gap-x-4 sm:gap-4`
      }
      break
  }

  return formStyles
}

export default getPropertySearchFormStyles
