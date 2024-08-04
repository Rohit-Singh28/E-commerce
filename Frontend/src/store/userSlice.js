import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetail: (state, action) => {
            state.user = action.payload;
            console.log(state.user);
        }
    }
})

export const { setUserDetail } = userSlice.actions;
export default userSlice.reducer