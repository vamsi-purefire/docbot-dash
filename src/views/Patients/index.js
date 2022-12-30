import React, { useEffect } from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { getData } from './store/dataSlice'
import { Spinner,Notification, toast } from 'components/ui'
import { DoubleSidedImage } from 'components/shared'
import DocotorsHeader from './components/Header.js'
import CustomerEditDialog from './components/DoctorsAddNewDialog.js'
import DoctorsList from './components/DoctorsList.js'
import { useDispatch, useSelector } from 'react-redux'


injectReducer('patients', reducer)


const Patients = () => {


    const dispatch = useDispatch()

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = () => {
        dispatch(getData())
    }

    const { data, loading } = useSelector(state => state.patients.data)

    console.log(data)



    return (
        <>
            <DocotorsHeader />

            {loading && (
                <div className="flex justify-center">
                    <Spinner size={40} />
                </div>
            )
            }

            {(data && data?.has_patients === "no" && !loading) && (

                <div className="h-full flex flex-col items-center justify-center">
                    <DoubleSidedImage
                        src="/img/others/img-2.png"
                        darkModeSrc="/img/others/img-2-dark.png"
                        alt="Access Denied!"
                    />
                    <div className="mt-6 text-center">
                        <h3 className="mb-2">Oops!</h3>
                        <p className="text-base">You have no doctors to view</p>
                    </div>
                </div>

            )
            }

            {(data?.patients?.length > 0 && data.has_patients === "yes" && !loading) && (

            <>

                <DoctorsList patients={data.patients} />

            </>    
                

            )
            }

            

            <CustomerEditDialog />

        </>


    )
}

export default Patients

// Path: src\views\Doctors\store\dataSlice.js
