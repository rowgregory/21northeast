import { FormEvent } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../../lib/redux/store'
import { closeKeywordModal } from '../../lib/redux/features/headerSlice'
import { useRouter } from 'next/navigation'
import useForm from '@/app/lib/hooks/useForm'
import useRemoveScroll from '@/app/lib/hooks/useRemoveScroll'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { Search, X } from 'lucide-react'

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
    <AnimatePresence>
      {keywordModal && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleKeywordModalClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-white p-5 flex flex-col w-full h-fit justify-center sm:justify-normal relative">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleKeywordModalClose}
                className="absolute top-3 right-3 text-[#232323] hover:text-orange-500 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-3 h-3" />
              </motion.button>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-zinc-800 mx-auto text-center text-[23px] uppercase mb-8 font-semibold"
              >
                Enter Your Keyword
              </motion.p>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                onSubmit={handleKeywordSearch}
                className="flex items-center h-[44px] w-full mb-8"
              >
                <input
                  id="keyword"
                  name="keyword"
                  onChange={handleInput}
                  placeholder="Type and hit enter"
                  className="h-full w-full border-[1px] border-gray-200 pl-3 focus:outline-none focus:border-orange-500 transition-colors"
                  aria-label="Keyword"
                  value={(inputs.keyword as string) || ''}
                />
                <motion.button
                  type="submit"
                  whileHover={{ backgroundColor: '#ea580c' }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-orange-500 h-full px-4 border-[1px] border-orange-500 transition-colors"
                >
                  <Search className="w-3 h-3 text-white" />
                  <p className="text-sm text-white font-semibold">Search</p>
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default KeywordModal
