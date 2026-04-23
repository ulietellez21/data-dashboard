import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { revenueData } from '../data/mockData'

const fmt = (v: number) => `$${(v / 1000).toFixed(0)}k`

export default function RevenueChart() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">Ingresos vs Gastos</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Resumen anual 2025</p>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={fmt} tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
          <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`, '']} contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
          <Legend />
          <Area type="monotone" dataKey="revenue" name="Ingresos" stroke="#0ea5e9" strokeWidth={2} fill="url(#gRevenue)" />
          <Area type="monotone" dataKey="profit" name="Ganancia" stroke="#10b981" strokeWidth={2} fill="url(#gProfit)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
