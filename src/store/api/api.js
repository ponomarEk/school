import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL, CLASS_KEY } from '../../constants';

export const $api = createApi({
  reducerPath: 'api',
  tagTypes: ['Students', 'Lessons', 'Absence'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + CLASS_KEY,
  }),
  endpoints: () => ({}),
});
