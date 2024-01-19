import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function MyDetails() {
  const { user } = useAuth();
  const { showToast } = useToast();

  const navigate = useNavigate();

  const initialValues = {
    email: user.email,
    fullName: user.fullName,
  };
  const [values, setValues] = React.useState(initialValues);
  const [updateButtonClicked, setUpdateButtonClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleUpdateButtonClick = async () => {
    try {
      setUpdateButtonClicked(true);
      if (values.email == '' || values.fullName == '') {
        showToast('Please fill in all the information!', 'error');
      } else {
        if(!localStorage.getItem('updateEmail')) {
          localStorage.setItem('updateEmail', values.email);
        } else {
          localStorage.removeItem('updateEmail');
          localStorage.setItem('updateEmail', values.email);
        }
        setIsLoading(true);
        const result = await api.put('/users/me', values);
        setValues({ email: result.data.email, fullName: result.data.fullName });
        showToast('User profile updated successfully!', 'success');
        if (user.email !== values.email) {
          navigate('/email-verification-page-for-update');
        }
      }
    } catch (err) {
      console.log(err);
      showToast(err.response.data.msg, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-[20px] rounded bg-[#282D36] text-white">
      <header className="p-[18px]">
        <h2 className="mt-[5px] text-[20px] font-normal">My Details</h2>
      </header>
      <div className="p-[15px] bg-[#2E353E] box-border">
        <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Email
          </label>
          <div className="w-1/2 px-[15px]">
            <input
              name="email"
              type="email"
              required
              className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
              onChange={handleInputChange}
              value={values.email}
            />
            {values.email == '' && updateButtonClicked && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                Email required!
              </p>
            )}
            {!validator.isEmail(values.email) &&
              values.email.length !== 0 &&
              updateButtonClicked && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                  Invalid email format!
                </p>
              )}
          </div>
        </div>
        <div className="flex justify-start">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Full Name
          </label>
          <div className="w-1/2 px-[15px]">
            <input
              name="fullName"
              type="text"
              required
              className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
              onChange={handleInputChange}
              value={values.fullName}
            />
            {values.fullName == '' && updateButtonClicked && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                Full Name required!
              </p>
            )}
          </div>
        </div>
      </div>
      <footer className="px-[15px] py-[10px]">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-start-4 col-span-4 pl-3.5">
            <LoadingButton
              variant="contained"
              sx={{
                textTransform: 'none',
                backgroundColor: '#0088CC!important',
                alignItems: 'center',
              }}
              onClick={handleUpdateButtonClick}
              loading={isLoading}
            >
              Update
            </LoadingButton>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyDetails;
