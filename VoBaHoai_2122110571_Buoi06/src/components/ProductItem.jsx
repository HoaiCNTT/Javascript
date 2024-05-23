import React from 'react'
import Fake from '../data.fake.json'
const Product = (props) => {
    const Product = props.product;
    return (
        <div>
            <div className='row'>
            {Fake.products.map((product, index) => (
                <div key={index} className='col-2 m-auto'>
                    <div>{product.ten}</div>
                    <div>{product.gia}</div>
                    </div>
            ))}
            </div>
        </div>
            );
};
            export default Product