import { $api } from './api';

export const studentsApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => '/Schoolboy',
    }),
  }),
});

export const { useGetStudentsQuery } = studentsApi;
