import { createSlice } from '@reduxjs/toolkit';

export const studentsSlice = createSlice({
  name: 'studentsCount',
  initialState: 0,
  reducers: {
    setStudentsCount: (state, { payload: studentsCount }) => {
      state = studentsCount;
      return state;
    },
  },
});

export const { actions, reducer } = studentsSlice;
