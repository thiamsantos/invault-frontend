import React from 'react'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import {getText} from '../../../core/intl'
import StepOne from './step-one'
import StepTwo from './step-two'
import StepThree from './step-three'
import StepFour from './step-four'

const steps = [StepOne, StepTwo, StepThree, StepFour]

class Steps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentStep: 0}
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  handleNext() {
    if (this.state.currentStep === steps.length - 1) {
      this.props.submitForm()
      return
    }

    this.setState(state => ({
      currentStep: state.currentStep + 1
    }))
  }

  handleBack() {
    this.setState(state => ({
      currentStep: state.currentStep - 1
    }))
  }

  hasBackStep() {
    return this.state.currentStep === 0
  }

  render() {
    const CurrentStep = steps[this.state.currentStep]

    return (
      <div>
        <CurrentStep {...this.props} />

        <MobileStepper
          variant="dots"
          position="static"
          steps={steps.length}
          activeStep={this.state.currentStep}
          nextButton={
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNext}
            >
              {this.state.currentStep === steps.length - 1
                ? getText('en', 'register.stepper.finish')
                : getText('en', 'register.stepper.next')}
            </Button>
          }
          backButton={
            <Button disabled={this.hasBackStep()} onClick={this.handleBack}>
              {getText('en', 'register.stepper.back')}
            </Button>
          }
        />
      </div>
    )
  }
}

export default Steps
