import React, {useState} from 'react'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import {getText} from '../../../core/intl'
import StepOne from './step-one'
import StepTwo from './step-two'
import StepThree from './step-three'
import StepFour from './step-four'

const steps = [StepOne, StepTwo, StepThree, StepFour]

const Steps = props => {
  const [currentStep, setCurrentStep] = useState(0)
  const isLastStep = currentStep === steps.length - 1
  const isFirstStep = currentStep === 0

  const CurrentStep = steps[currentStep]

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      props.submitForm()
    }

    setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => setCurrentStep(currentStep - 1)

  return (
    <div>
      <CurrentStep {...props} />

      <MobileStepper
        variant="dots"
        position="static"
        steps={steps.length}
        activeStep={currentStep}
        nextButton={
          <Button variant="contained" color="primary" onClick={handleNext}>
            {isLastStep
              ? getText('en', 'register.stepper.finish')
              : getText('en', 'register.stepper.next')}
          </Button>
        }
        backButton={
          <Button disabled={isFirstStep} onClick={handlePrevious}>
            {getText('en', 'register.stepper.back')}
          </Button>
        }
      />
    </div>
  )
}

export default Steps
