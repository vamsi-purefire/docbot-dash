import React from 'react'
import { useSelector } from 'react-redux'



const ProjectDashboardHeader = ({data}) => {

	const {displayName} = useSelector((state) => state.auth.user)

	return (
		<div>
			<h4 className="mb-1">Hello, {displayName}!</h4>
			<p>You have {data.taskCount} apppointments on hand.</p>
		</div>
	)
}

export default ProjectDashboardHeader