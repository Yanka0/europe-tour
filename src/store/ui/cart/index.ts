import {createSelector, createSlice} from "@reduxjs/toolkit";
interface CartState {
  [dateId: string]: { amount: number, name: string, price: string, countryId: string };
}


const initialState: CartState = {};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, {payload: {id, name, price, countryId}}) {
      const amount = Math.min((state[id]?.amount || 0) + 1, 5);
      state[id] = {amount, name, price, countryId};
    },
    removeFromCart(state, {payload: id}) {
      state[id].amount = Math.max((state[id]?.amount || 0) - 1, 0);
      if (state[id]?.amount <= 0) {
        delete state[id]
      }
    },
    clearCart() {
      return initialState;
    }

  },
  selectors: {
    selectDateAmountById: (state, dateId) => state[dateId]?.amount || 0,
    selectDateAmount: (state) =>
      Object.values(state).reduce((acc, {amount}) => {
        return acc + amount;
      }, 0),
  }
})
export const selectCartProductIdsWithNames = createSelector(
  (state: { cart: CartState }) => state.cart,
  cart =>
    Object.entries(cart).map(([dateId, { name, price, countryId, amount }]) => ({
      dateId,
      name,
      price,
      countryId,
      amount,
    }))
);

export const {
  selectDateAmountById,
  selectDateAmount,
} = cartSlice.selectors
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions