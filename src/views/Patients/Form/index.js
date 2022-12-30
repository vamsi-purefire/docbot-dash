import React, { forwardRef } from 'react'
import { Tabs, FormContainer, } from 'components/ui'
import { Form, Formik } from 'formik'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import * as Yup from 'yup'
import DoctorInfoForm from './DoctorInfoForm'

dayjs.extend(customParseFormat)

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email Required'),
	name: Yup.string().required('User Name Required'),
	phoneNumber: Yup.string().matches(
		/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/, 
		'Phone number is not valid'
	),
	avatar: Yup.string(),
	gender : Yup.string().required('Please select gender!'),
	specialization : Yup.string().required('Please select specialization!'),
	experience : Yup.number().integer().required('Please enter experience!'),
})

const DoctorAddForm = forwardRef((props, ref) => {

	const { doctor, onFormSubmit } = props

	return (
		<Formik
			innerRef={ref}
			initialValues={{ 
				name: doctor.name || '',
				email: doctor.email || '',
				gender : doctor?.gender || '',
				specialization : '',
				avatar: doctor.avatar || '',
				phoneNumber:doctor?.phoneNumber || '',
				experience : doctor?.experience || '',
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				onFormSubmit?.(values)
				setSubmitting(false)
			}}
		>
			{({touched, errors, resetForm}) => (
				<Form>
					<FormContainer>
							<div className="p-6">
                            <DoctorInfoForm touched={touched} errors={errors} />
							</div>
					</FormContainer>
				</Form>
			)}
		</Formik>
	)
})

export default DoctorAddForm
