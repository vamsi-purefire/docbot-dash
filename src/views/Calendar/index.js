import React, { useEffect, useState } from 'react'
import { CalendarView } from 'components/shared'
import { useSelector, useDispatch } from 'react-redux'
import { getList } from '../Appointments/store/dataSlice'
import { Spinner, Button, Drawer } from 'components/ui'
import classNames from 'classnames'
import { DoubleSidedImage } from 'components/shared'


const Calendar = () => {

	function getDate(dayString) {
		const today = new Date()
		const year = today.getFullYear().toString()
		let month = (today.getMonth() + 1).toString()
	
		if (month.length === 1) {
			month = "0" + month
		}
	
		return dayString.replace("YEAR", year).replace("MONTH", month)
	}

	const onEventClick = event => {		
		
		openDrawer(event.event._def)

	}

	const [isOpen, setIsOpen] = useState(false)

	const openDrawer = () => {
		setIsOpen(true)
	}

	const onDrawerClose = e => {
		console.log('onDrawerClose', e)
		setIsOpen(false)
	}


	const dispatch = useDispatch()

    useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	const fetchData = () => {
		dispatch(getList())
	}

	const { appointments, loading } = useSelector(state => state.Appointments.data)



		const get_appointments = appointments?.data?.appointments?.map((appointment) => {
			return {
				id : appointment.id,
				title: appointment.data.event_summary,
				start: getDate(appointment.data.appointment_start),
				end: getDate(appointment.data.appointment_end),
				eventColor: 'orange',
			}
		})

	

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

				<>

				<CalendarView
				editable
				selectable
				events={get_appointments} 
				eventClick={event => onEventClick(event)}
				select={event => {console.log('onCellSelect', event)}}
				eventDrop={arg => {console.log('onEventChange', arg)}}
		   		 />

				
				</>

               
			
                
				) 
			}   

			

        </div>

	
	)
}

export default Calendar