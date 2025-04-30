export default function Home() {
  return (
    <main className="min-h-screen bg-purple-50/30 flex items-center justify-center py-8">
      <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden bg-white shadow-lg">
        <Dashboard />
      </div>
    </main>
  )
}

import Dashboard from "@/components/dashboard"
