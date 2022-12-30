import React from 'react'
import { Table, Pagination, Select, Badge, Avatar, Button, Dropdown, Dialog  } from 'components/ui'
import { useTable, usePagination } from 'react-table'
import { HiOutlineClock, HiOutlinePencil } from 'react-icons/hi'
import { IconText } from 'components/shared'
import acronym from 'utils/acronym'
import EllipsisButton from 'components/shared/EllipsisButton'



const statusColor = {
	confirmed: 'bg-emerald-500',
	cancelled: 'bg-red-500',
}


const dropdownList = [
	{ label: 'Send Reminder', value: 'send_reminder'},
	{ label: 'Mark as Completed', value: 'completed' },
	{ label: 'Message Patient', value: 'message_patient' },
    { label: 'Add Note', value: 'add_note' },
]

const columns = [
	{
		Header: 'ID',
		accessor: 'id',
	},
	{
		Header: 'Patient Name',
		accessor: 'data.patient_details.name',
		Cell: props => {
			const row = props.row.original

			return (
				<div className="flex items-center">
					<Avatar size={40} shape="circle" className="mr-4">{acronym(row.data.patient_details.name)}</Avatar>
					<h6 className="text-sm font-normal"> {row.data.patient_details.name}</h6>
				</div>
			)
		},

	},
	{
		Header: 'Selected Doctor',
		accessor: '',
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					<Avatar size={40} shape="circle" className="mr-4">{acronym('Dr. Jindal Sen')}</Avatar>
					<h6 className="text-sm font-normal"> Dr. Jindal Sen</h6>
				</div>
			)
		},

	},
	{
		Header: 'Age',
		accessor: 'data.patient_details.age',
	},
	{
		Header: 'Gender',
		accessor: 'data.patient_details.gender',
	},
	{
		Header: 'Email',
		accessor: 'data.patient_details.email',
	},
	{
		Header: 'Phone',
		accessor: 'data.patient_details.phone',
	},
	{
		Header: 'Time',
		accessor: 'data.appointment_start',
		Cell: props => {

			const row = props.row.original

			var format_date = new Date(row.data.appointment_start)
			let appointment_date = format_date.toLocaleString('en-IN', { month: 'short', day: '2-digit' })
			let appointment_time = format_date.toLocaleString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true })

			return (
				<IconText
					textClass="text-sm font-semibold text-white-500"
					className=""
					icon={<HiOutlineClock className="text-lg" />}
				>
					{appointment_date} {appointment_time}
				</IconText>
			)
		},


	},
	{
		Header: 'Status',
		accessor: 'data.status',
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					<Badge className={statusColor[row.data.status]} />
					<span className="ml-2 rtl:mr-2 capitalize">{row.data.status}</span>
				</div>
			)
		},
	},
	{
		Header: 'Actions',
		accessor: '',
		Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					<Dropdown placement="middle-end-bottom" renderTitle={<EllipsisButton />}>
						{dropdownList.map(item => (
							<Dropdown.Item eventKey={item.value} key={item.value}>
								<span>{item.label}</span>
							</Dropdown.Item>
						))}
					</Dropdown>
				</div>
			)
		},
	},
]

const { Tr, Th, Td, THead, TBody } = Table



const pageSizeOption = [
	{ value: 10, label: '10 / page' },
	{ value: 20, label: '20 / page' },
	{ value: 30, label: '30 / page' },
	{ value: 40, label: '40 / page' },
	{ value: 50, label: '50 / page' },
]

const ReactTable = props => {

	const { data, dataLength } = props


	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		gotoPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
			manualPagination: false,
		},
		usePagination
	)

	const onPaginationChange = page => {
		console.log('page', page)
		gotoPage(page - 1)
	}

	const onSelectChange = value => {
		setPageSize(Number(value))
	}

	return (
			<>
            <Table compact={true} overflow={false} {...getTableProps()}>
            <THead>
                {headerGroups.map(headerGroup => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
                        ))}
                    </Tr>
                ))}
            </THead>
            <TBody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <Tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                            })}
                        </Tr>
                    )
                })}
            </TBody>
        </Table><div className="flex items-center justify-between mt-4">
                <Pagination
                    pageSize={pageSize}
                    currentPage={pageIndex + 1}
                    total={dataLength}
                    onChange={onPaginationChange} />
                <div style={{ minWidth: 130 }}>
                    <Select
                        size="sm"
                        isSearchable={false}
                        value={pageSizeOption.filter(option => option.value === pageSize)}
                        options={pageSizeOption}
                        onChange={option => onSelectChange(option.value)} />
                </div>
            </div>
            </>
	)
}

const PaginationTable = ({ data }) => {
	return (<ReactTable compact = {true} overflow = {false} data={data} dataLength="0" />)
}


export default PaginationTable
