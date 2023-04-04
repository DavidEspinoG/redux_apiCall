import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    reqStatus: 'idle',
    isLoading: true,
    error: false
  },
  reducers: {
    add(state, action){
      state.users.push(action.payload);
    },
  },
  extraReducers(builder){
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.reqStatus = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.reqStatus = "succeded";
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.reqStatus = "rejected"
        state.error = action.error.message
      })
    
  }
})

export const fetchUsers = createAsyncThunk(
  'users/fetchData', 
  async() => {
    const res = await fetch('https://randomuser.me/api/?results=5');
    const data = await res.json();
    return data.results
  }
)

export const userReducer = userSlice.reducer;