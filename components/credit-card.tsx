import type { FC } from "react"

interface CreditCardProps {
  type: "mastercard" | "visa"
  number: string
  holder: string
  expiry: string
  color: string
}

const CreditCardComponent: FC<CreditCardProps> = ({ type, number, holder, expiry, color }) => {
  return (
    <div className={`${color} rounded-xl p-6 text-white h-48 flex flex-col justify-between relative overflow-hidden`}>
      {/* Card Chip */}
      {type === "mastercard" && (
        <div className="absolute top-6 right-6 size-10 border border-white/30 rounded-md grid place-items-center">
          <div className="size-6 border border-white/30 rounded-md"></div>
        </div>
      )}

      {/* Card Logo */}
      <div className="flex items-center gap-2">
        {type === "mastercard" && (
          <div className="flex">
            <div className="size-8 bg-red-500 rounded-full opacity-90"></div>
            <div className="size-8 bg-yellow-500 rounded-full -ms-4 opacity-90"></div>
          </div>
        )}
        {type === "visa" && <div className="text-2xl font-bold italic">VISA</div>}
      </div>

      {/* Card Number */}
      <div className="text-lg tracking-wider">{number}</div>

      {/* Card Holder & Expiry */}
      <div className="flex justify-between items-end">
        <div>
          <div className="text-xs opacity-80 mb-1">CARD HOLDER</div>
          <div className="text-sm">{holder}</div>
        </div>
        <div>
          <div className="text-xs opacity-80 mb-1">VALID</div>
          <div className="text-sm">{expiry}</div>
        </div>
      </div>
    </div>
  )
}

export default CreditCardComponent
