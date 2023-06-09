import '../assets/css/component/product-item.css'
import { useRef } from 'react';

const ProductItem = ({item, addItemCallback}) => {
    return (
        <div className="product-item-wrapper">
            <div className="background" style={{'backgroundColor': item.color}}>
                <img className="product-image" src={item.image} />
            </div>
            <div className="product-name">{item.name}</div>
            <div className="product-description">{item.description}</div>
        
        <div className="func-wrapper">
            <div className="product-price">{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
            {item.on_cart === true &&  <div className="product-added"></div>}
            {item.on_cart === false &&  <div className="product-add" onClick={()=>{addItemCallback(item.id)}}>ADD TO CART</div>}
           
        </div>
        </div>
    );
}
export default ProductItem;