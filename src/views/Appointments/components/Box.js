import React, { useEffect } from 'react'
import classNames from 'classnames'
import { getList } from '../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { injectReducer } from 'store/index'

import { 
	Card, 
	Button, 
	Tag, 
	Timeline,
	toast,
	Skeleton
} from 'components/ui'
import { Loading, UsersAvatarGroup, IconText  } from 'components/shared'
import useThemeClass from 'utils/hooks/useThemeClass'
import { HiOutlineLocationMarker, HiOutlineIdentification, HiOutlineMail } from 'react-icons/hi'



const BoxCard = ({data}) => {


	const appointment = data.data


	return (
		 
        <Card className= "hover:shadow-lg transition duration-150 ease-in-out">
            <div className="flex items-center justify-between">            
				<div className="text-left rtl:text-left">
                <Tag className="bg-white-100 text-emerald-600 dark:bg-gray-700/20 dark:text-emerald-100 border-1 rounded">#{appointment.ID}</Tag>	
                </div>
                <div className="text-right rtl:text-left">
                <Tag className="capitalize bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">{appointment.status}</Tag>
                </div>
				<div className="text-right rtl:text-left">
                <Tag className="capitalize bg-white-100 text-emerald-600 dark:bg-gray-700/20 dark:text-emerald-100 border-1 rounded">
				<IconText
                            textClass="text-sm font-semibold text-white-500"
                            className="text-indigo-50"
                            icon={<HiOutlineLocationMarker className="text-lg" />}
                        >
                            Nellore
                        </IconText>	
				</Tag>
                </div>
            </div>
			<div className="flex items-center gap-3 pt-5">
                    <h6 className="font-bold"> {appointment.event_description}</h6>
                </div>

            <div className="my-4">

                        <IconText
                            textClass="text-sm font-semibold text-white-500"
                            className="text-indigo-50"
                            icon={<HiOutlineIdentification className="text-lg" />}
                        >
                            Vamsi Janaki
                        </IconText>

						<IconText
                            textClass="text-sm font-semibold text-white-500"
                            className="text-indigo-50"
                            icon={<HiOutlineMail className="text-lg" />}
                        >
                            Vamsi Janaki
                        </IconText>
						

            </div>

            <Button className="mb-5 mt-5" block> View Appointment</Button>

        </Card>
         
	)

}

export default BoxCard