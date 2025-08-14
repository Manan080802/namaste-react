import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCard: (state, action) => {
      const existingCard = state.items.find(
        (card) => card.id === action.payload.id
      );

      if (existingCard) {
        // Increment qty
        existingCard.qty = (existingCard.qty || 0) + 1;
      } else {
        // Add new card with qty = 1
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeCard: (state, action) => {
      const existingCard = state.items.find(
        (card) => card.id === action.payload.id
      );
      if (existingCard && existingCard.qty > 0) {
        // Increment qty
        existingCard.qty = (existingCard.qty || 0) - 1;
      } else if (existingCard && existingCard.qty <= 0) {
        existingCard.qty = 0;
      }
    },
  },
});

export const { addCard, removeCard } = cartSlice.actions;
export default cartSlice.reducer;
