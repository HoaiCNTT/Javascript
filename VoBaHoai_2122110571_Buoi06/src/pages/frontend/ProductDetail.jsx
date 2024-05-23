import React from 'react';
import Coca from '../../assets/images/COCA2 - Copy.jpg';

const ProductDetail = () => {
  const detail = {
    name: 'Coca Cola',
    brand: 'America',
    price: '10k',
    description: 'một biểu tượng của hương vị kinh điển và kỷ nguyên tiêu dùng toàn cầu',
    image: Coca,
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={Coca} alt="Coca" />
      </div>
      <div className="product-info">
        <h2>{detail.name}</h2>
        <h3>{detail.brand}</h3>
        <p>{detail.price}</p>
        <p>{detail.description}</p>
      </div>
    </div>
  );
};
export default ProductDetail;