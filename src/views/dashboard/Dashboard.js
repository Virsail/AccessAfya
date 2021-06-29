import React ,{lazy} from 'react'
import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'

import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'



const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../components/widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Monitoring period
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButtonGroup className="float-end me-3">
                {['Day', 'Week', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          
        </CCardBody>
       </CCard>

      <WidgetsBrand withCharts />

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
       

              <br />

              <CTable hover responsive align="middle" className="mb-0 border">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon name="cil-people" />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Staff Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Efficiency Delta</CTableHeaderCell>
                    <CTableHeaderCell>Nps Delta</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Efficiency</CTableHeaderCell>
                    <CTableHeaderCell>Reported Issues</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/avatar.jpg" status="success" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>Mercy Mukoya</div>
                      <div className="small text-medium-emphasis">
                        <span>New</span> | Registered: Jan 21, 2016
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      1.3
                    </CTableDataCell>
                    <CTableDataCell>
                      1.2
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>96%</strong>
                        </div>
                      </div>
                      <CProgress thin color="danger" value={98} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <strong>3</strong> 
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/kenedy.jpg" status="danger" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>Kennedy Ayako</div>
                      <div className="small text-medium-emphasis">
                        <span>New</span> | Registered: April 1, 2017
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      1.8
                    </CTableDataCell>
                    <CTableDataCell>
                     1.8
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>92%</strong>
                        </div>
                      </div>
                      <CProgress thin color="warning" value={92} />
                    </CTableDataCell>
                    <CTableDataCell>
                     6
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/avatar3.jpg" status="warning" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>Stephanie Tomsett</div>
                      <div className="small text-medium-emphasis">
                        <span>Old</span> | Registered: August 17, 2012
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      2.7
                    </CTableDataCell>
                    <CTableDataCell>
                     2.0
                    </CTableDataCell> 
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>58%</strong>
                        </div>
                      </div>
                      <CProgress thin color="info" value={58} />
                    </CTableDataCell>
                    <CTableDataCell>
                      1
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/avatar5.jpg" status="secondary" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>Faith Katyo</div>
                      <div className="small text-medium-emphasis">
                        <span>Old</span> | Registered: September 17, 2014
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      2.8
                    </CTableDataCell>
                    <CTableDataCell>
                     2.5
                    </CTableDataCell> 
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>74%</strong>
                        </div>
                      </div>
                      <CProgress thin color="success" value={74} />
                    </CTableDataCell>
                    <CTableDataCell>
                      8
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}




export default Dashboard