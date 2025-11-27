import { createBrowserRouter } from "react-router-dom";
import Home from '../views/Home'
import Blog from '../views/Blog'
import About from '../views/About'
import NotFound from '../views/Notfound'
import Layout from '../layout/Layout'
import Card from '../views/Card'
import { getCharacters } from "../api/getCharacters";
import { getCharacter } from '../api/getCharacter';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound/>,
        children: [
            {
                path:'/',
                element:<Home />,
            },
            {
                path: '/about',
                element: <About />,

            },  
            {
                path: '/blog',
                element: <Blog />,
                loader: async () => getCharacters(),
                
            },
            {
                path: '/blog/:id',
                element: <Card />,
                loader: getCharacter,
            },
        ]
    }
]);
