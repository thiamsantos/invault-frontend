import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'

const StepOne = () => (
  <div>
    <div>
      <FormControl className="form">
        <InputLabel htmlFor="input-with-icon-adornment">Your name</InputLabel>
        <Input
          id="input-with-icon-adornment"
          name="name"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>

    <div>
      <TextField
        className="textfield"
        id="input-with-icon-textfield"
        label="Your e-mail"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
    </div>
  </div>
)

export default StepOne
