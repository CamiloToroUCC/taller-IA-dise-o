import type { FC, ReactNode } from "react"

interface TransactionItemProps {
  icon: ReactNode
  title: string
  description: string
  amount: string
  date: string
  type: "income" | "expense"
}

const TransactionItem: FC<TransactionItemProps> = ({ icon, title, description, amount, date, type }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-neutral-100">
      <div className="flex items-center">
        <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">{icon}</div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-neutral-500">{description}</div>
        </div>
      </div>
      <div className="text-right">
        <div className={type === "income" ? "text-green-500 font-medium" : "text-red-500 font-medium"}>
          {type === "income" ? amount : `-${amount}`}
        </div>
        <div className="text-sm text-neutral-500">{date}</div>
      </div>
    </div>
  )
}

export default TransactionItem
