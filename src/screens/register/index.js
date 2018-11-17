import React from 'react'
import {Formik} from 'formik'
import {getText} from '../../core/intl'
import Success from './success'
import Steps from './steps'

const Register = () => (
  <Formik
    initialValues={{email: '', name: '', password: '', totpCode: ''}}
    validate={values => {
      const errors = {}

      if (!values.email) {
        errors.email = getText('en', 'register.form.email.validation.required')
      } else if (!/@/.test(values.email)) {
        errors.email = getText('en', 'register.form.email.validation.invalid')
      } else if (values.email.length > 255) {
        errors.email = getText('en', 'register.form.email.validation.tooLong')
      }

      if (!values.name) {
        errors.name = getText('en', 'register.form.name.validation.required')
      } else if (values.name.length > 255) {
        errors.name = getText('en', 'register.form.name.validation.tooLong')
      }

      if (!values.password) {
        errors.password = getText(
          'en',
          'register.form.password.validation.required'
        )
      } else if (values.password.length < 10) {
        errors.password = getText(
          'en',
          'register.form.password.validation.tooShort'
        )
      } else if (values.password.length > 255) {
        errors.password = getText(
          'en',
          'register.form.password.validation.tooLong'
        )
      }

      if (!values.totpCode) {
        errors.totpCode = getText(
          'en',
          'register.form.totpCode.validation.required'
        )
      } else if (values.totpCode.length !== 6) {
        errors.totpCode = getText(
          'en',
          'register.form.totpCode.validation.invalid'
        )
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
