import "./Cards-panel.sass";
import { useState, useEffect } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { shop_addProduct } from "../../store/slices/shop-slice";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { OrderedProduct } from "../../store/slices/data";

const CardsPanel = () => {
    const dispatch = useDispatch();
    const stores = useSelector((state: any) => state.ShopSlice.stores);
    const [activeStoreIndex, setActiveStoreIndex] = useState(0);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [activeStoreIndex]);

    const showStores = stores.map((store: any, i: number) => (
        <li
            key={store.id}
            onClick={() => setActiveStoreIndex(i)}
            className={i === activeStoreIndex ? "stores__item stores__item-active" : "stores__item"}>
            <h2 className='stores__title'>{store.name}</h2>
            <img src={store.logo} alt={store.name} />
        </li>
    ));

    const addItem = (prod: OrderedProduct) => {
        dispatch(shop_addProduct(prod));
        setShowAlert(true);
    };

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShowAlert(false);
        }, 2000);

        return () => {
            clearTimeout(timeId);
        };
    }, [showAlert]);

    const showProducts = stores[activeStoreIndex].products.map((prod: any) => {
        return (
            <li key={prod.id} className='products__item'>
                <h3 className='products__title'>{prod.name}</h3>
                <img className='products__image' src={prod.img} alt={prod.name} />
                <div className='products__pricePanel'>
                    <span>{prod.price} грн.</span>
                    <AddShoppingCartOutlinedIcon
                        onClick={() => addItem(prod)}
                        sx={{ fontSize: "24px", color: "green", cursor: "pointer" }}
                    />
                </div>
            </li>
        );
    });

    return (
        <>
            <div className='cardsPanel'>
                <h1 className='cardsPanel__title'>Stores you might like:</h1>
                <div className='cardsPanel__main'>
                    <div className='cardsPanel__stores stores'>
                        <ul className='stores__list'>{showStores}</ul>
                    </div>
                    <div className='cardsPanel__products products'>
                        {stores && <ul className='products__list'>{showProducts}</ul>}
                        <Alert
                            variant='filled'
                            severity='success'
                            sx={{ display: showAlert ? "flex" : "none", fontSize: "12px" }}>
                            <AlertTitle sx={{ fontSize: "12px" }}>Success</AlertTitle>
                            Item was <strong>added to the cart</strong>
                        </Alert>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardsPanel;
