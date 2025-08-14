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
  },
});

export const { addCard } = cartSlice.actions;
export default cartSlice.reducer;
