import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from 'components/common/ProtectedRoute';
import DefaultView from 'components/common/DefaultView';

const Main = lazy(() => import(/* webpackPrefetch: true */ 'components/views/main/Main'));
const NotFound = lazy(() => import('components/views/NotFound'));
const Login = lazy(() => import('components/views/Login'));
const Stores = lazy(() => import('components/views/Stores.js'));
const EnrichedStores = lazy(() => import('components/views/EnrichedStores.js'));
// [hygen] Import views

export const ROUTE_PATHS = {
  LOGIN: `${process.env.PUBLIC_URL}/login`,
  DEFAULT: `${process.env.PUBLIC_URL}/`,
  NOT_FOUND: `${process.env.PUBLIC_URL}/404`,
  STORES: `${process.env.PUBLIC_URL}/stores`,
  ENRICHED_STORES: '/enriched',
  // [hygen] Add path routes
};

const routes = [
  {
    path: ROUTE_PATHS.DEFAULT,
    element: (
      <ProtectedRoute>
        <DefaultView>
          <Main />
        </DefaultView>
      </ProtectedRoute>
    ),
    children: [
      // { path: '/', element: <Navigate to='/<your default view>' /> },
      { path: ROUTE_PATHS.STORES, element: <Stores /> },
      { path: ROUTE_PATHS.ENRICHED_STORES, element: <EnrichedStores /> },
      // [hygen] Add routes
    ],
  },
  { path: ROUTE_PATHS.LOGIN, element: <Login /> },
  {
    path: ROUTE_PATHS.NOT_FOUND,
    element: (
      <DefaultView>
        <NotFound />
      </DefaultView>
    ),
  },
  { path: '*', element: <Navigate to={ROUTE_PATHS.NOT_FOUND} /> },
];

export default routes;
