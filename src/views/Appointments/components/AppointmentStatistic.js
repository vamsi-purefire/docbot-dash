import React, { useEffect } from 'react'
import { Card, Avatar } from 'components/ui'
import { GrowShrinkTag, MediaSkeleton, Loading } from 'components/shared'
//import { getCustomerStatistic } from '../store/dataSlice'
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
					<GrowShrinkTag value={growthRate} suffix="%" />
				</div>
                </Loading>
		</Card>
	)
}

const CustomerStatistic = () => {

//	const dispatch = useDispatch()

const { appointments, loading } = useSelector(state => state.Appointments.data)

const { total_appointments, active_appointments, cancelled_appointments }  = appointments.data?.statistics || {}


	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
			<StatisticCard 
				icon={<HiOutlineUserGroup />} 
				avatarClass="0"
				label="Total Appointments"
				value={total_appointments}
				growthRate="17.2"
				loading={loading}
			/>
			<StatisticCard 
				icon={<HiOutlineUsers />} 
				avatarClass="0"
				label="Active Appointments"
				value={active_appointments}
				growthRate="5"
				loading={loading}
			/>
			<StatisticCard 
				icon={<HiOutlineUserAdd />} 
				avatarClass="0"
				label="Cancelled Appointments"
				value={cancelled_appointments}
				growthRate="-3"
				loading={loading}
			/>
		</div>
	)
}

export default CustomerStatistic