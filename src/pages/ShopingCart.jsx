import '../assets/css/page/shoppingcart.css';
import dummyData from '../assets/shoes.json'
import ProductItem from '../components/ProducItem';

const ShoppingCart = () => {
    return (
        <div className="shopping-cart-wrapper">
             {console.log(dummyData.shoes)}
            <div className="shopping-card">
                <div className="logo"><div></div></div>
                <div className="title">Our Products</div>
                <div className="body">
                {dummyData.shoes.map((shoe)=> {
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