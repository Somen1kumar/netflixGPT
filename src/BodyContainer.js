import React from 'react'
import Header from './components/Header/Header';
import Homepage from './components/homepage/index';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { Provider } from 'react-redux';
import AppStore from './utils/store';


const BodyContainer = () => {
  return (
    <React.Fragment>
        <Header />
        <Outlet />
      
    </React.Fragment>
  )
};
const createrRouter = createBrowserRouter([
    {
        path: '/',
        element: <BodyContainer />,
        children: [
            {
                path:'/browse',
                element: <Homepage />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            }

        ],
        errorElement: <h1>Loading</h1>
    }
]);

const RouterPro = () => {
    return (
        <Provider store={AppStore}>
            <RouterProvider router={createrRouter}/>
        </Provider>
    )
}

export default RouterPro;
