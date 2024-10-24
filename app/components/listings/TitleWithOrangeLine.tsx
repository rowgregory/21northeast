import React, { FC } from 'react'

interface TitleWithOrangeLineProps {
  section: string;
  mb?: string;
}

const TitleWithOrangeLine: FC<TitleWithOrangeLineProps> = ({ section, mb }) => {
  return (
    <div className={`flex items-center gap-x-4 ${mb ?? 'mb-7'}`}>
      <h3 className="text-2xl font-bold">{section}</h3>
      <div className="w-7 h-1 bg-orange-500"></div>
    </div>
  )
}

export default TitleWithOrangeLine
