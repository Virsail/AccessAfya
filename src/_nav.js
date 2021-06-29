import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Access Afya',
    to: '/dashboard',
    badge: {
      color: 'info'
    },
  },
]
export default _nav
