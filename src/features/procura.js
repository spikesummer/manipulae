import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = '';

export const procuraSlice = createSlice({
    name: "procura",
    initialState: { value: initialStateValue},
    reducers: {
        procura: (state, action) => {
            if(action.payload === ''){
               state.value = initialStateValue 
            }else{
                state.value = action.payload;
            }
        }
    }
});

export const { procura } = procuraSlice.actions;

export default procuraSlice.reducer;