import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { categoryData } from '../data/mockData'

export default function CategoryChart() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">Ingresos por categoría</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Distribución porcentual</p>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={3} dataKey="value">
            {categoryData.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(v) => [`${v}%`, '']} contentStyle={{ borderRadius: 8, border: 'none' }} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
