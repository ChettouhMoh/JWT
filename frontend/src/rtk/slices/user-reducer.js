import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
  accessToken: null,
};

// Register thunk
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/register", { ...userData });
      return response.data; // Assuming the response includes the user data and access token
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Login thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/login", credentials);
      return response.data; // Assuming the response includes the user data and access token
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Registration failed";
    });

    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Login failed";
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

// export const userReducer = createSlice({
//   initialState,
//   name: "userReducer",
//   reducers: {
//     updateUser: (state, action) => {
//       return state - action.payload;
//     },
//     deposite: (state, action) => {
//       return state + action.payload;
//     },
//   },
// });

// export const { updateUser, deposite } = userReducer.actions;

// export default userReducer.reducer;
