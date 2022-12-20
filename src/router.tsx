import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Category } from './pages/Category'
import { Checkout } from './pages/Checkout'
import Error from './pages/Error'
import { Home } from './pages/Home'
import { Item } from './pages/Item'
import { Layout } from './pages/Layout/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="item/:slug" element={<Item />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="error" element={<Error />} />
    </Route>
  )
)

export default router
