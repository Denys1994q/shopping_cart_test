import { v4 as uuidv4 } from 'uuid';

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

export interface Product {
    name: string,
    price: number,
    img: string,
    id: string,
}

export interface OrderedProduct extends Product {
    amount: number
}

export interface Store {
    id: string,
    name: string,
    logo: string,
    products: Product[]
}


export const stores: Store[] = [
    {
        id: uuidv4(),
        name: "McDonalds",
        logo: mc,
        products: [
            { id: uuidv4(), name: "Double cheeseburger", price: 97, img: double_cheese },
            { id: uuidv4(), name: "Big Mac", price: 115, img: bigmac },
            { id: uuidv4(), name: "Royal cheeseburger", price: 130, img: royal },
            { id: uuidv4(), name: "Big Tasty menu", price: 251, img: bigtasty },
        ],
    },
    {
        id: uuidv4(),
        name: "KFC",
        logo: kfc,
        products: [{ id: uuidv4(), name: "Hot bucket 26", price: 446, img: bucket }, { id: uuidv4(), name: "Stripses 8", price: 187, img: strips }],
    },
    {
        id: uuidv4(),
        name: "Pizza Day",
        logo: pizzaDay,
        products: [
            { id: uuidv4(), name: "4 cheese", price: 205, img: four_cheese }
        ],
    },
    {
        id: uuidv4(),
        name: "Sushi Master",
        logo: sushi,
        products: [{ id: uuidv4(), name: "Sushi set", price: 420, img: sushi_set }],
    },
];