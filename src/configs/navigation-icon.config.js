import React from 'react'
import {
    HiOutlineColorSwatch, 
	HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineHome,
    HiOutlinePlusSm,
    HiOutlineCalendar,
    HiOutlineIdentification,
    HiOutlineUserAdd,
    HiOutlineAnnotation,
    HiOutlineSpeakerphone,
    HiOutlineCursorClick,
    HiOutlineClipboardList,
    HiOutlineCog
} from 'react-icons/hi'

const navigationIcon = {
    home: <HiOutlineHome />,
    clinic: <HiOutlinePlusSm />,
    apppointments: <HiOutlineCursorClick />,
    calendar: <HiOutlineCalendar />,
    patients: <HiOutlineIdentification />,
    reports: <HiOutlineClipboardList />,
    doctors: <HiOutlineUserAdd />,
    communication: <HiOutlineAnnotation />,
    broadcasts: <HiOutlineSpeakerphone />,
    settings: <HiOutlineCog />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />
}

export default navigationIcon