import React from 'react'

const Success = ({values}) => (
  <div>
    <h1>You are almost there!</h1>
    <p>You should receive an email in the next few minutes.</p>
    <p>Follow the link inside to set up your account and sign in.</p>

    <h2>{values.email}</h2>

    <p>
      If you don see the confirmation email, please verify your email address
      and check your spam folder.
    </p>
  </div>
)

export default Success
