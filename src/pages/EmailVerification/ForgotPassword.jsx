import * as React from 'react';
import validator from 'validator';
import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function ForgotPassword() {
  const { showToast } = useToast();
  const [ email, setEmail ] = React.useState('');
  const [ sendMailButtonClicked, setSendMailButtonClicked ] = React.useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPasswordClicked = async () => {
    try {
      setSendMailButtonClicked(true);
      if (email == '') {
        showToast('Please enter your email!', 'error');
      } else if (!validator.isEmail(email)) {
        showToast('Invalid email format!', 'error');
      } else {
        await api.get(`/users/reset-password/${email}`);
        showToast(`We sent reset password mail to ${email} and please check inbox`, 'success');
      }
    } catch (err) {
      console.log(err);
      showToast(`Sending reset password mail to ${email} failed`, 'error');
    }
  }

  return (
    <div className='flex flex-col justify-center bg-[#2c3e50] text-white text-center h-full fixed top-0 right-0 left-0 bottom-0'>
      <h1 className='text-6xl my-4'>Forgot your Password?</h1>
      <h1 className='text-3xl my-2'>Enter your email address and we'll send you a link to reset your password</h1>
      <div className='flex flex-col justify-start items-center'>
        <label
          htmlFor="email"
          className="mb-2 mt-4 text-2xl"
        >
          EMAIL ADDRESS
        </label>
        <input className='max-w-[500px] text-3xl rounded px-3 py-1.5 text-[#1D2127]' type='email' name='email' onChange={handleInputChange} />
        {email === '' && sendMailButtonClicked && (
          <p className="mt-2 text-xs text-red-600 dark:text-red-500">
            Email required!
          </p>
        )}
        {!validator.isEmail(email) &&
          email.length !== 0 &&
          sendMailButtonClicked && (
            <p className="mt-2 text-xs text-red-600 dark:text-red-500">
              Invalid email format!
            </p>
          )}
      </div>
      <button 
        className='bg-[#0088cc] text-white py-3 px-6 rounded-lg text-2xl w-[200px] mx-auto my-5' 
        onClick={handleForgotPasswordClicked}
      >
        SEND EMAIL
      </button>
    </div>
  )
}

export default ForgotPassword;
