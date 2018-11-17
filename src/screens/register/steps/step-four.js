import React from 'react'
import TextField from '@material-ui/core/TextField'

const StepFour = ({values, handleChange}) => (
  <div>
    <TextField
      label="Verification Code"
      name="totpCode"
      value={values.totpCode}
      onChange={handleChange}
    />
  </div>
)

export default StepFour
