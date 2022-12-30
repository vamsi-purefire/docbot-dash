import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetDashboardData } from 'services/DashboardService'


export const getData = createAsyncThunk('Dashboard/getData', async (data) => {
    const response = await apiGetDashboardData(data)
	return response.data
})


const dataSlice = createSlice({
    name: 'dashboard/data',
    initialState: {
        data: {},
        loading: false,
    },
    reducers: {
    },
    extraReducers: {
        [getData.pending]: (state) => {
            state.loading = true
        },
        [getData.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        }
    }
})

export const { DashboardData } = dataSlice.actions

export default dataSlice.reducer