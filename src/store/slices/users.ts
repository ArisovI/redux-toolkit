import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { TUsers } from '../../types/users-types'

const initialState: TUsers = {
  users: [],
  isLoading: false,
  error: null,
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      return await res.json()
    } catch {
      return rejectWithValue('Ошибка')
    }
  },
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default usersSlice.reducer
