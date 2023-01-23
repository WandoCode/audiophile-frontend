import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Category } from '../pages/Category'
import { Checkout } from '../pages/Checkout'
import { NotFound } from '../pages/NotFound'
import { Home } from '../pages/Home'
import { Item } from '../pages/Item'
import { Layout } from '../pages/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="item/:slug" element={<Item />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

// NB: Pour acceder normalement aux pages de l'app avec github pages:=> <DOMAIN>/audiophile-frontend/#/audiophile-frontend/
// Pour cela, il faut utiliser 'createHashRouter' au lieu de 'createBrowserRouter', ajouter l'option 'basename' au router avec la valeur '/audiophile-frontend'.
// Finalement, dans le dossier de configuration de vite, changer la base du domain pour "base: '/audiophile-frontend'"
// Cela permet de contourner le domaine par défaut de github page qui ajoute '/<PROJECT_NAME>' à la suite du domaine => traité comme une route par react-router alors que cette route n'existe pas.

export default router
