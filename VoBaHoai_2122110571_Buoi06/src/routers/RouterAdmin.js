import Category from "../pages/backend/Category"
import Product from "../pages/backend/Product"

const RouterAdmin=[
    {
        path:"product",
        element:<Product />
    },
    {
        path:"category",
        element:<Category />
    }
]
export default RouterAdmin;