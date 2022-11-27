import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetAppointmentsList } from 'services/AppointmentsService'



export const getList = createAsyncThunk('Appointments/getList', async (data) => {
    const response = await apiGetAppointmentsList(data)
	return response
})


const dataSlice = createSlice({
    name: 'appointments/data',
    initialState: {
        appointments: {},
        loading: false,
    },
    reducers: {
    },
    extraReducers: {
        [getList.pending]: (state) => {
            state.loading = true
        },
        [getList.fulfilled]: (state, action) => {
            state.loading = false
            state.appointments = action.payload
        }
    }
})

export const { getClinics } = dataSlice.actions

export default dataSlice.reducer