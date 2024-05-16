const Product=(props) =>{
    const Product=props.product;
    return(
        <div>
            <h3>{Product.ten}</h3>
            <h3>{Product.gia}</h3>
        </div>
    );
};
export default Product