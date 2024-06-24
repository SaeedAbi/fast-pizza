import userReducer from './features/users/userSlice.js'
import {configureStore} from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        user:userReducer,
    },
})

export default store