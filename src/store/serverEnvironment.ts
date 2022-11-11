import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { serverConfig } from "../constants/serverConfig";

export type AvailableServerEnvironments = keyof typeof serverConfig;

const initialState: {
  serverEnv: AvailableServerEnvironments;
} = {
  serverEnv: "DEV",
};

export const serverEnvSlice = createSlice({
  name: "serverEnv",
  initialState,
  reducers: {
    setServerEnv: (state, action: PayloadAction<AvailableServerEnvironments>) => {
      state.serverEnv = action.payload;
    },
  },
});

export const { setServerEnv } = serverEnvSlice.actions;
export const serverEnvReducer = serverEnvSlice.reducer;
