import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialToldState = {"toldCards": 0};

const toldCardAmountSlice = createSlice({
    name: "toldCards",
    initialState: initialToldState,
    reducers:{
        increment(state){
            state.toldCards++;
        },
        decrement(state){
            state.toldCards--;
        }
    }
})

const store = configureStore(
    {reducer: toldCardAmountSlice.reducer}
);

export const toldCardAmountActions = toldCardAmountSlice.actions
export default store