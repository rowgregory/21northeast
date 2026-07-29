import Link from 'next/link'
import { headerLinksData } from '../../lib/utils/navigation.utils'
import { usePathname } from 'next/navigation'
import useRemoveScroll from '../../lib/hooks/useRemoveScroll'
import { useAppStore } from '@/stores/appStore'

export const NavigationDrawer = () => {
  const pathname = usePathname()
  const { navigationDrawer, closeNavigationDrawer } = useAppStore()
  useRemoveScroll(navigationDrawer)
  const onClose = () => closeNavigationDrawer()

  return (
    <>
      <div onClick={onClose}>
        <div
          className={`${
            navigationDrawer ? 'block' : 'hidden'
          } fixed top-0 left-0 h-screen w-screen  bg-black/80 z-90 animate-fadeIn`}
        ></div>
      </div>
      <div
        className={`${
          navigationDrawer ? 'translate-x-0' : '-translate-x-70'
        } duration-200 w-70 fixed top-0 left-0 bottom-0 z-100 transition-all bg-[#212121]`}
      >
        <div className="flex flex-col">
          {headerLinksData(pathname).map((link, i) => (
            <Link
              onClick={onClose}
              key={i}
              href={link.linkKey}
              className="text-white text-sm uppercase font-bold py-3 px-4 border-t border-[#404040] hover:text-orange-500 duration-200"
            >
              {link.textKey}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
