import {FunctionComponent} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from "src/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "src/components/pages/HomePage.tsx";
import {Provider} from "react-redux";
import Layout from "src/components/layout/Layout.tsx";
import CountryDateList from "src/components/country/dateList/CountryDateList.tsx";
import CountryReviews from "src/components/country/reviews/CountryReviews.tsx";
import CountryPage from "src/components/pages/CountryPage.tsx";
import CountryTourPlan from "src/components/country/plan/CountryTourPlan.tsx";
import CartPage from "src/components/pages/CartPage.tsx";
import CountryMapRoute from "src/components/country/route/CountryMapRoute.tsx";

interface OwnProps {
}

type Props = OwnProps;
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/country/:countryId',
        element: <CountryPage/>,
        children: [
          {path: 'plan', element: <CountryTourPlan/>},
          {path: 'reviews', element: <CountryReviews/>},
          {path: 'dates', element: <CountryDateList/>},
          {path: 'map', element: <CountryMapRoute/>},
        ],
      },
      {
        path: '/cart', element: <CartPage/>
      }
    ]
  }
])
const App: FunctionComponent<Props> = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
};

export default App;
