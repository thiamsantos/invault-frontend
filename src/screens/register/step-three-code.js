import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const StepThree = () => (
  <div>
    <TextField
      multiline
      id="outlined-multiline-static"
      label="Recovery Code"
      rows="4"
      defaultValue="Default Value"
      className="textfield"
      margin="normal"
      variant="outlined"
    />

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
