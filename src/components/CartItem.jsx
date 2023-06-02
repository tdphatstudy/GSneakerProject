import '../assets/css/component/cart-item.css';
const CartItem = () => {
    return (
        <div className="cart-item-wrapper">
            <div className="background-wrapper">
                <div className="background">
                    <img className='item-image' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/zoom-fly-3-premium-mens-running-shoe-XhzpPH-removebg-preview.png"/>
                </div>
            </div>
            <div className="body">
                <div className="item-name">Nike Vaporfly 4% Flyknit</div>
                <div className="item-price">$160</div>
                <div className="item-func-wrapper">
                    <div className="amount-func">
                        <div className="minus"></div>
                        <div className="amount">1</div>
                        <div className="plus"></div>
                    </div>
                    <div className="remove-func"></div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;