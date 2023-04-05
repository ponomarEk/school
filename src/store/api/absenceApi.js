import { $api } from './api';

export const absenceApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getAbsence: builder.query({
      query: () => '/Rate',
      providesTags: () => [{ type: 'Absence' }],
    }),
    addAbsence: builder.mutation({
      query: (absence) => ({
        body: absence,
        url: '/Rate',
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: 'Absence' }],
    }),
    removeAbsence: builder.mutation({
      query: (absence) => ({
        body: absence,
        url: '/UnRate',
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: 'Absence' }],
    }),
  }),
});

export const {
  useGetAbsenceQuery,
  useAddAbsenceMutation,
  useRemoveAbsenceMutation,
} = absenceApi;
