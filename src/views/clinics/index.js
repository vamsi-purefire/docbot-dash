import React from 'react'
import ActionBar from './components/ActionBar'
import Box from './components/Box'
import { Container } from 'components/shared'

const Clinic = () => {
	return (
		<Container className="h-full">
			<ActionBar />
            <Box />
		</Container>
	)
}

export default Clinic