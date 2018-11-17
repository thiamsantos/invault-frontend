import React from 'react'
import {Formik} from 'formik'
import Success from './success'
import Steps from './steps'
import {getText} from '../../core/intl'

const Register = () => (
  <Formik
    initialValues={{email: '', name: '', password: '', totpCode: ''}}
    validate={values => {
      const errors = {}

      if (!values.email) {
        errors.email = getText('en', 'register.form.validation.email.required')
      } else if (!/@/.test(values.email)) {
        errors.email = getText('en', 'register.form.validation.email.invalid')
      } else if (values.email.length > 255) {
        errors.email = getText('en', 'register.form.validation.email.tooLong')
      }

      if (!values.name) {
        errors.name = getText('en', 'register.form.validation.name.required')
      } else if (values.name.length > 255) {
        errors.name = getText('en', 'register.form.validation.name.tooLong')
      }

      if (!values.password) {
        errors.password =  getText('en', 'register.form.validation.password.required')
      } else if (values.password.length < 10) {
        errors.password = getText('en', 'register.form.validation.password.tooShort')
      } else if (values.password.length > 255) {
        errors.password = getText('en', 'register.form.validation.password.tooLong')
      }

      if (!values.totpCode) {
        errors.totpCode = getText('en', 'register.form.validation.totpCode.required')
      } else if (values.totpCode.length !== 6) {
        errors.totpCode = getText('en', 'register.form.validation.totpCode.invalid')
      }

      return errors
    }}
    onSubmit={(values, {setSubmitting, setStatus}) => {
      setTimeout(() => {
        console.log(values)
        setStatus({submitted: true})
        setSubmitting(false)
      }, 400)
    }}
  >
    {props => {
      if (props.status && props.status.submitted === true) {
        return <Success {...props} />
      }

      if (props.isSubmitting) {
        return <div>Submitting...</div>
      }

      return <Steps {...props} />
    }}
  </Formik>
)

export default Register
