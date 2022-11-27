import React, { useEffect } from 'react'
import classNames from 'classnames'
import Box from './Box'
import { Spinner } from 'components/ui'
import { getList } from '../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'

const AppointmentListContent = () => {

    const { appointments, loading } = useSelector(state => state.Appointments.data)

    const view = "list";

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

            { ( appointments.data && !loading)  && (

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">	

					{
						appointments.data.map(appointment => (
							<Box key={appointment.id} data={appointment} />
						))
					}

				</div>
                
				) 
			}   



        </div>

    )

}

export default AppointmentListContent
