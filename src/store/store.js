import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { $api } from './api/api';
import { reducer as lessonsReducer } from './lessons/lessonsSlice';
import { reducer as studentsReducer } from './students/studentsSlice';

const reducers = combineReducers({
  [$api.reducerPath]: $api.reducer,
  studentsCount: studentsReducer,
  biggestLesson: lessonsReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat($api.middleware),
});
