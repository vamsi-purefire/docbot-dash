import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetDoctorsData, apiPutDoctor } from 'services/DoctorsService'


export const getData = createAsyncThunk('Doctors/getData', async (data) => {
    const response = await apiGetDoctorsData(data)
	return response?.data
})

export const putDoctor = createAsyncThunk('Doctors/data/putDoctor',async (data) => {
    const response = await apiPutDoctor(data)
    return response?.data
})


const dataSlice = createSlice({
    name: 'doctors/data',
    initialState: {
        data: {},
        loading: false,
        doctorList: [],
        putDoctorResponse : {}
    },
    reducers: {
        setDoctorList: (state, action) => {
            state.doctorList = action.payload
        },
        putDoctor : (state, action) => {
            state.putDoctorResponse = action.payload
        }
    },
    extraReducers: {
        [getData.pending]: (state) => {
            state.loading = true
        },
        [getData.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        [putDoctor.pending]: (state) => {
            state.loading = true
        },
        [putDoctor.fulfilled]: (state, action) => {
            state.loading = false
            state.putDoctorResponse = action.payload
        }

    }
})

export const { DocotorsData, setDoctorList } = dataSlice.actions

export default dataSlice.reducer