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

function AddAccount() {
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

  // const [utils, dispatch] = useReducer(utilsReducer);

  // const { ids, setIds } = useUtils();
  const dispatch = useDispatch();
  const { ids } = useSelector((state) => state.utils);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  React.useEffect(() => {
    if (isSubscriberChecked) {
      if (values.copyFactoryRoles.includes('SUBSCRIBER') == false) {
        values.copyFactoryRoles.push('SUBSCRIBER');
      }
    } else {
      values.copyFactoryRoles = values.copyFactoryRoles.filter(
        (role) => role !== 'SUBSCRIBER'
      );
    }
    if (isProviderChecked) {
      if (values.copyFactoryRoles.includes('PROVIDER') == false) {
        values.copyFactoryRoles.push('PROVIDER');
      }
    } else {
      values.copyFactoryRoles = values.copyFactoryRoles.filter(
        (role) => role !== 'PROVIDER'
      );
    }
  }, [isSubscriberChecked, isProviderChecked]);

  const handleCreateAccount = async () => {
    try {
      setCreateButtonClicked(true);
      if (
        values.login == '' ||
        values.password == '' ||
        values.name == '' ||
        values.server == '' ||
        values.platform == '' ||
        values.copyFactoryRoles.length == 0
      ) {
        showToast('Please fill in all the information!', 'error');
      } else {
        setIsLoading(true);
        const result = await api.post('/account/register-account', values);

        if (result.data.AccountRegister) {
          dispatch({
            type: 'ADD_ID',
            payload: result.data.AccountRegister.id,
          });
        } else {
          throw new Error("null account Register");
        }

        showToast('Account created successfully!', 'success');

        setIsLoading(false);
        navigate('/accounts');
      }
    } catch (err) {
      showToast('Account creation failed!', 'error');
      console.log(err);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    api.get("/settings/brokers").then(res => {
      if (res.data.status === "OK") {
        setBrokers(res.data.data);
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <div className="py-0 px-[200px]">
        <div className="pb-3">
          <Link
            to={'/accounts'}
            className="flex flex-row items-center font-extrabold"
          >
            <ReplyRoundedIcon
              fontSize="medium"
              sx={{ color: 'white', fontWeight: 'bold' }}
            />
            <h1 className="text-white text-lg pl-2"> Accounts</h1>
          </Link>
        </div>
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-[18px]">
            <h2 className="mt-[5px] text-[20px] font-normal">Add Account</h2>
          </header>
          <div className="p-[15px] bg-[#2E353E] box-border">
            <div className="border-b-[1px] border-[#242830] pb-[15px] mb-[15px] flex justify-start">
              <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
                Login
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="login"
                  type="text"
                  required
                  className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded block w-full h-[34px] text-sm"
                  onChange={handleInputChange}
                />
                {values.login == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Login required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start mb-[15px] pb-[15px] border-b-[1px] border-[#242830]">
              <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
                Password
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="password"
                  type="password"
                  required
                  className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                  onChange={handleInputChange}
                />
                {values.password == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Password required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start pb-[15px] mb-[15px] border-b-[1px] border-[#242830]">
              <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
                Name
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                  onChange={handleInputChange}
                />
                {values.name == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Name required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start pb-[15px] mb-[15px] border-b-[1px] border-[#242830]">
              <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
                Server
              </label>
              <div className="w-1/2 px-[15px]">
                <select
                  name="server"
                  value={values.server}
                  required
                  className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                  onChange={handleInputChange}
                >
                  <option value="" disabled className="hidden">
                    Select Server
                  </option>
                  {
                    brokers.map(item => <option value={item.broker}>{item.broker}</option>)
                  }
                </select>
                {values.server == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Server required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start pb-[15px] mb-[15px] border-b-[1px] border-[#242830]">
              <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
                Platform
              </label>
              <div className="w-1/2 px-[15px]">
                <select
                  name="platform"
                  value={values.platform}
                  required
                  className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                  onChange={handleInputChange}
                >
                  <option value="" disabled className="hidden">
                    Select Platform
                  </option>
                  <option value={'mt4'}>MT4</option>
                  <option value={'mt5'}>MT5</option>
                </select>
                {values.platform == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Platform required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start">
              <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
                CopyFactoryRoles
              </label>
              <div className="w-1/2 px-[15px]">
                <div className="flex items-center gap-3 pt-[7px]">
                  <div className="flex items-center">
                    <input
                      name="subscriber"
                      type="checkbox"
                      required
                      className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-4"
                      onChange={() =>
                        setIsSubscriberChecked(!isSubscriberChecked)
                      }
                    />
                    <label className="inline-block text-right w-1/4 pr-[15px] pl-[5px] relative max-w-full text-[#ccc] text-[13px]">
                      Subscriber
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      name="provider"
                      type="checkbox"
                      required
                      className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-4"
                      onChange={() => setIsProviderChecked(!isProviderChecked)}
                    />
                    <label className="inline-block text-right w-1/4 pr-[15px] pl-[5px] relative max-w-full text-[#ccc] text-[13px]">
                      Provider
                    </label>
                  </div>
                </div>
                {!isProviderChecked &&
                  !isSubscriberChecked &&
                  createButtonClicked && (
                    <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                      CopyFactoryRoles required!
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
                  size="small"
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#0088CC!important',
                  }}
                  onClick={handleCreateAccount}
                  loading={isLoading}
                >
                  Create
                </LoadingButton>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
