import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="layout">
      Layout
      <Outlet />
    </div>
  )
}

export { Layout }
