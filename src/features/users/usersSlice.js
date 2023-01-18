import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ id: "0", name: "Shyla S" },
	{ id: "1", name: "Sethu N" },
	{ id: "2", name: "Aarna S" },
];

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
