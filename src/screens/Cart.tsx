import './Cart.sass'

const CartScreen = () => {
    return (
        <div className="cart">
            <h2 className="cart__title">Your order:</h2>
            <ul className="cart__list">
                <li>5 CheeseBurger, 5*20, 100 грн.</li>
            </ul>
            <h3 className="cart__total">Total: </h3>
        </div>
    );
};

export default CartScreen;
