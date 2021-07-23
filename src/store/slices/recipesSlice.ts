import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from '../../apis/recipesApis';
import { IRecipes } from '../../features/recipes/types/Recipes';

export interface RecipesState {
  list: IRecipes[];
  current: IRecipes | null;
}

const initialState: RecipesState = {
  list: [],
  current: null,
};

export const getRecipesList = createAsyncThunk('recipes/getList', async () => {
  const { data }: any = await getAll();
  return data;
});

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setList: (state, { payload }) => {
      state.list = payload;
    },
    setCurrent: (state, { payload }) => {
      state.current = payload;
    },
  },
  extraReducers: {
    [getRecipesList.fulfilled as any]: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const { setList, setCurrent } = recipesSlice.actions;

export default recipesSlice.reducer;
