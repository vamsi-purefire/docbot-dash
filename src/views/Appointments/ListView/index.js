import React from 'react'
import ActionBar from '../components/ActionBar'
import AppointmentListContent from '../components/AppointmentListContent'
import AppointmentStatistic from '../components/AppointmentStatistic'
import { Container, AdaptableCard } from 'components/shared'
import reducer from '../store'
import { injectReducer } from 'store/index'

injectReducer('Appointments', reducer)

const Appointments = () => {
	return (
		<>
		<AdaptableCard className="h-full" bodyClass="h-full">
		<AppointmentStatistic/>
			<ActionBar />
            <AppointmentListContent />

		</AdaptableCard>
		
		</>
		
	)
}

export default Appointments