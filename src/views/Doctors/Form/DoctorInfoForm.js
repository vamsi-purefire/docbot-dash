import React from 'react'
import {
	Input,
	FormItem,
	Avatar,
	Upload,
	Select
} from 'components/ui'
import { HiUserCircle, HiMail, HiPhone, HiOutlineChartBar, HiOutlineUser } from 'react-icons/hi'
import { Field } from 'formik'

const DoctorInfoForm = props => {

	const genderOptions = [
		{ value: 'male', label: 'Male' },
		{ value: 'female', label: 'Female' },
		{ value: 'other', label: 'Other' },
	]

	const specializationOptions = [
		{ value: 'cardiologist', label: 'Cardiologist' },
		{ value: 'dentist', label: 'Dentist' },
		{ value: 'dermatologist', label: 'Dermatologist' },
		{ value: 'gastroenterologist', label: 'Gastroenterologist' },
		{ value: 'neurologist', label: 'Neurologist' },
		{ value: 'obstetrician', label: 'Obstetrician' },
		{ value: 'ophthalmologist', label: 'Ophthalmologist' },
		{ value: 'orthopedic', label: 'Orthopedic' },
		{ value: 'pediatrician', label: 'Pediatrician' },
		{ value: 'psychiatrist', label: 'Psychiatrist' },
		{ value: 'surgeon', label: 'Surgeon' },
		{ value: 'urologist', label: 'Urologist' },
		{ value: 'other', label: 'Other' },
	]



	const { touched, errors, values } = props

	const onSetFormFile = (form, field, file) => {
		form.setFieldValue(field.name, URL.createObjectURL(file[0]))
	}

	return (
		<>
			<FormItem
				invalid={errors.upload && touched.upload}
				errorMessage={errors.upload}
			>
				<Field name="avatar">
					{({ field, form }) => {
						const avatarProps = field.value ? { src: field.value } : {}
						return (
							<div className="flex justify-center">
								<Upload
									className="cursor-pointer"
									onChange={files => onSetFormFile(form, field, files)}
									onFileRemove={files => onSetFormFile(form, field, files)}
									showList={false}
									uploadLimit={1}
								>
									<Avatar
										className="border-2 border-white dark:border-gray-800 shadow-lg"
										size={100}
										shape="circle"
										icon={<HiOutlineUser />}
										{...avatarProps}
									/>
								</Upload>
							</div>
						)
					}}
				</Field>
			</FormItem>
			<FormItem
				label="Name"
				invalid={errors.name && touched.name}
				errorMessage={errors.name}
			>
				<Field
					type="text"
					autoComplete="off"
					name="name"
					placeholder="Name"
					component={Input}
					prefix={<HiUserCircle className="text-xl" />}
				/>
			</FormItem>
			<FormItem
				label="Email"
				invalid={errors.email && touched.email}
				errorMessage={errors.email}
			>
				<Field
					type="email"
					autoComplete="off"
					name="email"
					placeholder="Email"
					component={Input}
					prefix={<HiMail className="text-xl" />}
				/>
			</FormItem>
			<FormItem
				label="Phone Number"
				invalid={errors.phoneNumber && touched.phoneNumber}
				errorMessage={errors.phoneNumber}
			>
				<Field
					type="text"
					autoComplete="off"
					name="phoneNumber"
					placeholder="Phone Number"
					component={Input}
					prefix={<HiPhone className="text-xl" />}
				/>
			</FormItem>
			<FormItem
				label="Gender"
			>
				<Field name="gender">
					{({ field, form }) => (
						<Select
							field={field}
							form={form}
							options={genderOptions}
							value={genderOptions.filter(option => option.value === form.values.gender)}
							onChange={option => form.setFieldValue(field.name, option.value)}
						/>
					)}
				</Field>
			</FormItem>
			<FormItem
				label="Specialization"
				invalid={errors.select && touched.select}
				errorMessage={errors.select}
			>
				<Field name="specialization">
					{({ field, form }) => (
						<Select
							field={field}
							form={form}
							options={specializationOptions}
							value={specializationOptions.filter(option => option.value === form.values.specialization)}
							onChange={option => form.setFieldValue(field.name, option.value)}
						/>
					)}
				</Field>
			</FormItem>
			<FormItem
				label="Experience (in years)"
			>
				<Field
					type="number"
					autoComplete="off"
					name="experience"
					placeholder="Enter Experience"
					component={Input}
					prefix={<HiOutlineChartBar className="text-xl" />}
				/>
			</FormItem>



		</>
	)
}

export default DoctorInfoForm
