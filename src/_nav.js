import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Access Afya',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info'
    },
  },

  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Products',
    to: '/products',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'All Products',
        to: '/products/all-products',
      },
      {
        _component: 'CNavItem',
        anchor: 'Add New Products',
        to: '/products/add-new-products',
      },
    ],
  },
]

export default _nav
