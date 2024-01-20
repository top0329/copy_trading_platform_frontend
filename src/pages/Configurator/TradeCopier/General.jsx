import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import validator from 'validator';
import { useNavigate, useParams } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
import api from '../../../utils/api';
import useToast from '../../../hooks/useToast';

function General() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { subscriberId, strategyId } = useParams();

  const navigate = useNavigate();

  const initialValues = {
    copyFrom: '',
    sendTo: '',
  };
  const [values, setValues] = React.useState(initialValues);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function init() {
      const accountData = await api.get(`/account/${subscriberId}`);
      const strategyData = await api.get(`/strategy/${strategyId}`);
      setValues({
        copyFrom: `${accountData.data.name}(${accountData.data.login})`,
        sendTo: `${strategyData.data.name}(${strategyData.data.strategyId})`,
      });
    }

    init();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleUpdateButtonClick = async () => {
    try {
      if (values.email == '' || values.fullName == '') {
        showToast('Please fill in all the information!', 'error');
      } else {
        if (!localStorage.getItem('updateEmail')) {
          localStorage.setItem('updateEmail', values.email);
        } else {
          localStorage.removeItem('updateEmail');
          localStorage.setItem('updateEmail', values.email);
        }
        setIsLoading(true);
        // const result = await api.put('/users/me', values);
        // setValues({ email: result.data.email, fullName: result.data.fullName });
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
        <h2 className="mt-[5px] text-[20px] font-normal">General</h2>
      </header>
      <div className="p-[15px] bg-[#2E353E] box-border">
        <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Copy From
          </label>
          <div className="w-1/2 px-[15px]">
            <label className="block w-full h-[34px] text-sm text-[#ccc] px-3 py-1.5 rounded">
              {values.copyFrom}
            </label>
          </div>
        </div>
        <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Send To
          </label>
          <div className="w-1/2 px-[15px]">
            <label className="block w-full h-[34px] text-sm text-[#ccc] px-3 py-1.5 rounded">
              {values.sendTo}
            </label>
          </div>
        </div>
        <div className="flex justify-start">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Copier Mode
          </label>
          <div className="flex flex-col w-1/2 px-[15px] gap-2">
            <div className="flex items-center">
              <input
                id="inline-radio"
                type="radio"
                value="on"
                name="inline-radio-group"
                className="w-4 h-4 text-[#0088cc] bg-gray-800 border-gray-800 rounded-full"
                checked
              />
              <label
                htmlFor="inline-radio"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                ON
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="inline-radio"
                type="radio"
                value="monitor"
                name="inline-radio-group"
                className="w-4 h-4 text-[#0088cc] bg-gray-800 border-gray-800 rounded-full"
              />
              <label
                htmlFor="inline-radio"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Monitor existing trades only
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="inline-radio"
                type="radio"
                value="off"
                name="inline-radio-group"
                className="w-4 h-4 text-[#0088cc] bg-gray-800 border-gray-800 rounded-full"
              />
              <label
                htmlFor="inline-radio"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                OFF
              </label>
            </div>
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

export default General;
