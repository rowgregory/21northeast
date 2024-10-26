import React, { FormEvent } from 'react'
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import useForm from '../hooks/useForm'
import { closeKeywordModal } from '../redux/features/headerSlice'
import useRemoveScroll from '../hooks/useRemoveScroll'
import { magnifyingGlassIcon, timesIcon } from '../icons'
import AwesomeIcon from '../components/common/AwesomeIcon'
import { useRouter } from 'next/navigation'

const KeywordModal = () => {
  const navigate = useRouter()
  const dispatch = useAppDispatch()
  const { keywordModal } = useAppSelector((state: RootState) => state.header)
  const { inputs, handleInput } = useForm(['keyword'])
  const handleKeywordModalClose = () => dispatch(closeKeywordModal())
  useRemoveScroll(keywordModal)

  const handleKeywordSearch = (e: FormEvent) => {
    e.preventDefault()
    dispatch(closeKeywordModal())
    navigate.push(`/search?keyword=${inputs.keyword}`)
  }

  return (
    <Modal isOpen={keywordModal} isCentered onClose={handleKeywordModalClose}>
      <ModalOverlay />
      <ModalContent>
        <div className="bg-white p-5 flex flex-col w-full h-fit justify-center sm:justify-normal">
          <AwesomeIcon
            onClick={handleKeywordModalClose}
            icon={timesIcon}
            className="w-3 h-3 absolute top-3 right-3 cursor-pointer"
          />
          <p className="text-zinc-800 mx-auto text-center text-[23px] uppercase mb-8">
            Enter Your Keyword
          </p>
          <form onSubmit={handleKeywordSearch} className="flex items-center h-[44px] w-full mb-8">
            <input
              id="keyword"
              name="keyword"
              onChange={handleInput}
              placeholder="Type and hit enter"
              className="h-full w-full border-[1px] border-gray-200 pl-3 focus:outline-none"
              aria-label="Keyword"
              value={(inputs.keyword as string) || ''}
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-orange-500 h-full px-4 border-[1px] border-orange-500"
            >
              <AwesomeIcon icon={magnifyingGlassIcon} className="w-3 h-3 text-white" />
              <p className="text-sm text-white">Search</p>
            </button>
          </form>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default KeywordModal
