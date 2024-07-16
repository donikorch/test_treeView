import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type NodesState = {
  openNodes: string[];
};

const initialState: NodesState = {
  openNodes: [],
};

const nodeSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {
    toggleNode: (state, action: PayloadAction<string>) => {
      const nodeName = action.payload;
      const index = state.openNodes.indexOf(nodeName);

      if (index === -1) {
        state.openNodes.push(nodeName);
      } else {
        state.openNodes.splice(index, 1);
      }
    },
  },
});

export const { toggleNode } = nodeSlice.actions;
export default nodeSlice.reducer;
