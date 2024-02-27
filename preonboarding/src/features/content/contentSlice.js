import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    value: [],
  },
  reducers: {
    addContent: (state, action) => {
      state.value.push(action.payload);
    },
    removeContent: (state, action) => {
      state.value = state.value.filter(
        (item, index) => index !== action.payload
      );
    },
  },
});

// 액션 생성자 내보내기
export const { addContent, removeContent } = contentSlice.actions;

// 리듀서 내보내기
export default contentSlice.reducer;
