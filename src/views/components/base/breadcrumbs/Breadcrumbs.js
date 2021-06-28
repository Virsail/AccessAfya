import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsCallout } from 'src/reusable'

const Breadcrumbs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout name="Breadcrumb" href="components/breadcrumb" />
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Breadcrumb</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              The breadcrumb navigation provides links back to each previous page the user navigated
              through and shows the current location in a website or an application. You don’t have
              to add separators, because they automatically added in CSS through{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
                {' '}
                <code>::before</code>
              </a>{' '}
              and{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
                {' '}
                <code>content</code>
              </a>
              .
            </p>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
