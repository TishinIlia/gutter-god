import { FC } from 'react'
import { Outlet } from 'react-router'

const ScheduleLayout: FC = () => (
  <div className="flex h-screen w-screen">
    <Outlet />
  </div>
)

export default ScheduleLayout
