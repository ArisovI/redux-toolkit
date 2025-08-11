import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Posts } from '../../types/posts-types'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Posts[], void>({ query: () => '/posts' }),
  }),
})

export const { useGetPostsQuery } = postsApi
