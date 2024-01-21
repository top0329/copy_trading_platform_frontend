import * as React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';

import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function WhitelabelHomepage() {
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
    <div className="grid grid-cols-12 gap-6 mb-24">
      <div className="col-span-6">
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-4">
            <h2 className="mt-1 text-[20px] font-normal">Viewable Signals</h2>
          </header>
          <div className="box-border py-3 px-4 text-[15px] text-[#ccc] bg-[#2E353E]">
            No viewable signals have been setup.
          </div>
          <div className="px-4 py-2">
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
              Add Viewable
            </LoadingButton>
          </div>
        </div>
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-4">
            <h2 className="mt-1 text-[20px] font-normal">Site Settings</h2>
          </header>
          <div className="box-border py-3 px-4 bg-[#2E353E]">
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                User Registration
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
                Follower can edit entity id
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
                Max accounts per user
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="paypalEmail"
                  type="number"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  // onChange={handleInputChange}
                />
                {values.billingModel == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-2">
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
              Update
            </LoadingButton>
          </div>
        </div>
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-4">
            <h2 className="mt-1 text-[20px] font-normal">Business Details</h2>
          </header>
          <div className="box-border px-4 py-3 bg-[#2E353E]">
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Brand Name
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="paypalEmail"
                  type="number"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  // onChange={handleInputChange}
                />
                {values.emailAlert == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-start">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Company Name
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="paypalEmail"
                  type="number"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  // onChange={handleInputChange}
                />
                {values.tradeCopy == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-3">
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
              Update
            </LoadingButton>
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-4">
            <h2 className="mt-1 text-[20px] font-normal">
              Broker Affiliate Link
            </h2>
          </header>
          <div className="box-border py-3 px-4 bg-[#2E353E]">
            <div className="flex justify-start">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Broker url
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="paypalEmail"
                  type="url"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  // onChange={handleInputChange}
                />
                <p className="text-xs mt-2 text-[#999]">
                  Enter the complete url including http:// or https://
                </p>
                {values.billingModel == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-2">
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
              Update
            </LoadingButton>
          </div>
        </div>
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-4">
            <h2 className="mt-1 text-[20px] font-normal">
              Restrict Broker Selection
            </h2>
          </header>
          <div className="box-border py-3 px-4 bg-[#2E353E]">
            <div className="flex justify-start">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Restrict Broker choice?
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="paypalEmail"
                  type="number"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  // onChange={handleInputChange}
                />
                {values.billingModel == '' && createButtonClicked && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-500">
                    Signal Account required!
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-2">
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
              Update
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhitelabelHomepage;
