import React from 'react'
import Roller from './components/loaders/Roller'

const Loading = () => {
  return (
    <div className="relative w-full mb-20 990:mb-[120px] -mt-20 990:mt-[-120px] min-h-[calc(100vh-80px)] 990:min-h-[calc(100vh-120px)]">
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <Roller />
      </div>
    </div>
  )
}

export default Loading
