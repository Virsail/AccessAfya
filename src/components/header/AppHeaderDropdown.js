import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src="avatars/avatar6.jpg" size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-dark fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem href="https://business.facebook.com/pg/AccessAfya/posts/">
          <CIcon name="cil-bell" className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="https://www.accessafya.com/contact">
          <CIcon name="cil-envelope-open" className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            25
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="https://www.nesta.org.uk/feature/innovating-solve-development-challenges/access-afya/">
          <CIcon name="cil-task" className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            54
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="https://twitter.com/AccessAfya/status/1385546731580964868">
          <CIcon name="cil-comment-square" className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            789
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-dark fw-semibold py-2">@Access_Afya._</CDropdownHeader>  
        <CDropdownDivider />
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
