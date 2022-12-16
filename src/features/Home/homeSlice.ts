import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface info {
  pages: number;
}

export interface results {
  id: number;
  name: string;
  image: string;
  status: string;
}

export interface characters {
  info: info;
  results: results[];
}

export interface charactersInterface {
  characters: characters;
}

export interface location {
  location: {
    name: string;
  };
}

export interface character {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  location: location;
}
export interface lastVisited {
  character: character[];
}

interface CharactersState {
  characters: results[];
  lastVisited: lastVisited[];
  info: number;
}
const initialState: CharactersState = {
  characters: [],
  lastVisited: [],
  info: 1,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharactersList(state, action: PayloadAction<results[]>) {
      state.characters = action.payload;
    },
    SetRecentlyVisited(state, action: PayloadAction<lastVisited>) {
      state.lastVisited.unshift(action.payload);
    },
    SetPagination(state, action: PayloadAction<info>) {
      state.info = action.payload?.pages;
    },
  },
});

export const { setCharactersList, SetRecentlyVisited, SetPagination } =
  charactersSlice.actions;
export default charactersSlice.reducer;
