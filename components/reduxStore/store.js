import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./reducers";

export default configureStore({
    reducer:{
        booking:SavedReducer
    }
})