import React from 'react'
import {Formik} from 'formik'
import Success from './success'
import Steps from './steps'

const Register = () => (
  <Formik
    initialValues={{email: '', name: '', password: '', totpCode: ''}}
    validate={values => {
      const errors = {}

      if (!values.email) {
        errors.email = 'Required'
      } else if (!/@/.test(values.email)) {
        errors.email = 'Invalid email address'
      } else if (values.email.length > 255) {
        errors.email = 'Has more than 255 characters'
      }

      if (!values.name) {
        errors.name = 'Required'
      } else if (values.name.length > 255) {
        errors.name = 'Has more than 255 characters'
      }

      if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length < 10) {
        errors.password = 'Has less than 10 characters'
      } else if (values.password.length > 255) {
        errors.password = 'Has more than 255 characters'
      }

      if (!values.totpCode) {
        errors.totpCode = 'Required'
      } else if (values.totpCode.length !== 6) {
        errors.totpCode = 'Invalid code'
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
