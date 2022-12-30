import React from 'react'
import { Table, Pagination, Select, Badge, Avatar, Button  } from 'components/ui'
import { useTable, usePagination } from 'react-table'
import { HiOutlineClock, HiOutlinePencil } from 'react-icons/hi'
import {  IconText  } from 'components/shared'
import acronym from 'utils/acronym'


const statusColor = {
	confirmed: 'bg-emerald-500',
	cancelled: 'bg-red-500',
}

const columns = [
	{
		Header: 'ID',
		accessor: 'id',
	},
	{
		Header: 'Patient Name',
		accessor: 'name',
        Cell: props => {
            const row = props.row.original

			return (
            <div className="flex items-center">
            <Avatar size={40} shape="circle" className="mr-4">{acronym(row.name)}</Avatar>
            <h6 className="text-sm font-normal"> {row.name}</h6>
		    </div>
			)
		},
        
	},
    {
		Header: 'Phone',
		accessor: 'phone',
	},
    {
		Header: 'Email',
		accessor: 'email',
	},
    
    {
        Header: 'Gender',
        accessor: 'gender',
    },

    {
		Header: 'Actions',
		accessor: '',
        Cell: props => {
			const row = props.row.original
			return (
				<div className="flex items-center">
					<Button  icon={<HiOutlinePencil/>}>
                    <span className="pl-2" >Edit</span>
                    </Button>
				</div>
			)
		},
	},
]

const { Tr, Th, Td, THead, TBody } = Table



const pageSizeOption = [
	{ value: 10, label: '10 / page'},
	{ value: 20, label: '20 / page'},
	{ value: 30, label: '30 / page'},
	{ value: 40, label: '40 / page'},
	{ value: 50, label: '50 / page'},
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
		<div>
			<Table {...getTableProps()}>
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
			</Table>
			<div className="flex items-center justify-between mt-4">
				<Pagination
					pageSize={pageSize}
					currentPage={pageIndex + 1}
					total={dataLength}
					onChange={onPaginationChange}
				/>
				<div style={{minWidth: 130}}>
					<Select
						size="sm"
						isSearchable={false} 
						value={pageSizeOption.filter(option => option.value === pageSize)} 
						options={pageSizeOption}
						onChange={option => onSelectChange(option.value)}
					/>
				</div>
			</div>
		</div>
	)
}

const DoctorsList = ({patients}) => {

	return (<ReactTable data={patients} dataLength="0"/>)


}


export default DoctorsList
