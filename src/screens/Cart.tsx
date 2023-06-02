import "./Cart.sass";
import { useSelector, useDispatch } from "react-redux";
import { OrderedProduct } from "../store/slices/data";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shop_minusProductAmount, shop_plusProductAmount} from "../store/slices/shop-slice";

const CartScreen = (): JSX.Element => {
    const dispatch = useDispatch()
    const order = useSelector((state: any) => state.ShopSlice.order);
    let total: number = 0;

    const showOrder = order.map((product: OrderedProduct) => {
        total += product.amount * +product.price
        return (
            <li className="cart__item prod">
                <h4 className='prod__title'>{product.name}</h4>
                <p className='prod__amount'>{product.amount}</p>
                <span className='prod__sign'> X </span>
                <p className='prod__price'> {product.price}</p>
                <p className='prod__total'>{product.amount * +product.price} грн.</p>
                <button onClick={() => dispatch(shop_minusProductAmount(product.id))} className="prod__minusBtn">
                    <RemoveIcon color='error' fontSize='large' />
                </button>
                <button onClick={() => dispatch(shop_plusProductAmount(product.id))}>
                    <AddIcon color='success' fontSize='large' />
                </button>

            </li>
        );
    });

    return (
        <div className='cart'>
            <h2 className='cart__title'>Your order:</h2>
            <ul className='cart__list'>
                <li>{showOrder}</li>
            </ul>
            {order.length > 0 ? <h4 className='cart__total'>Total: {total} грн.</h4> : <h4>Shopping cart is empty</h4> }
        </div>
    );
};

export default CartScreen;
