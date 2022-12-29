import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'doctors/state',
    initialState: {
        drawerOpen: false,
        selectedDoctor: {},
    },
    reducers: {
        setSelectedDoctor: (state, action) => {
            state.selectedDoctor = action.payload
        },
        setDrawerOpen: (state) => {
            state.drawerOpen = true
        },
        setDrawerClose: (state) => {
            state.drawerOpen = false
        },
    },
})

export const { 
    setSelectedDoctor, 
    setDrawerOpen, 
    setDrawerClose,
} = stateSlice.actions

export default stateSlice.reducer
