import {
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
import { Error } from '../pages/Error'

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="item/:slug" element={<Item />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  { basename: '/audiophile-frontend' }
)

// FIXME: Pour acceder normalement aux pages de l'app (dev ou "buildé") => <DOMAIN>/audiophile-frontend/#/audiophile-frontend/

export default router
