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
		key: 'appointments.list',
		path: '/appointments',
		title: 'Appointments',
		translateKey: 'nav.appointments',
		icon: 'apppointments',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'calendar',
		path: '/calendar',
		title: 'Calendar',
		translateKey: 'nav.calendar',
		icon: 'calendar',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'patients',
		path: '/patients',
		title: 'Patients',
		translateKey: 'nav.patients',
		icon: 'patients',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'reports',
		path: '/reports',
		title: 'Reports',
		translateKey: 'nav.reports',
		icon: 'reports',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'doctors',
		path: '/doctors',
		title: 'Doctors',
		translateKey: 'nav.doctors',
		icon: 'doctors',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'communication',
		path: '/communication',
		title: 'Communication',
		translateKey: 'nav.communication',
		icon: 'communication',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'broadcasts',
		path: '/broadcasts',
		title: 'Broadcasts',
		translateKey: 'nav.broadcasts',
		icon: 'broadcasts',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},
	{
		key: 'settings',
		path: '/settings',
		title: 'Settings',
		translateKey: 'nav.settings',
		icon: 'settings',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: []
	},

    
]

export default navigationConfig