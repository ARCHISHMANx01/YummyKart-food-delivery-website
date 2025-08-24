import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isVisible: false  // For slide-in cart
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.isVisible = true; // ✅ Slide in cart when item added
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(i => i.id === itemId);

      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== itemId);
        }
      }

      // Hide cart if empty
      if (state.items.length === 0) {
        state.isVisible = false;
      }
    },

    hideCart: (state) => {
      state.isVisible = false;
    },

    clearCart: (state) => {
      state.items = [];
      state.isVisible = false;
    },
    showCart: (state) => {
  state.isVisible = true;
}

  }
});

export const { addToCart, decreaseQuantity, hideCart, clearCart, showCart } = CartSlice.actions;

export default CartSlice.reducer;
