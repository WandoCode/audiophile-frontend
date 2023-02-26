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
import { CompletionModal } from '../stories/Molecules'

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="item/:slug" element={<Item />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="confirmation" element={<CompletionModal />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default router
