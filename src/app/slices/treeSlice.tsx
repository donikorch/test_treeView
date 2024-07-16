import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Tree } from '../types/tree';

type TreeState = {
  tree: Tree[];
  error: string | undefined;
};

const initialState: TreeState = {
  tree: [],
  error: undefined,
};

const cartsSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    setTree: (state, action: PayloadAction<Tree[]>) => {
      state.tree = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setTree, setError } = cartsSlice.actions;
export default cartsSlice.reducer;
