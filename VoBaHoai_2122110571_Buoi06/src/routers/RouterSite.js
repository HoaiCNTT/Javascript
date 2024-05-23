import Contact from "../pages/frontend/Contact"
import Home from "../pages/frontend/Home"
import Product  from "../pages/frontend/Product"
import ProductCategory from "../pages/frontend/ProductCategory"
import ProductBrand from "../pages/frontend/ProductBrand"
import ProductDetail from "../pages/frontend/ProductDetail"

const RouterSite=[
    {   index:true, element:<Home/>},
    {   path:"lien-he", element:<Contact/>},
    {   path:"san-pham", element:<Product/>},
    {   path:"danh-muc/:slug", element:<ProductCategory/>},
    {   path:"thuong-hieu/:slug", element:<ProductBrand/>},
    {   path:"san-pham/:slug", element:<ProductDetail/>}
]
export default RouterSite;