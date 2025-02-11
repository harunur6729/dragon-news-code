import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path:"/news",
        element: <h1 >News LayOut</h1>
    },
    {
        path:"auth",
        element: <h1>Login LayOut</h1>
    },
    {
        path:"*",
        element:<h1>Error</h1>
    }
])

export default router;