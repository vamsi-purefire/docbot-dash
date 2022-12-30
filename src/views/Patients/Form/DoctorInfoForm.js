import React from 'react'
import {
	Input,
	FormItem,
	Avatar,
	Upload,
	Select,
	DatePicker
} from 'components/ui'
import { HiUserCircle, HiMail, HiPhone, HiOutlineChartBar, HiOutlineUser } from 'react-icons/hi'
import { Field } from 'formik'

const DoctorInfoForm = props => {

	const genderOptions = [
		{ value: 'male', label: 'Male' },
		{ value: 'female', label: 'Female' },
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
				label="DOB"
				invalid={errors.date && touched.date}
				errorMessage={errors.date}
			>
				<Field name="date" placeholder="Date">
					{({ field, form }) => (
						<DatePicker
							field={field}
							form={form}
							value={field.value}
							onChange={(date) => {
								form.setFieldValue(field.name, date)
							}}
						/>
					)}
				</Field>
			</FormItem>




		</>
	)
}

export default DoctorInfoForm
