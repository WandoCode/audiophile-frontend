import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Layout } from '../pages/Layout'
import Home from '../pages/Home'
import NoAccessWithCartEmpty from './utils/NoAccessWithCartEmpty'
import { lazy, Suspense } from 'react'
import FallBackLoader from './utils/FallBackLoader'

const Category = lazy(() => import('../pages/Category'))
const Checkout = lazy(() => import('../pages/Checkout'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Item = lazy(() => import('../pages/Item'))
const Confirmation = lazy(() => import('../pages/Confirmation'))
const Echec = lazy(() => import('../pages/Echec'))

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="category/:category"
        element={
          <Suspense fallback={<FallBackLoader />}>
            <Category />
          </Suspense>
        }
      />
      <Route
        path="item/:slug"
        element={
          <Suspense fallback={<FallBackLoader />}>
            <Item />
          </Suspense>
        }
      />
      <Route
        path="checkout"
        element={
          <NoAccessWithCartEmpty>
            <Suspense fallback={<FallBackLoader />}>
              <Checkout />
            </Suspense>
          </NoAccessWithCartEmpty>
        }
      />
      <Route
        path="confirmation"
        element={
          <NoAccessWithCartEmpty>
            <Suspense fallback={<FallBackLoader />}>
              <Confirmation />
            </Suspense>
          </NoAccessWithCartEmpty>
        }
      />

      <Route
        path="echec"
        element={
          <Suspense fallback={<FallBackLoader />}>
            <Echec />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<FallBackLoader />}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>
  )
)

export default router
