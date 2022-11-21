import React, { useEffect } from 'react'
import classNames from 'classnames'
import { 
	Card, 
	Button, 
	Tag, 
	Notification,
	toast,
	Skeleton
} from 'components/ui'
import { Loading, UsersAvatarGroup, IconText  } from 'components/shared'
import useThemeClass from 'utils/hooks/useThemeClass'
import { HiOutlineDuplicate, HiOutlinePlus, HiOutlineLocationMarker } from 'react-icons/hi'
import NumberFormat from 'react-number-format'

const data = [
	{
		userName: 'Dr. Jindal Sen',
		avatarImg: '/img/avatars/thumb-3.jpg',
	},
	{
		userName: 'Dr. Abhijith',
		avatarImg: '/img/avatars/thumb-9.jpg',
	},
	{
		userName: 'Dr. Ravi Kumar',
		avatarImg: '/img/avatars/thumb-6.jpg',
	},
	{
		userName: 'Ella Robinson',
		avatarImg: '/img/avatars/thumb-15.jpg',
	}
]

const BoxCard = () => {

	return (
        <>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <Card className= "hover:shadow-lg transition duration-150 ease-in-out">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <h6 className="font-bold">Test Clinic</h6>
                </div>
                <div className="text-right rtl:text-left">
                <Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">Active</Tag>
	
                </div>
            </div>
            <div className="my-4">

                        <IconText
                            textClass="text-sm font-semibold text-white-500"
                            className="text-emerald-500"
                            icon={<HiOutlineLocationMarker className="text-lg" />}
                        >
                            Nellore
                        </IconText>

            </div>

            <UsersAvatarGroup className= "pb-5"
			nameKey="userName"
			imgKey="avatarImg"
			avatarProps={{size: 40}} 
			users={data} 
		/>

            <Button className="mb-5" block>View Clinic</Button>

        </Card>
        </div>
        </>
        
        
	)

}

export default BoxCard