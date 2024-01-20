import * as React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';

import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function FollowerTerms() {
  const { showToast } = useToast();
  const { strategyId } = useParams();

  const initialValues = {
    emailAlert: false,
    tradeCopy: false,
    billingModel: 0,
  };
  const [values, setValues] = React.useState(initialValues);
  const [createButtonClicked, setCreateButtonClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleCreateButtonClicked = async () => {
    try {
      setCreateButtonClicked(true);
      if (
        values.emailAlert == '' ||
        values.tradeCopy == '' ||
        values.billingModel == ''
      ) {
        showToast('Please fill in all the information!', 'error');
        console.log('something error');
      } else {
        setIsLoading(true);
        // const result = await api.post('/strategy/register-strategy', values);
        showToast('Terms added successfully!', 'success');
        // console.log(result);
        setIsLoading(false);
        navigate(`/signal-provider/edit/${strategyId}`);
      }
    } catch (err) {
      showToast('Terms addition failed!', 'error');
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="py-0 px-[200px]">
        <div className="pb-3">
          <Link
            to={`/signal-provider/edit/${strategyId}`}
            className="flex flex-row items-center font-extrabold"
          >
            <ReplyRoundedIcon
              fontSize="medium"
              sx={{ color: 'white', fontWeight: 'bold' }}
            />
            <h1 className="text-white text-lg pl-2"> Manage Signals</h1>
          </Link>
        </div>
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-[18px]">
            <h2 className="mt-[5px] text-[20px] font-normal">Follower Terms</h2>
          </header>
          <div className="box-border p-[15px] bg-[#2E353E]">
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Email Alerts
              </label>
              <div className="w-1/2 px-[15px]">
                <select
                  name="emailAlert"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#ccc] px-3 py-1.5 rounded"
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected className="hidden">
                    Select Account
                  </option>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                  {/* {accountData.length > 0 &&
                    accountData
                      .filter(
                        (account) =>
                          account.copyFactoryRoles.indexOf('PROVIDER') !== -1
                      )
                      .map((account) => (
                        <option
                          key={account.accountId}
                          value={account.accountId}
                        >{`${account.name}(${account.login})`}</option>
                      ))} */}
                </select>
                {values.emailAlert == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Trade Copy
              </label>
              <div className="w-1/2 px-[15px]">
                <select
                  name="tradeCopy"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#ccc] px-3 py-1.5 rounded"
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected className="hidden">
                    Select Account
                  </option>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                  {/* {accountData.length > 0 &&
                    accountData
                      .filter(
                        (account) =>
                          account.copyFactoryRoles.indexOf('PROVIDER') !== -1
                      )
                      .map((account) => (
                        <option
                          key={account.accountId}
                          value={account.accountId}
                        >{`${account.name}(${account.login})`}</option>
                      ))} */}
                </select>
                {values.tradeCopy == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Billing Model
              </label>
              <div className="w-1/2 px-[15px]">
                <select
                  name="billingModel"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#ccc] px-3 py-1.5 rounded"
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected className="hidden">
                    Select Account
                  </option>
                  <option value={0}>Free Access</option>
                  <option value={1}>Recurring Fee</option>
                  <option value={2}>Performance Billing</option>
                  {/* {accountData.length > 0 &&
                    accountData
                      .filter(
                        (account) =>
                          account.copyFactoryRoles.indexOf('PROVIDER') !== -1
                      )
                      .map((account) => (
                        <option
                          key={account.accountId}
                          value={account.accountId}
                        >{`${account.name}(${account.login})`}</option>
                      ))} */}
                </select>
                {values.billingModel == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="px-[15px] py-[10px]">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-start-4 col-span-4 pl-3.5">
                <LoadingButton
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#0088CC!important',
                  }}
                  onClick={handleCreateButtonClicked}
                  loading={isLoading}
                >
                  Create
                </LoadingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowerTerms;
