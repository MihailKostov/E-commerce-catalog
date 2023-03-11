import { createSlice } from '@reduxjs/toolkit';

export interface ProductForCart {
  id: string,
  name: string,
  price: number,
  image: string,
  quantity: number,
  phoneId: string,
  itemId: string,
  category: string,
}

export interface CartSliceState {
  items: ProductForCart[],
}

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  } as CartSliceState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addQuantity(state, action) {
      const findItem = state.items.find(item => item.id === action.payload.id);

      if (findItem) {
        findItem.quantity += 1;
      }
    },
    subQuantity(state, action) {
      const findItem = state.items.find(item => item.id === action.payload.id);

      if (findItem) {
        findItem.quantity -= 1;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  subQuantity,
  addQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
