import * as React from 'react';
import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function EmailVerificationPageForSignUp() {
  const { showToast } = useToast();
  const [ signupEmail, setSignupEmail ] = React.useState('');

  React.useEffect(() => {
    setSignupEmail(localStorage.getItem('signupEmail'));
  }, []);

  const handleResendVerificationEmail = async () => {
    try {
      await api.post('/users/re-send/email-verification', { email: signupEmail });
      showToast('New verification email is successfully sent.', 'success');
    } catch (err) {
      showToast('Resending verification code failed!', 'error');
      console.log(err);
    }
  }

  return (
    <div className='flex flex-col justify-center bg-[#2c3e50] text-white text-center h-full fixed top-0 right-0 left-0 bottom-0'>
      <h1 className='text-5xl my-4'>Your account successfully registered and now verify your email</h1>
      <h1 className='text-3xl my-2'>We just sent an email to the address: <b>{signupEmail}</b></h1>
      <h1 className='text-3xl my-2'>Please check your email and select the link provided to verify your address.</h1>
      <button 
        className='bg-[#0088cc] text-white py-3 px-6 rounded-lg text-2xl w-[400px] mx-auto my-5' 
        onClick={handleResendVerificationEmail}
      >
        Resend Verification Email
      </button>
    </div>
  )
}

export default EmailVerificationPageForSignUp;
