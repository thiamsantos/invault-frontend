import React from 'react'
import TextField from '@material-ui/core/TextField'

const StepOne = ({handleChange, handleBlur, values, errors, touched}) => (
  <div>
    <div>
      <TextField
        label="Name"
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
        label="Email"
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
