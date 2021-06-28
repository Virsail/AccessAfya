import React from 'react'
import PropTypes from 'prop-types'
import {  CRow } from '@coreui/react'

const WidgetsBrand = ({ withCharts }) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow>
      
     
 
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
