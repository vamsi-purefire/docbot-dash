import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [
    ...authRoute
]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/Dashboard')),
        authority: [],
    },
    {
        key: 'appointments.list',
        path: '/appointments',
        component: React.lazy(() => import('views/Appointments/ListView')),
        authority: [],
    },
    {
        key: 'appointments.card',
        path: '/appointments/card',
        component: React.lazy(() => import('views/Appointments/CardView')),
        authority: [],
    },
    {
        key: 'calendar',
        path: '/calendar',
        component: React.lazy(() => import('views/Calendar')),
        authority: [],
    },

    {
        key: 'doctors',
        path: '/doctors',
        component: React.lazy(() => import('views/Doctors')),
        authority: [],
    },
    
    {
        key: 'clinics',
        path: '/clinics',
        component: React.lazy(() => import('views/Appointments/CardView')),
        authority: [],
    },
]