import React from 'react'
import TextField from '@material-ui/core/TextField'

const StepTwo = ({values, handleChange}) => (
  <div>
    <TextField
      label="Password"
      name="password"
      value={values.password}
      onChange={handleChange}
    />
  </div>
)

export default StepTwo
