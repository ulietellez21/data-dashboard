import { TrendingUp, TrendingDown } from 'lucide-react'
import { topProducts } from '../data/mockData'

export default function TopProducts() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">Top productos</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Por ingresos generados</p>
      <div className="space-y-3">
        {topProducts.map((p, i) => (
          <div key={p.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-gray-900 dark:text-white truncate">{p.name}</p>
              <p className="text-xs text-gray-400">{p.sales.toLocaleString()} ventas</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-sm">${p.revenue.toLocaleString()}</p>
              <div className={`flex items-center justify-end gap-0.5 text-xs font-medium ${p.change >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                {p.change >= 0 ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                {p.change >= 0 ? '+' : ''}{p.change}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
