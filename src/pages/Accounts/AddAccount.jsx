import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../utils/api';

function AddAccount() {
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

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
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
        toast.error('Please fill in all the information!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.log('something error');
      } else {
        setIsLoading(true);
        const result = await api.post('/account/register-account', values);
        toast.success('Account created successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate('/accounts');
        console.log(result);
        setIsLoading(false);
      }
    } catch (err) {
      toast.error('Account creation failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div style={{ padding: '0px 200px' }}>
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
        <div
          className="mb-[20px] rounded bg-[#282D36]"
          style={{ color: 'white' }}
        >
          <header className="p-[18px]">
            <h2 className="mt-[5px] text-[20px] font-normal">Add Account</h2>
          </header>
          <div
            className="p-[15px] bg-[#2E353E]"
            style={{ boxSizing: 'border-box' }}
          >
            <div
              style={{
                borderBottom: '1px solid #242830',
                paddingBottom: '15px',
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'start',
              }}
            >
              <label
                className="text-[#ccc] text-[13px]"
                style={{
                  textAlign: 'right',
                  width: '25%',
                  paddingTop: '7px',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  display: 'inline-block',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                Login
              </label>
              <div
                style={{
                  width: '50%',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                }}
              >
                <input
                  name="login"
                  type="text"
                  required
                  className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '34px',
                    padding: '6px 12px',
                    fontSize: '14px',
                    borderRadius: '4px',
                  }}
                  onChange={handleInputChange}
                />
                {values.login == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Login required!
                  </p>
                )}
              </div>
            </div>
            <div
              style={{
                borderBottom: '1px solid #242830',
                paddingBottom: '15px',
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'start',
              }}
            >
              <label
                className="text-[#ccc] text-[13px]"
                style={{
                  textAlign: 'right',
                  width: '25%',
                  paddingTop: '7px',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  display: 'inline-block',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                Password
              </label>
              <div
                style={{
                  width: '50%',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                }}
              >
                <input
                  name="password"
                  type="password"
                  required
                  className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '34px',
                    padding: '6px 12px',
                    fontSize: '14px',
                    borderRadius: '4px',
                  }}
                  onChange={handleInputChange}
                />
                {values.password == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Password required!
                  </p>
                )}
              </div>
            </div>
            <div
              style={{
                borderBottom: '1px solid #242830',
                paddingBottom: '15px',
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'start',
              }}
            >
              <label
                className="text-[#ccc] text-[13px]"
                style={{
                  textAlign: 'right',
                  width: '25%',
                  paddingTop: '7px',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  display: 'inline-block',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                Name
              </label>
              <div
                style={{
                  width: '50%',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                }}
              >
                <input
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '34px',
                    padding: '6px 12px',
                    fontSize: '14px',
                    borderRadius: '4px',
                  }}
                  onChange={handleInputChange}
                />
                {values.name == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Name required!
                  </p>
                )}
              </div>
            </div>
            <div
              style={{
                borderBottom: '1px solid #242830',
                paddingBottom: '15px',
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'start',
              }}
            >
              <label
                className="text-[#ccc] text-[13px]"
                style={{
                  textAlign: 'right',
                  width: '25%',
                  paddingTop: '7px',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  display: 'inline-block',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                Server
              </label>
              <div
                style={{
                  width: '50%',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                }}
              >
                <input
                  name="server"
                  type="text"
                  required
                  className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '34px',
                    padding: '6px 12px',
                    fontSize: '14px',
                    borderRadius: '4px',
                  }}
                  onChange={handleInputChange}
                />
                {values.server == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Server required!
                  </p>
                )}
              </div>
            </div>
            <div
              style={{
                borderBottom: '1px solid #242830',
                paddingBottom: '15px',
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'start',
              }}
            >
              <label
                className="text-[#ccc] text-[13px]"
                style={{
                  textAlign: 'right',
                  width: '25%',
                  paddingTop: '7px',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  display: 'inline-block',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                Platform
              </label>
              <div
                style={{
                  width: '50%',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                }}
              >
                <select
                  name="platform"
                  required
                  className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '34px',
                    padding: '6px 12px',
                    fontSize: '14px',
                    borderRadius: '4px',
                  }}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected className="hidden">
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
            <div
              style={{
                borderBottom: '1px solid #242830',
                paddingBottom: '15px',
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'start',
              }}
            >
              <label
                className="text-[#ccc] text-[13px]"
                style={{
                  textAlign: 'right',
                  width: '25%',
                  paddingTop: '7px',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  display: 'inline-block',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                CopyFactoryRoles
              </label>
              <div
                style={{
                  width: '50%',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                }}
              >
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
                    <label
                      className="text-[#ccc] text-[13px]"
                      style={{
                        textAlign: 'right',
                        width: '25%',
                        paddingRight: '15px',
                        paddingLeft: '5px',
                        display: 'inline-block',
                        position: 'relative',
                        maxWidth: '100%',
                      }}
                    >
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
                    <label
                      className="text-[#ccc] text-[13px]"
                      style={{
                        textAlign: 'right',
                        width: '25%',
                        paddingRight: '15px',
                        paddingLeft: '5px',
                        display: 'inline-block',
                        position: 'relative',
                        maxWidth: '100%',
                      }}
                    >
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
                    backgroundColor: '#1565C0!important',
                  }}
                  onClick={handleCreateAccount}
                  loading={isLoading}
                >
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
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
