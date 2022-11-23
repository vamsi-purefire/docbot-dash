import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetClinicsList } from 'services/ClinicService'



export const getList = createAsyncThunk('clinicList/getList', async (data) => {
    const response = await apiGetClinicsList(data)
    console.log(response)
	return response.data
})


const dataSlice = createSlice({
    name: 'clinic/data',
    initialState: {
        clinics: {},
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
            state.clinics = action.payload
        }
    }
})

export const { getClinics } = dataSlice.actions

export default dataSlice.reducer