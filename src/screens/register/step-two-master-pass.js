import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

class StepTwo extends React.Component {
  state = {
    password: '',
    showPassword: false
  }

  handleChange = prop => event => {
    this.setState({[prop]: event.target.value})
  }

  handleClickShowPassword = () => {
    this.setState(state => ({showPassword: !state.showPassword}))
  }

  render() {
    return (
      <div>
        <TextField
          id="filled-adornment-password"
          className="pass-field"
          /* Variant="filled" */
          type={this.state.showPassword ? 'text' : 'password'}
          label="Master Password"
          value={this.state.password}
          /* OnChange={this.handleChange('password')} */
          InputProps={{
            endAdornment: (
              <InputAdornment variant="filled" position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>
    )
  }
}

export default StepTwo
