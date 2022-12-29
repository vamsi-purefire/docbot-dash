import React, { forwardRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDoctorList, putDoctor } from '../store/dataSlice'
import { setDrawerClose } from '../store/stateSlice'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import DoctorAddForm from '../Form'
import { Notification, toast} from 'components/ui'


const DoctorEditContent = forwardRef( (_, ref) => {


	const dispatch = useDispatch()

	const doctor = useSelector((state) => state.doctors.state.selectedDoctor)
	const data = useSelector((state) => state.doctors.data.doctorList)
	const { id } = doctor
    const status = useSelector((state) => state.doctors.data.putDoctorResponse.code)
  

	const onFormSubmit = values => {

        toast.push(
			<Notification title={"Doctor has been added"} type="success" />
		,{
			placement: 'top-center'
		})

		const { 
			name, 
			email, 
			avatar,
            gender,
            specialization,
            experience,
			phoneNumber,
		} = values

		const userInfo = {name, email, avatar, phoneNumber, gender, specialization, experience}
		let newData = cloneDeep(data)
		let editedCustomer = {}

        dispatch(putDoctor({userInfo}))

        
        dispatch(setDrawerClose())


		dispatch(setDoctorList(newData))
	}
	
	return (
		<DoctorAddForm 
			ref={ref} 
			onFormSubmit={onFormSubmit}
			doctor={doctor}
		/>
	)
})

export default DoctorEditContent
