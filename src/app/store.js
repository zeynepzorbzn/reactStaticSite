import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "/src/app/cartSlice";

const store = configureStore ({

    reducer: {
        cart : cartReducer
    }
});

export default store;