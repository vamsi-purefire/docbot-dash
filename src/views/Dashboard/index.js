import React, { useEffect } from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { getData } from './store/dataSlice'
import { Loading } from 'components/shared'
import DashboardHeader from './components/Header'
import Appointments from './components/Appointments'
import { useDispatch, useSelector } from 'react-redux'


injectReducer('dashboard', reducer)


const Dashboard = () => {


    const { data, loading } = useSelector(state => state.dashboard.data)

    console.log(data)


    const dispatch = useDispatch()

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = () => {
                dispatch(getData())
    }


    return (
        <>
            <DashboardHeader/>
            <h4>Today's Appointments</h4>
            <Appointments />
        </>
    )
}

export default Dashboard

// Path: src\views\Dashboard\store\dataSlice.js
