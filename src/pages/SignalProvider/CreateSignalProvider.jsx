import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';

import api from '../../utils/api';
import useToast from '../../hooks/useToast';
import SignalProviderTermsModal from '../../components/modals/SignalProviderTermsModal';

function CreateSignalProvider() {
  const { showToast } = useToast();

  const initialValues = {
    providerID: '',
    StrategyName: '',
    strategyDescription: '',
  };
  const [values, setValues] = React.useState(initialValues);
  const [accountData, setAccountData] = React.useState([]);
  const [createSignalButtonClicked, setCreateSignalButtonClicked] =
    React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [signalProviderTermsModalShow, setSignalProviderTermsModalShow] =
    React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchData() {
      const response = await api.get('/account/all-accounts');
      setAccountData(response.data);
    }

    fetchData();
  }, []);

  const handleCreateSignalProviderButtonClicked = () => {
    try {
      setCreateSignalButtonClicked(true);
      if (
        values.providerID == '' ||
        values.StrategyName == '' ||
        values.strategyDescription == ''
      ) {
        showToast('Please fill in all the information!', 'error');
        console.log('something error');
      } else {
        setSignalProviderTermsModalShow(true);
      }
    } catch (err) {
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

  const handleCreateSignalProviderModalButtonClicked = async () => {
    try {
      setIsLoading(true);
      const result = await api.post('/strategy/register-strategy', values);
      showToast('Strategy registered successfully!', 'success');
      console.log(result);
      setIsLoading(false);
      navigate('/signal-provider');
    } catch (err) {
      showToast('Strategy registration failed!', 'error');
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {signalProviderTermsModalShow && (
        <SignalProviderTermsModal
          signalProviderTermsModalShow={setSignalProviderTermsModalShow}
          handleCreateSignalProviderModalButtonClicked={
            handleCreateSignalProviderModalButtonClicked
          }
          isLoading={isLoading}
        />
      )}
      <div className="py-0 px-[200px]">
        <div className="pb-3">
          <Link
            to={'/signal-provider'}
            className="flex flex-row items-center font-extrabold"
          >
            <ReplyRoundedIcon
              fontSize="medium"
              sx={{ color: 'white', fontWeight: 'bold' }}
            />
            <h1 className="text-white text-lg pl-2"> Signal Provider</h1>
          </Link>
        </div>
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-[18px]">
            <h2 className="mt-[5px] text-[20px] font-normal">Create Signal</h2>
          </header>
          <div className="box-border p-[15px] bg-[#2E353E]">
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Signal Account
              </label>
              <div className="w-1/2 px-[15px]">
                <select
                  name="providerID"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected className="hidden">
                    Select Account
                  </option>
                  {accountData.length > 0 &&
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
                      ))}
                </select>
                {values.providerID == '' && createSignalButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative max-w-full text-right w-1/4 pt-[7px] px-[15px] text-[#ccc] text-[13px]">
                Strategy Name
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="StrategyName"
                  type="text"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  onChange={handleInputChange}
                />
                {values.StrategyName == '' && createSignalButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Strategy Name required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Strategy Description
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="strategyDescription"
                  type="text"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  onChange={handleInputChange}
                />
                {values.strategyDescription == '' &&
                  createSignalButtonClicked && (
                    <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                      Strategy Description required!
                    </p>
                  )}
              </div>
            </div>
          </div>
          <div className="px-[15px] py-[10px]">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-start-4 col-span-4 pl-3.5">
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#0088CC!important',
                  }}
                  onClick={handleCreateSignalProviderButtonClicked}
                >
                  Create signal page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSignalProvider;
