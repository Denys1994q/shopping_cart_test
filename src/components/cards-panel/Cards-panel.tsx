import "./Cards-panel.sass";
import { useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
const mc = require("../../imgs/mc.avif");
const kfc = require("../../imgs/kfc.avif");
const pizzaDay = require("../../imgs/pizzaday.avif");
const sushi = require("../../imgs/sushi.jpg");
const double_cheese = require("../../imgs/mc/double_cheese.webp");
const royal = require("../../imgs/mc/royal.png");
const bigmac = require("../../imgs/mc/bigmac.png");
const bigtasty = require("../../imgs/mc/big_tasty.webp");
const bucket = require("../../imgs/kfc/bucket.png");
const strips = require("../../imgs/kfc/strips.webp");
const four_cheese = require("../../imgs/pizza/four_cheeses.webp");
const sushi_set = require("../../imgs/sushi/sushi_set.jpg");

const CardsPanel = () => {
    const stores = [
        {
            name: "McDonalds",
            logo: mc,
            products: [
                { name: "Double cheeseburger", price: 97, img: double_cheese },
                { name: "Big Mac", price: 115, img: bigmac },
                { name: "Royal cheeseburger", price: 130, img: royal },
                { name: "Big Tasty menu", price: 251, img: bigtasty },
            ],
        },
        {
            name: "KFC",
            logo: kfc,
            products: [{ name: "Hot bucket 26", price: 446, img: bucket }, { name: "Stripses 8", price: 187, img: strips }],
        },
        {
            name: "Pizza Day",
            logo: pizzaDay,
            products: [
                { name: "4 cheese", price: 205, img: four_cheese }
            ],
        },
        {
            name: "Sushi Master",
            logo: sushi,
            products: [{ name: "Sushi set", price: 420, img: sushi_set }],
        },
    ];
    const [activeStoreIndex, setActiveStoreIndex] = useState(0);

    const showStores = stores.map((store, i) => (
        <li
            onClick={() => setActiveStoreIndex(i)}
            className={i === activeStoreIndex ? "stores__item stores__item-active" : "stores__item"}>
            <h2 className='stores__title'>{store.name}</h2>
            <img src={store.logo} alt={store.name} />
        </li>
    ));

    const showProducts = stores[activeStoreIndex].products.map((prod: any) => {
        return (
            <li className='products__item'>
                <h3 className='products__title'>{prod.name}</h3>
                <img className='products__image' src={prod.img} alt={prod.name} />
                <div className='products__pricePanel'>
                    <span>{prod.price} грн.</span>
                    <AddShoppingCartOutlinedIcon sx={{ fontSize: "24px", color: "green", cursor: "pointer" }} />
                </div>
            </li>
        );
    });

    return (
        <div className='cardsPanel'>
            <h1 className='cardsPanel__title'>Stores you might like:</h1>
            <div className='cardsPanel__main'>
                <div className='cardsPanel__stores stores'>
                    <ul className='stores__list'>{showStores}</ul>
                </div>
                <div className='cardsPanel__products products'>
                    {stores && <ul className='products__list'>{showProducts}</ul>}
                </div>
            </div>
        </div>
    );
};

export default CardsPanel;
