import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, BarChart2 } from 'lucide-react'

const icons: Record<string, React.ReactNode> = {
  dollar: <DollarSign size={20} />,
  users: <Users size={20} />,
  trend: <BarChart2 size={20} />,
  cart: <ShoppingCart size={20} />,
}

interface KpiCardProps {
  label: string
  value: string
  change: number
  positive: boolean
  icon: string
}

export default function KpiCard({ label, value, change, positive, icon }: KpiCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</span>
        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500">
          {icons[icon]}
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</p>
      <div className={`flex items-center gap-1 text-sm font-medium ${positive ? 'text-emerald-500' : 'text-red-500'}`}>
        {positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        <span>{positive ? '+' : ''}{change}% vs mes anterior</span>
      </div>
    </div>
  )
}
