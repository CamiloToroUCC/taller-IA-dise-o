"use client"

import { useState } from "react"
import {
  Search,
  Bell,
  ChevronDown,
  Home,
  List,
  Clock,
  HelpCircle,
  Plus,
  ShoppingBag,
  CreditCard,
  ArrowRight,
} from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import CreditCardComponent from "@/components/credit-card"
import TransactionItem from "@/components/transaction-item"
import StatisticsChart from "@/components/statistics-chart"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("ALL")

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-16 bg-white flex flex-col items-center py-6 border-e">
        <button className="p-3 mb-8">
          <List className="size-6 text-neutral-500" />
        </button>
        <div className="flex flex-col items-center gap-8 flex-1">
          <button className="p-3">
            <Home className="size-6 text-purple-600" />
          </button>
          <button className="p-3">
            <List className="size-6 text-purple-600" />
          </button>
          <button className="p-3">
            <Clock className="size-6 text-purple-600" />
          </button>
        </div>
        <button className="p-3 mt-auto">
          <HelpCircle className="size-6 text-neutral-500" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="flex-1 p-6 overflow-y-auto bg-white">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-semibold text-purple-800">My Cards</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full bg-neutral-100">
                <Search className="size-5 text-neutral-500" />
              </button>
              <button className="p-2 rounded-full bg-neutral-100 relative">
                <Bell className="size-5 text-neutral-500" />
                <span className="absolute top-0 right-0 size-3 bg-purple-600 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-2 bg-neutral-100 rounded-full px-3 py-1">
                <span className="text-sm">Joseph Alex</span>
                <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="size-8 rounded-full" />
              </div>
            </div>
          </div>

          <div className="text-sm text-neutral-500 mb-6">10:25, 20 October 2019</div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="border-2 border-dashed border-neutral-300 rounded-xl flex items-center justify-center h-48 bg-white">
              <Plus className="size-8 text-neutral-400" />
            </div>
            <CreditCardComponent
              type="mastercard"
              number="2567 5647 8700 XXXX"
              holder="JOSEPH ALEX"
              expiry="06/2020"
              color="bg-gradient-to-br from-purple-500 to-purple-700"
            />
            <CreditCardComponent
              type="visa"
              number="2567 5647 8700 XXXX"
              holder="JOSEPH ALEX"
              expiry="06/2020"
              color="bg-neutral-300"
            />
          </div>

          {/* Transactions Section */}
          <div className="bg-white">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-purple-800">Recent Transactions</h2>
              <button className="text-sm text-neutral-500">View All</button>
            </div>

            <Tabs defaultValue="ALL" className="mb-6">
              <TabsList className="border-b w-full justify-start rounded-none bg-transparent">
                <TabsTrigger
                  value="ALL"
                  onClick={() => setActiveTab("ALL")}
                  className={`rounded-none px-6 py-2 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:shadow-none ${activeTab === "ALL" ? "text-purple-800" : "text-neutral-500"}`}
                >
                  ALL
                </TabsTrigger>
                <TabsTrigger
                  value="INCOME"
                  onClick={() => setActiveTab("INCOME")}
                  className={`rounded-none px-6 py-2 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:shadow-none ${activeTab === "INCOME" ? "text-purple-800" : "text-neutral-500"}`}
                >
                  INCOME
                </TabsTrigger>
                <TabsTrigger
                  value="EXPENSES"
                  onClick={() => setActiveTab("EXPENSES")}
                  className={`rounded-none px-6 py-2 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:shadow-none ${activeTab === "EXPENSES" ? "text-purple-800" : "text-neutral-500"}`}
                >
                  EXPENSES
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center mb-6">
              <span className="text-sm font-medium text-purple-800 mr-2">TODAY</span>
              <ChevronDown className="size-4 text-purple-800" />
            </div>

            <div className="flex flex-col gap-4">
              <TransactionItem
                icon={<ShoppingBag className="size-5 text-purple-600" />}
                title="Shopping"
                description="Purchased household articles"
                amount="$410.00"
                date="Oct 17"
                type="expense"
              />
              <TransactionItem
                icon={<CreditCard className="size-5 text-purple-600" />}
                title="Payment"
                description="Payment received from Jackson"
                amount="$260.00"
                date="Oct 17"
                type="income"
              />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-96 bg-neutral-50 p-6 relative">
          {/* Balance Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Balance</h2>
            <div className="text-3xl font-bold text-purple-800 mb-1">$2370.50</div>
            <div className="text-sm text-neutral-500 mb-6">2567 5647 8700 XXXX</div>

            <div className="flex justify-between mb-4">
              <div>
                <div className="text-sm text-neutral-500 mb-2">Income</div>
                <div className="flex items-center text-green-500">
                  <span className="mr-2">✓</span>
                  <span className="font-semibold">$3650.50</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-neutral-500 mb-2">Expenses</div>
                <div className="flex items-center text-red-500">
                  <span className="mr-2">↗</span>
                  <span className="font-semibold">$1280.00</span>
                </div>
              </div>
            </div>
            <div className="border-t border-neutral-200 my-4"></div>

            <div>
              <h3 className="text-base font-semibold mb-4">Last Payment Details</h3>
              <div className="flex justify-between mb-2">
                <div className="text-sm text-neutral-500">Amount Paid</div>
                <div className="text-sm text-neutral-500">Date</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold">$320.00</div>
                <div className="font-semibold">17 Oct 2019</div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Statistics</h2>
            <div className="h-64">
              <StatisticsChart />
            </div>
          </div>

          {/* New Transaction Button */}
          <div className="absolute bottom-6 right-6">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full py-6 px-6">
              <span className="mr-2">New Transaction</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
