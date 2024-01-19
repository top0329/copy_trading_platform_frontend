import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate, useParams } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function AccountProfile() {
  const { user } = useAuth();
  const { showToast } = useToast();

  const navigate = useNavigate();
  const { id } = useParams();

  const initialValues = {
    accountName: '',
    mySuffix: '',
    accountLogin: '',
    broker: '',
    type: '',
    server: ''
  };
  const [values, setValues] = React.useState(initialValues);
  const [updateButtonClicked, setUpdateButtonClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function init() {
      const response = await api.get(`/account/${id}`);
      const { name, login, broker, type, server } = response.data;
      setValues({ accountName: name, accountLogin: login, broker: broker, type: type, server: server });
      // console.log(response.data);
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
      setUpdateButtonClicked(true);
      if (values.accountName == '') {
        showToast('Please fill in the Descriptive Name field!', 'error');
      } else {
        setIsLoading(true);
        const response = await api.put(`/account/update-account-name/${id}`, { accountName: values.accountName, server: values.server });
        // console.log('account name updated', response.data);
        showToast('User profile updated successfully!', 'success');
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
            Descriptive Name
          </label>
          <div className="w-1/2 px-[15px]">
            <input
              name="accountName"
              type="text"
              required
              className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
              onChange={handleInputChange}
              value={values.accountName}
            />
          </div>
        </div>
        <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            My Suffix
          </label>
          <div className="w-1/2 px-[15px]">
            <label className="block w-full h-[34px] text-sm text-[#ccc] px-3 py-1.5 rounded">
              {values.email}
            </label>
          </div>
        </div>
        <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Account
          </label>
          <div className="w-1/2 px-[15px]">
            <label className="block w-full h-[34px] text-sm text-[#ccc] px-3 py-1.5 rounded">
              {values.accountLogin}
            </label>
          </div>
        </div>
        <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Broker
          </label>
          <div className="w-1/2 px-[15px]">
            <label className="block w-full h-[34px] text-sm text-[#ccc] px-3 py-1.5 rounded">
              {values.broker}
            </label>
          </div>
        </div>
        <div className="flex justify-start">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Type
          </label>
          <div className="w-1/2 px-[15px]">
            <label className="block w-full h-[34px] text-sm text-[#ccc] px-3 py-1.5 rounded">
              {values.type === 'ACCOUNT_TRADE_MODE_DEMO' ? 'Demo' : 'Real'}
            </label>
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

export default AccountProfile;
