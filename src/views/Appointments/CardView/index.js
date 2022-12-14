import React from 'react'
import ActionBar from '../components/ActionBar'
import AppointmentListContent from '../components/AppointmentCardContent'
import { Container } from 'components/shared'
import reducer from '../store'
import { injectReducer } from 'store/index'

injectReducer('Appointments', reducer)

const Appointments = () => {
	return (
		<Container className="h-full">
			<ActionBar />
            <AppointmentListContent />
		</Container>
	)
}

export default Appointments