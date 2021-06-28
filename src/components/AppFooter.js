import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://github.com/virsail" target="_blank" rel="noopener noreferrer">
          Check out my Github
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
