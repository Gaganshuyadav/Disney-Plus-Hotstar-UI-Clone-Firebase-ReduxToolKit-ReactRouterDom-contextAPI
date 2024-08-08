import { createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name : "",
        email: "",
        photo: "",
        userID: "",
    },
    reducers: {
        setUserLoginDetails: ( state, action) =>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
            state.userID = action.payload.userID
        },
        setSignOutState: ( state, action) =>{
            state.name = null ;
            state.email = null  ;
            state.photo = null ;
            state.userID = null;
        }
    }
})

export const { setUserLoginDetails, setSignOutState} = userSlice.actions;
export default userSlice.reducer;

