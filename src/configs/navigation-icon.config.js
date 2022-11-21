import React from 'react'
import {
    HiOutlineColorSwatch, 
	HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineHome,
    HiOutlinePlusSm
} from 'react-icons/hi'

const navigationIcon = {
    home: <HiOutlineHome />,
    clinic: <HiOutlinePlusSm />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />
}

export default navigationIcon