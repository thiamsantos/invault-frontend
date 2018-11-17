import React from 'react'
import TextField from '@material-ui/core/TextField'
import {getText} from '../../../core/intl'

const StepTwo = ({values, handleChange}) => (
  <div>
    <TextField
      label={getText('en', 'register.form.password.label')}
      name="password"
      value={values.password}
      onChange={handleChange}
    />
  </div>
)

export default StepTwo
