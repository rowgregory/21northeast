import { FC } from 'react'
import Link from 'next/link'
import { largeChevron } from '../../common/styles'

interface HeaderLinkProps {
  linkKey: string
  active: boolean
  textKey: string
  ariaLabel?: string
}

const HeaderLink: FC<HeaderLinkProps> = ({ linkKey, active, textKey, ariaLabel }) => {
  return (
    <Link
      href={linkKey}
      aria-label={ariaLabel}
      className={`text-13 font-medium relative duration-200 text-text-light dark:text-text-dark
      ${
        active
          ? "after:absolute after:content-[''] after:w-3/4 after:h-1 after:bg-primary-light dark:after:bg-primary-dark after:top-7 after:left-0 after:right-0 after:mx-auto after:max-w-full"
          : 'hover:text-primary-light dark:hover:text-primary-dark'
      }`}
    >
      <span className={`relative uppercase ${active ? largeChevron : ''}`}>{textKey}</span>
    </Link>
  )
}

export default HeaderLink
