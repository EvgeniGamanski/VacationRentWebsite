import React from 'react'

const RegisterPage = () => {
  return (
    <div className='register'>
      <div className='register_content'>
        <form>
          <input
            placeholder='First Name'
            name='firstname'
            required
          />
           <input
            placeholder='Last Name'
            name='lastname'
            required
          />
           <input
            placeholder='Email'
            name='email'
            type='email'
            required
          />
           <input
            placeholder='Password'
            name='password'
            type='password'
            required
          />
            <input
            placeholder='Confirm Password'
            name='confirmPassword'
            type='password'
            required
          />
          <input type='file' name='profileImage' accept='image/*' style={{ display: 'none'}} required />
        </form>
        <a href='/login'>Already have an account? Log In Here</a>
      </div>
    </div>
  )
}

export default RegisterPage