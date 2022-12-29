import React, { useEffect } from 'react'
import { Card, Avatar, Table } from 'components/ui'
import { GrowShrinkTag, MediaSkeleton, Loading } from 'components/shared'
import { HiOutlineUserGroup, HiOutlineUserAdd, HiOutlineUsers } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'


const StatisticCard = props => {

	const { icon, avatarClass, label, value, growthRate, loading } = props

	const avatarSize = 55

	return (
		<Card bordered>
            <Loading 
				loading={loading} 
				customLoader={
					<MediaSkeleton 
						avatarProps={
							{
								className: 'rounded',
								width: avatarSize,
								height: avatarSize
							}
						} 
					/>
				}
			>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-4">
						<Avatar className={avatarClass} size={avatarSize} icon={icon} />
						<div>
							<span>{label}</span>
							<h3>
								<NumberFormat
									displayType="text"
									value={value}
									thousandSeparator
								/>
							</h3>
						</div>
					</div>
				</div>
                </Loading>
		</Card>
	)
}

const DashboardHeader = () => {

    const { data, loading } = useSelector(state => state.dashboard.data)

	const { total_appointments, total_doctors, total_patients } = data?.statistics || {}

	console.log(total_appointments)

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
			<StatisticCard 
				icon={<HiOutlineUserGroup />} 
				avatarClass="0"
				label="Total Appointments"
				value={total_appointments}
				loading={loading}
			/>
			<StatisticCard 
				icon={<HiOutlineUsers />} 
				avatarClass="0"
				label="Total Patients"
				value={total_patients}
				loading={loading}
			/>
			<StatisticCard 
				icon={<HiOutlineUserAdd />} 
				avatarClass="0"
				label="Total Doctors"
				value={total_doctors}
				loading={loading}
			/>
		</div>
	)
}

export default DashboardHeader