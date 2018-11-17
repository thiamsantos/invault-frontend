import React from 'react'
import Button from '@material-ui/core/Button'

const StepThree = () => (
  <div>
    <div>
      <p>d1fa1dd4-d399-4823-9b52-33dc6beaa032</p>
      <p>98c98a9a-fb4b-4c1e-b53c-fd20c219fcbc</p>
      <p>7bc724df-cb99-4a79-9381-5e6934054364</p>
      <p>93dfc3d9-e3bf-4217-b7b9-6d81c12325ae</p>
    </div>

    <div>
      <Button variant="contained" className="button">
        Download
      </Button>
      <Button variant="contained" className="button">
        Print
      </Button>
      <Button variant="contained" color="primary" className="button">
        Copy
      </Button>
    </div>
  </div>
)

export default StepThree
