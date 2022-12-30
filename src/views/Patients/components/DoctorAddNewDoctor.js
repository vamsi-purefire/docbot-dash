import React, { forwardRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPatientList, putPatient } from '../store/dataSlice'
import { setDrawerClose } from '../store/stateSlice'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import DoctorAddForm from '../Form'
import { Notification, toast} from 'components/ui'


const DoctorEditContent = forwardRef( (_, ref) => {


	const dispatch = useDispatch()

	const doctor = useSelector((state) => state.patients.state.selectedPatient)
	const data = useSelector((state) => state.patients.data.doctorList)
	const { id } = doctor
    const status = useSelector((state) => state.patients.data.putPatientResponse.code)
  

	const onFormSubmit = values => {

        toast.push(
			<Notification title={"Patient has been added"} type="success" />
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

        dispatch(putPatient({userInfo}))

        
        dispatch(setDrawerClose())


		dispatch(setPatientList())
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
