// src/app/page.tsx
'use client';
import React from 'react';
import { ShoppingBag, DollarSign } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[rgb(243,244,246)] p-6">
      <div className="mx-auto max-w-[1400px]">
        {/* Grid principal */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* SIDEBAR IZQUIERDO */}
          <aside className="bg-white rounded-2xl shadow p-6 flex flex-col">
            {/* Encabezado de la tarjeta */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-purple-700">My Cards</h2>
              <span className="text-sm text-gray-400">10:25, 29 October 2019</span>
            </div>

            {/* Tarjetas */}
            <div className="flex gap-4 items-center">
              <button className="w-20 h-32 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-xl font-bold">
                +
              </button>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-4 w-full">
                <p className="text-sm tracking-widest">2567 5647 8700 XXXX</p>
                <div className="flex justify-between mt-4">
                  <span className="text-xs">
                    CARD HOLDER<br /><strong>JOSEPH ALEX</strong>
                  </span>
                  <span className="text-xs">
                    VALID<br /><strong>06/2020</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Transacciones Recientes */}
            <div className="mt-8 flex-1">
              <h3 className="text-md font-medium text-gray-800 mb-4">Recent Transactions</h3>
              <div className="flex gap-4 mb-4 text-sm">
                <button className="text-purple-700 font-semibold border-b-2 border-purple-700">
                  All
                </button>
                <button className="text-gray-400">Income</button>
                <button className="text-gray-400">Expenses</button>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="text-purple-700" />
                    <div>
                      <p className="font-medium text-gray-700">Shopping</p>
                      <p className="text-xs text-gray-500">Purchased household articles</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-red-500 font-semibold">$410.00</p>
                    <p className="text-xs text-gray-500">Oct 17</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <DollarSign className="text-green-600" />
                    <div>
                      <p className="font-medium text-gray-700">Payment</p>
                      <p className="text-xs text-gray-500">Payment received from Jackson</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-semibold">$260.00</p>
                    <p className="text-xs text-gray-500">Oct 17</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* SECCIÓN DERECHA */}
          <section className="xl:col-span-2 bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-purple-700">Balance</h2>
              <span className="text-sm text-gray-400">Today</span>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-gray-500 text-sm">Balance</p>
                <h3 className="text-3xl font-bold text-purple-700">$2370.50</h3>
                <p className="text-xs text-gray-400 mt-1">2567 5647 8700 XXXX</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Income</p>
                <h3 className="text-xl text-green-600 font-semibold">$3650.50</h3>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Expenses</p>
                <h3 className="text-xl text-red-500 font-semibold">$1280.00</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-500">Last Payment Details</p>
                <p className="text-md font-medium text-gray-700">Amount Paid</p>
                <p className="text-lg font-bold text-gray-900">$320.00</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-lg font-bold text-gray-900">17 Oct 2019</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
              <p className="text-gray-400">[Chart goes here]</p>
            </div>
            <div className="flex justify-end mt-6">
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                New Transaction
              </button>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
