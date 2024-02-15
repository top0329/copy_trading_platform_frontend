import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';

import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../../utils/api';
import useToast from '../../../hooks/useToast';
import useUtils from '../../../hooks/useUtils';

// import utilsReducer from '../../store/reducers/utils';

function RiskSettings() {
  const { showToast } = useToast();

  const initialValues = {
    login: '',
    password: '',
    name: '',
    server: '',
    platform: '',
    copyFactoryRoles: [],
  };
  const [values, setValues] = React.useState(initialValues);
  const [isSubscriberChecked, setIsSubscriberChecked] = React.useState(false);
  const [isProviderChecked, setIsProviderChecked] = React.useState(false);
  const [createButtonClicked, setCreateButtonClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [brokers, setBrokers] = React.useState([]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // React.useEffect(() => {
  //   if (isSubscriberChecked) {
  //     if (values.copyFactoryRoles.includes('SUBSCRIBER') == false) {
  //       values.copyFactoryRoles.push('SUBSCRIBER');
  //     }
  //   } else {
  //     values.copyFactoryRoles = values.copyFactoryRoles.filter(
  //       (role) => role !== 'SUBSCRIBER'
  //     );
  //   }
  //   if (isProviderChecked) {
  //     if (values.copyFactoryRoles.includes('PROVIDER') == false) {
  //       values.copyFactoryRoles.push('PROVIDER');
  //     }
  //   } else {
  //     values.copyFactoryRoles = values.copyFactoryRoles.filter(
  //       (role) => role !== 'PROVIDER'
  //     );
  //   }
  // }, [isSubscriberChecked, isProviderChecked]);

  // const handleCreateAccount = async () => {
  //   try {
  //     setCreateButtonClicked(true);
  //     if (
  //       values.login == '' ||
  //       values.password == '' ||
  //       values.name == '' ||
  //       values.server == '' ||
  //       values.platform == '' ||
  //       values.copyFactoryRoles.length == 0
  //     ) {
  //       showToast('Please fill in all the information!', 'error');
  //     } else {
  //       setIsLoading(true);
  //       const result = await api.post('/account/register-account', values);

  //       if (result.data.AccountRegister) {
  //         dispatch({
  //           type: 'ADD_ID',
  //           payload: result.data.AccountRegister.id,
  //         });
  //       } else {
  //         throw new Error('null account Register');
  //       }

  //       showToast('Account created successfully!', 'success');

  //       setIsLoading(false);
  //       navigate('/accounts');
  //     }
  //   } catch (err) {
  //     showToast('Account creation failed!', 'error');
  //     console.log(err);
  //     setIsLoading(false);
  //   }
  // };

  // React.useEffect(() => {
  //   api
  //     .get('/settings/brokers')
  //     .then((res) => {
  //       if (res.data.status === 'OK') {
  //         setBrokers(res.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <div className="mb-[20px] rounded bg-[#282D36] text-white">
        <header className="p-[18px]">
          <h2 className="mt-[5px] text-[20px] font-normal">Risk Settings</h2>
        </header>
        <div className="p-[15px] bg-[#2E353E] box-border">
          <div className="border-b-[1px] border-[#242830] pb-[15px] mb-[15px] flex justify-start">
            <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
              Reverse Trades
            </label>
            <div className="w-1/2 px-[15px]">
              <select
                name="server"
                value={values.server}
                required
                className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                onChange={handleInputChange}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
              {/* {values.server == '' && createButtonClicked && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                  Server required!
                </p>
              )} */}
            </div>
          </div>
          <div className="flex justify-start mb-[15px] pb-[15px] border-b-[1px] border-[#242830]">
            <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
              Risk Type
            </label>
            <div className="w-1/2 px-[15px]">
              <select
                name="server"
                value={values.server}
                required
                className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                onChange={handleInputChange}
              >
                <option value={''}>Risk multiplier by balance</option>
                <option value={''}>Risk multiplier by equity</option>
                <option value={''}>Lot multiplier</option>
                <option value={''}>Fixed lot</option>
              </select>
              {/* {values.server == '' && createButtonClicked && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                  Server required!
                </p>
              )} */}
            </div>
          </div>
          <div className="flex justify-start pb-[15px] mb-[15px] border-b-[1px] border-[#242830]">
            <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
              Multiplier
            </label>
            <div className="w-1/2 px-[15px]">
              <input
                name="name"
                type="number"
                required
                className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                onChange={handleInputChange}
              />
              {/* {values.name == '' && createButtonClicked && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                  Name required!
                </p>
              )} */}
            </div>
          </div>
          <div className="flex justify-start pb-[15px] mb-[15px] border-b-[1px] border-[#242830]">
            <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
              Slippage
            </label>
            <div className="w-1/2 px-[15px]">
              <input
                name="name"
                type="number"
                required
                className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex justify-start pb-[15px] mb-[15px] border-b-[1px] border-[#242830]">
            <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
              Max Lot
            </label>
            <div className="w-1/2 px-[15px]">
              <input
                name="name"
                type="number"
                required
                className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex justify-start">
            <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
              Force Min Lot
            </label>
            <div className="w-1/2 px-[15px]">
              <select
                name="platform"
                value={values.platform}
                required
                className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                onChange={handleInputChange}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
              {/* {values.platform == '' && createButtonClicked && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                  Platform required!
                </p>
              )} */}
            </div>
          </div>
        </div>
        <footer className="px-[15px] py-[10px]">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-start-4 col-span-4 pl-3.5">
              <LoadingButton
                variant="contained"
                size="small"
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#0088CC!important',
                }}
                // onClick={handleCreateAccount}
                loading={isLoading}
              >
                Update
              </LoadingButton>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default RiskSettings;
