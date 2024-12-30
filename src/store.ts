import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import favoritesSlice from './features/favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoritesSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
