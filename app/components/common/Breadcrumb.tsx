import { chevronRightIcon, homeIcon } from '@/app/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({ breadcrumb }: { breadcrumb: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center gap-x-2">
        <FontAwesomeIcon icon={homeIcon} className="text-orange-500 w-3 h-3" />
        <p className="text-white uppercase text-xs font-bold">Home</p>
      </Link>
      <FontAwesomeIcon icon={chevronRightIcon} className="text-white w-2 h-2" />
      <p className="text-white uppercase text-xs">{breadcrumb}</p>
    </div>
  )
}

export default Breadcrumb
