import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { userGrowthData } from '../data/mockData'

export default function UserGrowthChart() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">Crecimiento de usuarios</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Últimas 8 semanas</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={userGrowthData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
          <Legend />
          <Bar dataKey="users" name="Registrados" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="active" name="Activos" fill="#c4b5fd" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
