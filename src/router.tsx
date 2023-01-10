import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Category } from './pages/Category/Category'
import { Checkout } from './pages/Checkout/Checkout'
import Error from './pages/Error/Error'
import { Home } from './pages/Home/Home'
import { Item } from './pages/Item/Item'
import { Layout } from './pages/Layout/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="item/:slug" element={<Item />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="error" element={<Error />} />
    </Route>
  ),
  { basename: '/audiophile-frontend' }
)

export default router
