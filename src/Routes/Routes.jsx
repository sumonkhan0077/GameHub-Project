import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home/Home";
import AllGames from "../components/Allgames/AllGames";
import ProductDetailes from "../components/ProductDetailes/ProductDetailes";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import Profile from "../components/Profile/Profile";
import PrivetRoute from "../Context/PrivetRoute";
import ForgetPassword from "../components/ForgetPasswoerd/ForgetPassword";
import { path } from "motion/react-client";
import MostPopular from "../components/Most-Popular-game/MostPopular";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorElement></ErrorElement>,
        element:<MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/all_games",
                element: <AllGames></AllGames>
            },
            { 
                path:'/product/:id',
                element: <PrivetRoute>
                    <ProductDetailes/>
                </PrivetRoute> 
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/profile',
                element:<PrivetRoute>
                     <Profile></Profile>
                </PrivetRoute>
            },
            {
                path:"/popular-game",
                element:<PrivetRoute>
                    <MostPopular></MostPopular>
                </PrivetRoute>
            }
        ]
    },
    {
        path:'/forget-password',
        element:<ForgetPassword></ForgetPassword>
    }
])
export default router;