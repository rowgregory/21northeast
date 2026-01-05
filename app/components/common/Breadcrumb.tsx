import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

const Breadcrumb = ({ breadcrumb }: { breadcrumb: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center gap-x-2">
        <Home className="text-orange-500 w-3 h-3" />
        <p className="text-white uppercase text-xs font-bold">Home</p>
      </Link>
      <ChevronRight className="text-white w-2 h-2" />
      <p className="text-white uppercase text-xs">{breadcrumb}</p>
    </div>
  )
}

export default Breadcrumb
