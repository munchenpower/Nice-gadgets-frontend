import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import type { FavoritesItem } from '../../types/FavoritesItem';

interface FavoritesState {
  favoritesList: FavoritesItem[];
}

if (!localStorage.getItem('favorites')) {
  localStorage.setItem('favorites', '[]');
}

const favoritesFromLocalStorage = localStorage.getItem('favorites') || '[]';

const initialState: FavoritesState = {
  favoritesList: JSON.parse(favoritesFromLocalStorage)
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = { id: itemId, amount: 1 };
      const favorites = [...state.favoritesList];
      const hasItem = favorites.find((item) => item.id === itemId);

      if (!hasItem) {
        favorites.push(item);
        state.favoritesList = favorites;
        localStorage.setItem('favorites', JSON.stringify(state.favoritesList));
      }
    },
    deleteFav: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const favorites = [...state.favoritesList];
      state.favoritesList = favorites.filter((item) => item.id !== itemId);
      localStorage.setItem('favorites', JSON.stringify(state.favoritesList));
    },
    changeFavAmount: (state, action: PayloadAction<[string, '+' | '-']>) => {
      const [itemId, sign] = action.payload;
      const favorites = [...state.favoritesList];
      state.favoritesList = favorites.map((item) => {
        if (item.id === itemId) {
          item.amount = sign === '+' ? item.amount + 1 : item.amount - 1;
        }

        return item;
      });
      localStorage.setItem('favorites', JSON.stringify(state.favoritesList));
    },
    clearFavorites: (state) => {
      state.favoritesList = [];
      localStorage.setItem('favorites', JSON.stringify(state.favoritesList));
    }
  }
});

export const { addFav, deleteFav, changeFavAmount, clearFavorites } =
  favoritesSlice.actions;

export const selectFavorites = (state: RootState) =>
  state.favorites.favoritesList;

export default favoritesSlice.reducer;
