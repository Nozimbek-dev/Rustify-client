import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TryYourselfState {
  count: number,
  numbers: string[]
}

const initialState: { tryYourself: TryYourselfState } = {
  tryYourself: {
    count: 0,
    numbers: []
  }
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addTryYourself: (state, action: PayloadAction<string>) => {
      state.tryYourself.numbers.push(action.payload)
      state.tryYourself.count = state.tryYourself.count + 1
    }
  }
})

export const { addTryYourself } = dataSlice.actions
export default dataSlice.reducer