import React from 'react'
import Slider from '../../components/Slider'
import ChinhSachItem from '../../components/ChinhSachItem'
import ChinhSach from '../../components/ChinhSach'
// import ProductItem from '../../components/ProductItem'
// import Fake from '../../data.fake.json'
 import Contact from './Contact'
// import Product from './Product'
//import ProductBrand from './ProductBrand'
 //import ProductCategory from './ProductCategory'
import BaiViet from '../../components/BaiViet'
//import ProductDetail from './ProductDetail'
const Home = () => {
  return (
    <div>
      <Slider/>
      <ChinhSach/>
      {/* <ProductItem products={Fake.products}/> */}
      <Contact/>
      <BaiViet/>
    </div>
  )
}

export default Home