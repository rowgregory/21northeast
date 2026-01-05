'use client'

import Picture from './components/common/Picture'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FourZeroFour, NotFoundBg } from './lib/constants/hosted-image-links'
import useForm from './lib/hooks/useForm'
import { Search } from 'lucide-react'

const NotFound = () => {
  const { inputs, handleInput } = useForm(['keyword'])
  const { push } = useRouter()

  const handleKeywordSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    push(`/listings?keyword=${inputs.keyword}`)
  }

  return (
    <div className="relative w-full h-[725px] xl:h-[785px]">
      <Picture
        src={NotFoundBg}
        alt="21 North East Listings"
        className="w-full h-full object-cover"
        priority={false}
      />
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col w-full h-full flex justify-center bg-black/70 pb-20 px-5 xl:px-3">
        <div className="max-w-screen-sm mx-auto w-full flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl mb-10 text-center font-bold">
            Looks like this page went out for a showing and never came back!
          </h1>
          <Picture
            src={FourZeroFour}
            alt="Not Found 404"
            className="w-full max-w-80 h-full mb-10"
            priority={true}
          />
          <p className="text-white text-sm font-semibold text-center mb-2">
            We are really sorry but the page you requested is missing
          </p>
          <p className="text-white text-sm font-semibold text-center mb-20">
            Go back to the{' '}
            <Link href="/" className="text-orange-500 text-sm">
              homepage
            </Link>
          </p>
          <form
            onSubmit={handleKeywordSearch}
            className={`flex items-center h-16 w-full pb-3 relative after:absolute after:content-[''] after:left:0 after:bottom-0 after:w-full after:border-b-[1px] after:border-opacity-45 after:border-b-gray-200`}
          >
            <input
              id="keyword"
              name="keyword"
              onChange={handleInput}
              placeholder="ENTER YOUR KEYWORD"
              className="form-control h-full w-full bg-transparent focus:outline-none text-white placeholder:text-white"
              aria-label="Keyword"
              value={inputs.keyword as string}
            />
            <button type="submit">
              <Search className="w-4 h-4 text-white duration-200 hover:text-orange-500" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NotFound
