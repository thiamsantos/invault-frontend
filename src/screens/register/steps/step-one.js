import React from 'react'
import TextField from '@material-ui/core/TextField'
import {getText} from '../../../core/intl'

const StepOne = ({handleChange, handleBlur, values, errors, touched}) => (
  <div>
    <div>
      <TextField
        label={getText('en', 'register.form.name.label')}
        name="name"
        value={values.name}
        error={Boolean(touched.name) && Boolean(errors.name)}
        helperText={touched.name && errors.name ? errors.name : null}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
    <div>
      <TextField
        label={getText('en', 'register.form.email.label')}
        name="email"
        value={values.email}
        error={Boolean(touched.email) && Boolean(errors.email)}
        helperText={touched.email && errors.email ? errors.email : null}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  </div>
)

export default StepOne
