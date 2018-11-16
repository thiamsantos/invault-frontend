import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

const StepFour = ({props}) => (
  <div>
    <TextField
      id="filled-adornment-password"
      className="pass-field"
      /* Variant="filled" */
      type={props.showPassword ? 'text' : 'password'}
      label="Master Password"
      name="master-password"
      value={props.password}
      // OnChange={props.handleChange('password')}
      InputProps={{
        endAdornment: (
          <InputAdornment variant="filled" position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={props.handleClickShowPassword}
            >
              {props.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  </div>
)

export default StepFour
