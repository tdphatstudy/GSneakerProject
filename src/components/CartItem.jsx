import '../assets/css/component/cart-item.css';
const CartItem = ({item, minusCallback, plusCallback, removeCallback}) => {
    return (
        <div className="cart-item-wrapper">
            <div className="background-wrapper">
                <div className="background" style={{'backgroundColor': item.color}}>
                    <img className='item-image' src={item.image}/>
                </div>
            </div>
            <div className="body">
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                <div className="item-func-wrapper">
                    <div className="amount-func">
                        <div className="minus" onClick={() => {minusCallback(item.id)}}></div>
                        <div className="amount">{item.amount}</div>
                        <div className="plus" onClick={() => {plusCallback(item.id)}}></div>
                    </div>
                    <div className="remove-func" onClick={() => {removeCallback(item.id)}}></div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;