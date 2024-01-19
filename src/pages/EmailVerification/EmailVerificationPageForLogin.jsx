import * as React from 'react'
import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function EmailVerificationPageForLogin() {
  const { showToast } = useToast();
  const [ loginEmail, setLoginEmail ] = React.useState('');

  React.useEffect(() => {
    setLoginEmail(localStorage.getItem('loginEmail'));
  }, []);

  const handleResendVerificationEmail = async () => {
    try {
      await api.post('/users/re-send/email-verification', { email: loginEmail });
      showToast('New verification email is successfully sent.', 'success');
    } catch (err) {
      showToast('Resending verification code failed!', 'error');
      console.log(err);
    }
  }

  return (
    <div className='flex flex-col justify-center bg-[#2c3e50] text-white text-center h-full fixed top-0 right-0 left-0 bottom-0'>
      <h1 className='text-5xl my-4'>Your email address is not verified, verify your email to continue</h1>
      <h1 className='text-3xl my-2'>We just sent an email to the address: <b>{ loginEmail }</b></h1>
      <h1 className='text-3xl my-2'>Please check your email and select the link provided to verify your address.</h1>
      <button className='bg-[#0088cc] text-white py-3 px-6 rounded-lg text-2xl w-[400px] mx-auto my-5' onClick={handleResendVerificationEmail}>Resend Verification Email</button>
    </div>
  )
}

export default EmailVerificationPageForLogin;
