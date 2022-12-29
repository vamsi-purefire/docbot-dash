import React, { useRef, useState } from 'react'
import {
    Button,
    Drawer,
} from 'components/ui'
//import CustomerEditContent from './CustomerEditContent'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawerClose, setSelectedDoctor } from '../store/stateSlice'
import  DoctorEditContent from './DoctorAddNewDoctor'

const DrawerFooter = ({ onSaveClick, onCancel, loading }) => {
    return (
        <div className="text-right w-full">
            <Button size="sm" className="mr-2" onClick={onCancel}>Cancel</Button>
            <Button size="sm" variant="solid" loading={loading} onClick={onSaveClick}>Save</Button>
        </div>
    )
}



const CustomerEditDialog = () => {
    const dispatch = useDispatch()
    const drawerOpen = useSelector((state) => state.doctors.state.drawerOpen)

    const onDrawerClose = () => {
        dispatch(setDrawerClose())
        //dispatch(setSelectedDoctor({}))
    }

    const formikRef = useRef()

    const formSubmit = () => {
        formikRef.current?.submitForm()
    }

    const [loading, setLoading] = useState(false)


    return (
        
        <Drawer
            title="Add New Doctor"
            isOpen={drawerOpen}
            onClose={onDrawerClose}
            onRequestClose={onDrawerClose}
            closable={false}
            bodyClass="p-0"
            footer={<DrawerFooter onCancel={onDrawerClose} onSaveClick={formSubmit} loading={loading} />}
        >
            <DoctorEditContent ref={formikRef} />
        </Drawer>
    )
}

export default CustomerEditDialog
