import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function ResetPassword() {
  const token = useParams();
  const { showToast } = useToast();

  const navigate = useNavigate();

  const initialValues = {
    password: '',
    confirm: '',
  };
  const [values, setValues] = React.useState(initialValues);
  const [resetPasswordButtonClicked, setResetPasswordButtonClicked] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleResetPasswordClicked = async () => {
    try {
      setResetPasswordButtonClicked(true);
      if (
        values.password == '' ||
        values.confirm == ''
      ) {
        showToast('Please fill in all the information!', 'error');
      } else if (values.password !== values.confirm) {
        showToast('Confirm is not match!', 'error');
      } else if (values.password.length < 6) {
        showToast('Your password must be at least 6 characters long!', 'error');
      } else {
        console.log(token);
        const result = await api.post('/users/reset-password/', { password: values.password, token: token });
        console.log(result);
        showToast(result.data.msg, 'success');
        navigate('/auth/login');
      }
    } catch (err) {
      console.log(err);
      showToast(err.response.data.msg, 'error');
    }
  }

  return (
    <div className='flex flex-col justify-center bg-[#2c3e50] text-white text-center h-full fixed top-0 right-0 left-0 bottom-0'>
      <h1 className='text-5xl my-4'>Reset Password</h1>
      <h1 className='text-2xl my-2'>Please make sure your new password must be different from previous used passwords.</h1>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-start items-start'>
          <label
            htmlFor="password"
            className="pl-2 mb-2 mt-4 text-lg"
          >
            Password
          </label>
          <input className='max-w-[500px] text-2xl rounded px-3 py-1.5 text-[#1D2127]' type='password' name='password' onChange={handleInputChange} />
          {values.password === '' && resetPasswordButtonClicked && (
            <p className="mt-2 text-xs text-red-600 dark:text-red-500">
              Password required!
            </p>
          )}
        </div>
        <div className='flex flex-col justify-start items-start'>
          <label
            htmlFor="confirm"
            className="pl-2 mb-2 mt-4 text-lg"
          >
            Confirm
          </label>
          <input className='max-w-[500px] text-2xl rounded px-3 py-1.5 text-[#1D2127]' type='password' name='confirm' onChange={handleInputChange} />
          {values.confirm === '' && resetPasswordButtonClicked && (
            <p className="mt-2 text-xs text-red-600 dark:text-red-500">
              Confirm required!
            </p>
          )}
        </div>
      </div>
      <button 
        className='bg-[#0088cc] text-white py-3 px-6 rounded-lg text-xl w-[250px] mx-auto my-5' 
        onClick={handleResetPasswordClicked}
      >
        RESET PASSWORD
      </button>
    </div>
  )
}

export default ResetPassword;