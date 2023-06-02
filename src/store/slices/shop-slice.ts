import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { stores } from "./data";
import { Store } from "./data";
import { OrderedProduct } from "./data";

const initialState = {
    stores: stores as Store[],
    order: [] as OrderedProduct[],
};


const ShopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        shop_addProduct: (state, action: PayloadAction<OrderedProduct>) => {
            const prodIndex: number = state.order.findIndex((item: OrderedProduct)  => item.id === action.payload.id)
            if (prodIndex > -1) {
                state.order[prodIndex] = {...action.payload, amount: state.order[prodIndex].amount + 1}
            } else {    
                state.order.push({...action.payload, amount: 1})
            }
        },
        shop_minusProductAmount: (state, action) => {
            const prodIndex: number = state.order.findIndex((item: OrderedProduct)  => item.id === action.payload)
            if (state.order[prodIndex].amount === 1) {
                state.order = state.order.filter(item => item.id !== action.payload)
            } else {
                state.order[prodIndex].amount = state.order[prodIndex].amount-1
            }
        },
        shop_plusProductAmount: (state, action) => {
            const prodIndex: number = state.order.findIndex((item: OrderedProduct)  => item.id === action.payload)
            state.order[prodIndex].amount = state.order[prodIndex].amount+1
        },
    },
});

const { actions, reducer } = ShopSlice;

export default reducer;

export const { shop_addProduct, shop_minusProductAmount, shop_plusProductAmount
} = actions;