import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Formik} from 'formik'
import StepFive from './step-five-finish'
import StepFour from './step-four-2fa'
import StepThree from './step-three-code'
import StepTwo from './step-two-master-pass'
import StepOne from './step-one'

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select your username and password.'
    case 1:
      return 'Select your Master Password'
    case 2:
      return 'This is your recovery code. You should really write this down.'
    default:
      return 'Uknown stepIndex'
  }
}

class Register extends React.Component {
  state = {
    activeStep: 0
  }

  getSteps = () => {
    return [
      <StepOne key={0} props={this.state} />,
      <StepTwo key={1} props={this.state} />,
      <StepThree key={2} props={this.state} />,
      <StepFour key={3} props={this.state} />,
      <StepFive key={4} props={this.state} />
    ]
  }

  getCurrentStep = () => {
    if (this.state.activeStep === 0) {
      return [<StepOne key={0} props={this.state} />]
    }
    if (this.state.activeStep === 1) {
      return [<StepTwo key={0} props={this.state} />]
    }
    if (this.state.activeStep === 2) {
      return [<StepThree key={0} props={this.state} />]
    }
    if (this.state.activeStep === 3) {
      return [<StepFour key={0} props={this.state} />]
    }
    if (this.state.activeStep === 4) {
      return [<StepFive key={0} props={this.state} />]
    }
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0
    })
  }

  handleChange = prop => event => {
    this.setState({[prop]: event.target.value})
  }

  handleClickShowPassword = () => {
    this.setState(state => ({showPassword: !state.showPassword}))
  }

  render() {
    // Const { classes } = this.props;
    const classes = {
      root: ''
    }
    const steps = this.getSteps()
    const {activeStep} = this.state
    const currentStep = this.getCurrentStep()

    return (
      <Formik
        initialValues={{email: '', password: ''}}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            /* Alert(JSON.stringify(values, null, 2)) */
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          /* Values, */
          /* errors, */
          /* touched, */
          /* handleChange, */
          /* handleBlur, */
          handleSubmit,
          isSubmitting
          /* And other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.root}>
              <Stepper alternativeLabel activeStep={activeStep}>
                {currentStep.map(label => {
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <div>
                {this.state.activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>
                      All steps completed
                    </Typography>
                    <Button onClick={this.handleReset}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        className={classes.backButton}
                        onClick={this.handleBack}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        )}
      </Formik>
    )
  }
}

export default Register
