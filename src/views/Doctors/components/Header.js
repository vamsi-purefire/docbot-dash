import React, { useRef } from 'react'
import { Button, Input, Tooltip } from 'components/ui'
import { 
	HiOutlinePlusCircle, 
	HiOutlineSearch,
	HiOutlineViewGrid,
	HiOutlineViewList,
	HiOutlineSortAscending, 
	HiOutlineSortDescending
} from 'react-icons/hi'
import {setSearch, setDrawerOpen} from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash/debounce'

const ActionBar = () => {

	const dispatch = useDispatch()

	const inputRef = useRef()

//	const view = useSelector((state) => "list")

	//const { sort } = useSelector((state) => "list")

	//const onAddNewProject = () => {
	//	dispatch(toggleNewDoctorDialog(true))
	//}

	//const debounceFn = debounce(handleDebounceFn, 500)

	//function handleDebounceFn(val) {
	//	dispatch(setSearch(val))
	//}

	//const handleInputChange = (e) => {
//		debounceFn(e.target.value)
//	}

const onAddNewDoctor = () => {
	dispatch(setDrawerOpen())
//	dispatch(setSelectedDoctor())
}

	return (
		<div className="lg:flex items-center justify-between mb-4">
			<h3 className="mb-4 lg:mb-0">Doctors List</h3>
			<div className="flex flex-col md:flex-row md:items-center gap-4">
				<Input 
		//			ref={inputRef} 
					size="sm"
					placeholder="Search" 
					prefix={<HiOutlineSearch className="text-lg" />}
				//	onChange={handleInputChange}
				/>
				<Button 
					size="sm" 
					variant="twoTone"
					icon={<HiOutlinePlusCircle />}
					onClick={onAddNewDoctor}
				>
					New Doctor
				</Button>
			</div>
		</div>
	)
}

export default ActionBar
