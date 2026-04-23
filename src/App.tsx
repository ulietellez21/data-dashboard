import { useState, useEffect } from 'react'
import { Moon, Sun, Bell } from 'lucide-react'
import Sidebar from './components/Sidebar'
import KpiCard from './components/KpiCard'
import RevenueChart from './components/RevenueChart'
import UserGrowthChart from './components/UserGrowthChart'
import CategoryChart from './components/CategoryChart'
import TopProducts from './components/TopProducts'
import { kpis } from './data/mockData'
import './index.css'

export default function App() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-sm text-gray-500">Bienvenido, Ulises · {new Date().toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Bell size={18} className="text-gray-500" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />
            </button>
            <button onClick={() => setDark(!dark)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {dark ? <Sun size={18} className="text-gray-500" /> : <Moon size={18} className="text-gray-500" />}
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {kpis.map((kpi) => <KpiCard key={kpi.label} {...kpi} />)}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2"><RevenueChart /></div>
            <CategoryChart />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UserGrowthChart />
            <TopProducts />
          </div>
        </main>
      </div>
    </div>
  )
}
