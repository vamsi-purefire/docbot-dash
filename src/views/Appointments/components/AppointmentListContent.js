import React, { useEffect } from 'react'
import classNames from 'classnames'
import Table from './Table'
import { Spinner } from 'components/ui'
import { getList } from '../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { DoubleSidedImage } from 'components/shared'

const AppointmentListContent = () => {

    const { appointments, loading } = useSelector(state => state.Appointments.data)


    const dispatch = useDispatch()

    useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	const fetchData = () => {
		dispatch(getList())
	}



    return (

        <div className={classNames('mt-6 h-full flex flex-col', loading && 'justify-center')}>

            { loading && (
					<div className="flex justify-center">
						<Spinner size={40} />
					</div>
				) 
			}


			{ ( appointments && appointments.data?.has_appointments === "no" && !loading)  && (

                <div className="h-full flex flex-col items-center justify-center">
				<DoubleSidedImage 
					src="/img/others/img-2.png"
					darkModeSrc="/img/others/img-2-dark.png"
					alt="Access Denied!"
				/>
				<div className="mt-6 text-center">
					<h3 className="mb-2">Oops!</h3>
					<p className="text-base">You have no appointments to view</p>
				</div>
			</div>
                
				) 
			}   

  
            { ( appointments?.data?.appointments?.length > 0 && appointments.data?.has_appointments === "yes" && !loading)  && (


							<Table key={appointments.id} data={appointments} />
                
				) 
			}   

			



        </div>

    )

}

export default AppointmentListContent
