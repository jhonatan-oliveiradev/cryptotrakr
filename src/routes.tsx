import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/layout';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/detail/:cripto",
        element: <Detail />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])

export { router };