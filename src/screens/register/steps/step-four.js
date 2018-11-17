import React from 'react'
import TextField from '@material-ui/core/TextField'
import {getText} from '../../../core/intl'

const StepFour = ({values, handleChange}) => (
  <div>
    <TextField
      label={getText('en', 'register.form.totpCode.label')}
      name="totpCode"
      value={values.totpCode}
      onChange={handleChange}
    />
  </div>
)

export default StepFour
