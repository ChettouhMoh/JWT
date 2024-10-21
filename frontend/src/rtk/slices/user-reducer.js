import axios from "../../api/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Register thunk
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/register", { ...userData });
      return response.data;
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
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// logout user
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    const response = await axios.post("/logout", {}, { withCredentials: true });
    return response.data;
  } catch (error) {
    return `error: ${error}`;
  }
});

const initialState = {
  user: false,
  loading: false,
  error: null,
  accessToken: null,
  msg: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.msg = false;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.msg = `Welcome! ${action.payload.user.username.split(" ")[0]}`;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.msg = false;
      state.error = action.payload || { error: "Registration failed" };
    });

    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.msg = false;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.msg = `Welcome! ${action.payload.user.username.split(" ")[0]}`;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.msg = false;
      state.error = action.payload || { error: "Login Failed" };
    });

    // Logout
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
      state.msg = false;
      state.error = null;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.msg = "logout Succeed";
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.msg = false;
      state.error = action.payload || { error: "Logout failed" };
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
