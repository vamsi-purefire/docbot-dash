import { 
  //  NAV_ITEM_TYPE_TITLE, 
  //  NAV_ITEM_TYPE_COLLAPSE, 
    NAV_ITEM_TYPE_ITEM 
} from 'constants/navigation.constant'

const navigationConfig = [
    {
        key: 'home',
		path: '/home',
		title: 'Dashboard',
		translateKey: 'nav.home',
		icon: 'home',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	{
		key: 'clinics',
		path: '/clinics',
		title: 'Clinics',
		translateKey: 'nav.clinics',
		icon: 'clinic',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
    
]

export default navigationConfig