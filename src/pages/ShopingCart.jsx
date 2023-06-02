import { useEffect, useState } from 'react';
import '../assets/css/page/shoppingcart.css';
import dummyData from '../assets/shoes.json'
import ProductItem from '../components/ProducItem';
import CartItem from '../components/CartItem';

const ShoppingCart = () => {
    const [products, setProducts] = useState(dummyData.shoes);
    const [cart, setCart] = useState([]);

    /*----- Các hàm tương tác danh sách product và cart -----*/
    const addProductToCart = (id) => {
        setProducts(products.map((product) => {
            if (product.id === id)
                product.on_cart = true;
            return product;
        }));
        let item = products.find((product) => {
            if (product.id === id )
                return product;
        });
        let coppyCart = [...cart];
        coppyCart.push({...item, amount: 1});
        setCart(coppyCart);
        localStorage.setItem('cart', JSON.stringify(coppyCart));
    }

    const plusAmountItem = (id) => {
        let coppyCart = [...cart];
        coppyCart = coppyCart.map((item) => {
            if (item.id === id)
                item.amount += 1;
            return item
        });
        setCart(coppyCart);
        localStorage.setItem('cart', JSON.stringify(coppyCart));
    }
    const removeItem = (id) => {
        let coppyCart = [...cart];
        coppyCart = coppyCart.filter((item) => {
            return item.id !== id;
        });
        setCart(coppyCart);
        localStorage.setItem('cart', JSON.stringify(coppyCart));
        setProducts(products.map((shoe)=> {
            if (shoe.id === id) 
                shoe.on_cart = false;
            return shoe;
        }))
    }
    const minusItem = (id) => {
        let coppyCart = [...cart];
        coppyCart = coppyCart.map((item) => {
          if (item.id === id) {
            item.amount -= 1;
            console.log(item.amount === 0);
            if (item.amount === 0) {
                removeItem(id);
                return null;
            } 
          }
          return item;
        });
        coppyCart = coppyCart.filter((item) => item !== null);
        setCart(coppyCart);
        localStorage.setItem('cart', JSON.stringify(coppyCart));
      };

    /*------- Khởi tạo ------*/
    useEffect(()=>{
        const cart_data = JSON.parse(localStorage.getItem('cart'));
        if (cart_data == null) 
            localStorage.setItem('cart', JSON.stringify([]));
        else if (cart_data.length > 0) 
            setCart(cart_data);
        setProducts(products.map((shoe)=> {
            const check_exist_cart = cart_data?.find((cart_item) => {return cart_item.id === shoe.id})
            if (check_exist_cart) {
                shoe.on_cart = true;
            } else {
                shoe.on_cart = false;
            }
            return shoe;
        }))

    },[])
    /*---- ----------*/
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
                    return <ProductItem item={shoe} key={shoe.id} addItemCallback={addProductToCart}/>
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
                    {cart.length === 0 && <>Your cart is empty.</>}
                    {cart.length !== 0 && cart.map((value) => { return <CartItem key={value.id} item={value} minusCallback={minusItem} plusCallback={plusAmountItem} removeCallback={removeItem}/>}) }
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;