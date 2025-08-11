import { configureStore } from '@reduxjs/toolkit'
import todos from './slices/todos'
import users from './slices/users'
import { postsApi } from './services/posts-api'

export const store = configureStore({
  reducer: {
    todos,
    users,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
