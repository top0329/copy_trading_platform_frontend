import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import Grid from '@mui/material/Grid';

import validator from 'validator';

import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../../utils/api';
import useToast from '../../../hooks/useToast';
import useUtils from '../../../hooks/useUtils';

// import utilsReducer from '../../store/reducers/utils';

function AddAccount() {
  const { showToast } = useToast();

  const initialValues = {
    fullName: '',
    password: '',
    email: ''
  };
  const [values, setValues] = React.useState(initialValues);
  const [isSubscriberChecked, setIsSubscriberChecked] = React.useState(false);
  const [isProviderChecked, setIsProviderChecked] = React.useState(false);
  const [createButtonClicked, setCreateButtonClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

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

  const handleCreateAccount = async () => {
    try {
      setCreateButtonClicked(true);
      if (
        values.fullName == '' ||
        values.password == '' ||
        values.email == ''
      ) {
        showToast('Please fill in all the information!', 'error');
      } else {
        setIsLoading(true);
        const result = await api.post('/users/register', values);
        
        if ( result.data.msg === "User created successfully" ) {
          showToast('Account created successfully!', 'success');
        }

        setIsLoading(false);
        navigate('/whitelabel/users');
      }
    } catch (err) {
      showToast('Account creation failed!', 'error');
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="py-0 px-[200px]">
        <div className="pb-3">
          <Grid container sx={{ cursor: 'pointer' }} onClick={() => navigate("/whitelabel/users")}>
            <ReplyRoundedIcon
              fontSize="medium"
              sx={{ color: 'white', fontWeight: 'bold' }}
            />
            <h1 className="text-white text-lg pl-2"> Whitelabel Users</h1>
          </Grid>
        </div>
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-[18px]">
            <h2 className="mt-[5px] text-[20px] font-normal">Manually add user</h2>
          </header>
          <div className="p-[15px] bg-[#2E353E] box-border">
            <div className="border-b-[1px] border-[#242830] pb-[15px] mb-[15px] flex justify-start">
              <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
                User Name
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="fullName"
                  type="text"
                  required
                  className="bg-[#282d36] text-[#fff] px-3 py-1.5 rounded block w-full h-[34px] text-sm"
                  onChange={handleInputChange}
                />
                {values.fullName == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    User Name required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start mb-[15px] pb-[15px] border-b-[1px] border-[#242830]">
              <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
                User Email
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="email"
                  type="text"
                  required
                  className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                  onChange={handleInputChange}
                />
                {
                  values.email == '' && createButtonClicked ?
                    <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                      User Email required!
                    </p> :
                  !validator.isEmail( values.email ) && createButtonClicked && 
                    <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                      Invalid Email Format!
                    </p>
                }
              </div>
            </div>
            <div className="flex justify-start mb-[15px]">
              <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
                User Password (min 6 chars)
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="password"
                  type="password"
                  required
                  minLength={2}
                  className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                  onChange={handleInputChange}
                />
                {
                  values.password == '' && createButtonClicked ?
                    <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                      User Password required!
                    </p> :
                  values.password.length < 6 && createButtonClicked &&  
                    <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                      User Password at least 6 characters!
                    </p>
                }
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
