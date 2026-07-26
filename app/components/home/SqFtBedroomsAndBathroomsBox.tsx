import { Bed, DraftingCompass, ShowerHead } from 'lucide-react'

type Props = {
  sqFt: string
  bedrooms: number
  bathrooms: number
  iconColor?: string
}

export default function SqFtBedroomsAndBathroomsBox({
  sqFt,
  bedrooms,
  bathrooms,
  iconColor
}: Props) {
  const icon = iconColor ?? 'text-primary-light dark:text-primary-dark'

  return (
    <div className="flex items-start md:items-center justify-between gap-y-4 sm:gap-8 w-full flex-col sm:flex-row">
      <div className="flex items-center gap-2">
        <DraftingCompass className={`${icon} w-5 h-5`} aria-hidden="true" />
        <div className="flex flex-col">
          <p className="text-text-light font-bold text-sm leading-4">{sqFt} SqFt</p>
          <p className="text-muted-light font-normal text-xs leading-4">Size</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Bed className={`${icon} w-5 h-5`} aria-hidden="true" />
        <div className="flex flex-col">
          <p className="text-text-light font-bold leading-4 text-sm">{bedrooms}</p>
          <p className="text-muted-light font-normal leading-4 text-xs">Bedrooms</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ShowerHead className={`${icon} w-5 h-5`} aria-hidden="true" />
        <div className="flex flex-col">
          <p className="text-text-light font-bold leading-4 text-sm">{bathrooms}</p>
          <p className="text-muted-light font-normal leading-4 text-xs">Bathrooms</p>
        </div>
      </div>
    </div>
  )
}
