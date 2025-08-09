import { configureStore } from '@reduxjs/toolkit'
import todos from './slices/todos'
import users from './slices/users'

export const store = configureStore({
  reducer: {
    todos,
    users,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
