import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home/Home";
import AllGames from "../components/Allgames/AllGames";
import ProductDetailes from "../components/ProductDetailes/ProductDetailes";
import ErrorElement from "../components/ErrorElement/ErrorElement";


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
                element: <ProductDetailes/>
            }
        ]
    }
])
export default router;