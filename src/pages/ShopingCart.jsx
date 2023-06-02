import { useEffect, useState } from 'react';
import '../assets/css/page/shoppingcart.css';
import dummyData from '../assets/shoes.json'
import ProductItem from '../components/ProducItem';

const ShoppingCart = () => {
    const [products, setProducts] = useState(dummyData.shoes);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const cart_data = JSON.parse(localStorage.getItem('cart'));
        if (cart_data == null) {
            localStorage.setItem('cart', JSON.stringify([]));
        } 
        else if (cart_data.length > 0) {
            setCart(cart_data);
        }
        setProducts(products.map((shoe)=> {
            const check_exist_cart = cart.find((cart_item) => {return cart_item.id === shoe.id})
            if (check_exist_cart === undefined) {
                shoe.on_cart = false;
            } else {
                shoe.on_cart = true
            }
            return shoe;
        }))

    },[])

    useEffect(()=> {
        

    }, [products, cart])

    return (
        <div className="shopping-cart-wrapper">
             {console.log(products)}
            <div className="shopping-card">
                <div className="logo"><div></div></div>
                <div className="title">Our Products</div>
                <div className="body">
                {products.map((shoe)=> {
                    return <ProductItem item={shoe} key={shoe.id}/>
                })}
                
                </div>
            </div>
            <div className="shopping-card">
                <div className="logo"><div></div></div>
                <div className="title" id='title-cart'>
                    <span>Your Cart</span>
                    <span>$0.00</span>
                </div>
                <div className="body">
                    
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;