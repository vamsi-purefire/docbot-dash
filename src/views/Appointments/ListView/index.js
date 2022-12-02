import React from 'react'
import ActionBar from '../components/ActionBar'
import AppointmentListContent from '../components/AppointmentListContent'
import AppointmentStatistic from '../components/AppointmentStatistic'
import { Container } from 'components/shared'
import reducer from '../store'
import { injectReducer } from 'store/index'

injectReducer('Appointments', reducer)

const Appointments = () => {
	return (
		<>
		<AppointmentStatistic/>
			<ActionBar />
            <AppointmentListContent />
		</>
		
	)
}

export default Appointments