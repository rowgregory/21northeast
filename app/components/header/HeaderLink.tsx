import { FC } from 'react'
import Link from 'next/link'
import { HeaderLinkProps } from '@/app/lib/types/header-types'
import { largeOrangeUpChevron } from '../common/styles'

const HeaderLink: FC<HeaderLinkProps> = ({ linkKey, active, textKey }) => {
  return (
    <Link
      href={linkKey}
      className={`text-13 font-medium relative duration-200
      ${
        active
          ? "after:absolute after:content-[''] after:w-3/4 after:h-1 after:bg-orange-400 after:top-7 after:left-0 after:right-0 after:mx-auto after:max-w-full"
          : 'hover:text-orange-500'
      }`}
    >
      <span className={`relative uppercase ${active ? largeOrangeUpChevron : ''}`}>{textKey}</span>
    </Link>
  )
}

export default HeaderLink
