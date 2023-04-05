import { $api } from './api';

export const lessonsApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getLessons: builder.query({
      query: () => '/Column',
    }),
  }),
});

export const { useGetLessonsQuery } = lessonsApi;
