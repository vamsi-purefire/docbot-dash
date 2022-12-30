import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetPatientsData, apiPutPatient } from 'services/PatientsService'


export const getData = createAsyncThunk('Patients/getData', async (data) => {
    const response = await apiGetPatientsData(data)
	return response?.data
})

export const putPatient = createAsyncThunk('Patients/data/putPatient',async (data) => {
    const response = await apiPutPatient(data)
    return response?.data
})


const dataSlice = createSlice({
    name: 'patients/data',
    initialState: {
        data: {},
        loading: false,
        patientList: [],
        putPatientResponse : {}
    },
    reducers: {
        setPatientList: (state, action) => {
            state.patientList = action.payload
        },
        putPatient : (state, action) => {
            state.putPatientResponse = action.payload
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
        [putPatient.pending]: (state) => {
            state.loading = true
        },
        [putPatient.fulfilled]: (state, action) => {
            state.loading = false
            state.putPatientResponse = action.payload
        }

    }
})

export const { PatientsData, setPatientList } = dataSlice.actions

export default dataSlice.reducer