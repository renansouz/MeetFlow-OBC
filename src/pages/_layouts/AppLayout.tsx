import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}