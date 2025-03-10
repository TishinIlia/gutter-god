import { FC } from 'react'
import { Routes, Route } from 'react-router'

import App from '@/App.tsx'
import Schedule from '@/components/schedule/Schedule.tsx'
import ScheduleLayout from '@/components/schedule/ScheduleLayout.tsx'

const Router: FC = () => (
  <Routes>
    <Route element={<App />} index />

    <Route element={<ScheduleLayout />} path="schedule">
      <Route element={<Schedule />} path=":customerId" />
    </Route>
  </Routes>
)

export default Router
