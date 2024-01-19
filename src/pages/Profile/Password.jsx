import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function Password() {
  const { showToast } = useToast();

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirm: '',
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

  const handleUpdateClicked = async () => {
    try {
      setUpdateButtonClicked(true);
      setIsLoading(true);
      if (
        values.oldPassword == '' ||
        values.newPassword == '' ||
        values.confirm == ''
      ) {
        showToast('Please fill in all the information!', 'error');
      } else if (values.newPassword !== values.confirm) {
        showToast('Confirm is not match!', 'error');
      } else if (values.newPassword.length < 6) {
        showToast('Your password must be at least 6 characters long!', 'error');
      } else {
        const res = await api.put('/users/update-password', values);
        showToast(res.data.msg, 'success');
      }
    } catch (err) {
      console.log(err);
      showToast(err.response.data.msg, 'error');
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="mb-[20px] rounded bg-[#282D36] text-white">
      <header className="p-[18px]">
        <h2 className="mt-[5px] text-[20px] font-normal">My Password</h2>
      </header>
      <div className="box-border p-[15px] bg-[#2E353E]">
        <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Old Password
          </label>
          <div className="w-1/2 px-[15px]">
            <input
              name="oldPassword"
              type="password"
              required
              className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
              onChange={handleInputChange}
            />
            {values.oldPassword == '' && updateButtonClicked && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                Old Password required!
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            New Password (Min 6 chars)
          </label>
          <div className="w-1/2 px-[15px]">
            <input
              name="newPassword"
              type="password"
              required
              className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
              onChange={handleInputChange}
            />
            {values.newPassword == '' && updateButtonClicked && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                New Password required!
              </p>
            )}
            {values.newPassword.length < 6 &&
              values.newPassword.length !== 0 &&
              updateButtonClicked && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                  Your password must be at least 6 characters long!
                </p>
              )}
          </div>
        </div>
        <div className="flex justify-start">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Confirm New Passowrd
          </label>
          <div className="w-1/2 px-[15px]">
            <input
              name="confirm"
              type="password"
              required
              className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
              onChange={handleInputChange}
            />
            {values.confirm == '' && updateButtonClicked && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                Confirm New Password required!
              </p>
            )}
            {values.confirm !== values.newPassword &&
              values.confirm.length !== 0 &&
              updateButtonClicked && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                  Confirm not match!
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
              onClick={handleUpdateClicked}
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

export default Password;
