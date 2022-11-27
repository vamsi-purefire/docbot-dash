import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [
    ...authRoute
]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/Home')),
        authority: [],
    },
    {
        key: 'appointments',
        path: '/appointments',
        component: React.lazy(() => import('views/Appointments')),
        authority: [],
    },
    {
        key: 'calendar',
        path: '/calendar',
        component: React.lazy(() => import('views/Calendar')),
        authority: [],
    },
    
    {
        key: 'clinics',
        path: '/clinics',
        component: React.lazy(() => import('views/Appointments')),
        authority: [],
    },
]