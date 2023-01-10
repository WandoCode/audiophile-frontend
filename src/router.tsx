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

const options =
  process.env.NODE_ENV !== 'development'
    ? { basename: '/audiophile-frontend' }
    : {}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="item/:slug" element={<Item />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="error" element={<Error />} />
    </Route>
  ),
  options
)

export default router
