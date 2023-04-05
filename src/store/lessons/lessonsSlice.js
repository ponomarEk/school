import { createSlice } from '@reduxjs/toolkit';

import { getTitleSum } from '../../utils';

export const lessonsSlice = createSlice({
  name: 'biggestLesson',
  initialState: {},
  reducers: {
    setBiggestLesson: (state, { payload: lessons }) => {
      state = lessons.reduce((acc, lesson) =>
        getTitleSum(acc.Title) > getTitleSum(lesson.Title) ? acc : lesson
      );
      return state;
    },
  },
});

export const { actions, reducer } = lessonsSlice;
