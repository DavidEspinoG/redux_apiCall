import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      {
        firstName: 'David',
        lastName: 'Espino',
      },
      {
        firstName: 'Constanza',
        lastName: 'Rico',
      }
    ],
    isLoading: true,
    error: false
  },
  reducers: {
    add(state, action){
      state.users.push(action.payload);
    },
  },
})

export const fetchUsers = createAsyncThunk(
  'users/fetchData', 
  async() => {
    const res = await fetch('https://randomuser.me/api/?results=5');
    const data = res.json();
    return data
  }
)

export const userReducer = userSlice.reducer;