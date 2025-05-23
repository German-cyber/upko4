import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  selectedBesidesIndex: number;
  title: string;
  price: string;
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedBesidesIndex === action.payload.selectedBesidesIndex
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (
      state,
      action: PayloadAction<{ id: number; selectedBesidesIndex: number }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.selectedBesidesIndex === action.payload.selectedBesidesIndex
          )
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; selectedBesidesIndex: number; quantity: number }>
    ) => {
      const item = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedBesidesIndex === action.payload.selectedBesidesIndex
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { addItem, removeItem, updateQuantity, toggleCart, closeCart } =
  cartSlice.actions;

export default cartSlice.reducer;