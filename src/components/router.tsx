import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Category } from '../pages/Category'
import { Checkout } from '../pages/Checkout'
import { NotFound } from '../pages/NotFound'
import { Home } from '../pages/Home'
import { Item } from '../pages/Item'
import { Layout } from '../pages/Layout'
import { Confirmation } from '../pages/Confirmation'
import NoAccessWithCartEmpty from './utils/NoAccessWithCartEmpty'
import Echec from '../pages/Echec'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="item/:slug" element={<Item />} />
      <Route
        path="checkout"
        element={
          <NoAccessWithCartEmpty>
            <Checkout />
          </NoAccessWithCartEmpty>
        }
      />
      <Route
        path="confirmation"
        element={
          <NoAccessWithCartEmpty>
            <Confirmation />
          </NoAccessWithCartEmpty>
        }
      />

      <Route path="echec" element={<Echec />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default router
