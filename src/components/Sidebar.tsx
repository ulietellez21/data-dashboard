import { BarChart2, Users, ShoppingCart, Settings, Home, TrendingUp } from 'lucide-react'

const navItems = [
  { icon: <Home size={18} />, label: 'Inicio', active: true },
  { icon: <BarChart2 size={18} />, label: 'Analytics', active: false },
  { icon: <Users size={18} />, label: 'Usuarios', active: false },
  { icon: <ShoppingCart size={18} />, label: 'Ventas', active: false },
  { icon: <TrendingUp size={18} />, label: 'Reportes', active: false },
  { icon: <Settings size={18} />, label: 'Config', active: false },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-56 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 h-screen sticky top-0 p-4">
      <div className="flex items-center gap-2 px-2 py-4 mb-6">
        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
          <BarChart2 size={16} className="text-white" />
        </div>
        <span className="font-bold text-gray-900 dark:text-white">DataView</span>
      </div>
      <nav className="space-y-1 flex-1">
        {navItems.map(({ icon, label, active }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              active
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            {icon}
            {label}
          </button>
        ))}
      </nav>
      <div className="px-2 py-3 border-t border-gray-100 dark:border-gray-800 mt-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">UT</div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Ulises T.</p>
            <p className="text-xs text-gray-400 truncate">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
