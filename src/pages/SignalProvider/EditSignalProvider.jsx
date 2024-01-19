import * as React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import { Icon } from '@iconify/react';
import copy from 'copy-to-clipboard';

import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function EditSignalProvider() {
  const { showToast } = useToast();
  const { strategyId } = useParams();

  const initialValues = {
    openTrades: false,
    tradeHistory: false,
    balanceInformation: false,
    broker: false,
    accountDetails: false,
    ticket: false,
    isLive: false,
    url: 'https://my.socialtradertools.com/view/818fja902i',
  };
  const [values, setValues] = React.useState(initialValues);
  const [accountData, setAccountData] = React.useState([]);
  const [createSignalButtonClicked, setCreateSignalButtonClicked] =
    React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [signalProviderTermsModalShow, setSignalProviderTermsModalShow] =
    React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setValues({
      ...values,
      [name]: checked,
    });
    console.log(values);
  };

  const handleCopyButtonClicked = () => {
    try {
      setIsCopied(true);
      copy(values.url);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.log("failed to copy", err);
    }
  }

  const handleLiveButtonClicked = async () => {
    try {
      setIsLoading(true);
      setValues({ isLive: !values.isLive });
      showToast(`Successfully ${!values.isLive ? 'Lived' : 'Not Lived'}!`, 'success')
    } catch (err) {
      console.log(err);
      showToast(`Failed to change Live state!`, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateSignalProviderButtonClicked = async () => {
    try {
      setIsLoading(true);
      // const result = await api.post('/strategy/register-strategy', values);
      showToast('Strategy registered successfully!', 'success');
      // console.log(result);
      setIsLoading(false);
      navigate('/signal-provider');
    } catch (err) {
      showToast('Strategy registration failed!', 'error');
      console.log(err);
    }
  };

  return (
    <div>
      <div className="py-0 px-[100px] pb-[50px]">
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
            <h2 className="mt-[5px] text-[20px] font-normal">Signal Page</h2>
          </header>
          <div className="flex justify-between box-border p-[15px] bg-[#2E353E] rounded-b text-[#ccc]">
            <div className="mb-3">
              <label className="font-bold">URL</label>
              <div className="flex gap-3">
                <p>{values.url}</p>
                <button
                  className={`${
                    isCopied ? 'bg-[#00cc2c] text-[#333]' : 'bg-[#0088cc]'
                  } text-sm px-[2px] transition`}
                  onClick={handleCopyButtonClicked}
                >
                  {isCopied ? 'Copied' : 'Copy URL'}
                </button>
              </div>
            </div>
            <div>
              <LoadingButton
                variant="contained"
                size="small"
                sx={{
                  textTransform: 'none',
                  backgroundColor: `${
                    values.isLive ? '#0088cc!important' : '#d2322d!important'
                  }`,
                }}
                onClick={handleLiveButtonClicked}
                loading={isLoading}
              >
                {values.isLive ? 'Live' : 'Not Live'}
              </LoadingButton>
            </div>
          </div>
        </div>
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-[18px] text-white flex justify-between items-center bg-[#282D36] rounded-t">
            <h2 className="mt-[5px] text-[20px] font-normal">Follower Terms</h2>
            <Link
              to={`/signal-provider/follower-terms/${strategyId}`}
              className="bg-[#0099e6] h-[33px] rounded text-sm px-2 items-center flex"
            >
              <Icon
                icon="typcn:plus"
                width="16"
                height="16"
                style={{ display: 'inline-block' }}
              />{' '}
              Add Term
            </Link>
          </header>
          <div className="box-border p-[15px] bg-[#2E353E] rounded-b">
            <table className="w-full text-sm text-left text-[#ccc]">
              <thead className="text-xs border border-[#282D36]">
                <tr>
                  <th className="px-4 py-2 border-r border-[#282D36]">
                    Email Alert
                  </th>
                  <th className="px-6 py-2 border-r border-[#282D36]">
                    Trade Copier
                  </th>
                  <th className="px-6 py-2 border-r border-[#282D36]">
                    Access Terms
                  </th>
                  <th className="px-6 py-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-[#282D36]">
                  <td className="px-4 py-2">No terms created.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-[20px] rounded bg-[#282D36] text-white">
          <header className="p-[18px]">
            <h2 className="mt-[5px] text-[20px] font-normal">
              Hide information
            </h2>
          </header>
          <div className="box-border p-[15px] bg-[#2E353E]">
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Open trades
              </label>
              <div className="w-1/2 px-[15px]">
                <label className="flex flex-col cursor-pointer select-none items-start gap-2">
                  <div className="relative">
                    <input
                      name="openTrades"
                      type="checkbox"
                      checked={values.openTrades}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        values.openTrades ? 'bg-[#0088cc]' : 'bg-[#ccc]'
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                        values.openTrades ? 'translate-x-full' : ''
                      }`}
                    ></div>
                  </div>
                  <p className="relative text-[#888] text-sm ">
                    All open trades on the account
                  </p>
                </label>
              </div>
            </div>
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Trade history
              </label>
              <div className="w-1/2 px-[15px]">
                <label className="flex flex-col cursor-pointer select-none items-start gap-2">
                  <div className="relative">
                    <input
                      name="tradeHistory"
                      type="checkbox"
                      checked={values.tradeHistory}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        values.tradeHistory ? 'bg-[#0088cc]' : 'bg-[#ccc]'
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                        values.tradeHistory ? 'translate-x-full' : ''
                      }`}
                    ></div>
                  </div>
                  <p className="relative text-[#888] text-sm ">
                    All closed trades for the account
                  </p>
                </label>
              </div>
            </div>
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Balance information
              </label>
              <div className="w-1/2 px-[15px]">
                <label className="flex flex-col cursor-pointer select-none items-start gap-2">
                  <div className="relative">
                    <input
                      name="balanceInformation"
                      type="checkbox"
                      checked={values.balanceInformation}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        values.balanceInformation ? 'bg-[#0088cc]' : 'bg-[#ccc]'
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                        values.balanceInformation ? 'translate-x-full' : ''
                      }`}
                    ></div>
                  </div>
                  <p className="relative text-[#888] text-sm ">
                    Monetary values including balance, equity and profit
                  </p>
                </label>
              </div>
            </div>
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Broker
              </label>
              <div className="w-1/2 px-[15px]">
                <label className="flex flex-col cursor-pointer select-none items-start gap-2">
                  <div className="relative">
                    <input
                      name="broker"
                      type="checkbox"
                      checked={values.broker}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        values.broker ? 'bg-[#0088cc]' : 'bg-[#ccc]'
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                        values.broker ? 'translate-x-full' : ''
                      }`}
                    ></div>
                  </div>
                  <p className="relative text-[#888] text-sm ">
                    The broker name and server
                  </p>
                </label>
              </div>
            </div>
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Account details
              </label>
              <div className="w-1/2 px-[15px]">
                <label className="flex flex-col cursor-pointer select-none items-start gap-2">
                  <div className="relative">
                    <input
                      name="accountDetails"
                      type="checkbox"
                      checked={values.accountDetails}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        values.accountDetails ? 'bg-[#0088cc]' : 'bg-[#ccc]'
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                        values.accountDetails ? 'translate-x-full' : ''
                      }`}
                    ></div>
                  </div>
                  <p className="relative text-[#888] text-sm ">
                    Account type and leverage
                  </p>
                </label>
              </div>
            </div>
            <div className="flex justify-start">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Ticket
              </label>
              <div className="w-1/2 px-[15px]">
                <label className="flex flex-col cursor-pointer select-none items-start gap-2">
                  <div className="relative">
                    <input
                      name="ticket"
                      type="checkbox"
                      checked={values.ticket}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        values.ticket ? 'bg-[#0088cc]' : 'bg-[#ccc]'
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                        values.ticket ? 'translate-x-full' : ''
                      }`}
                    ></div>
                  </div>
                  <p className="relative text-[#888] text-sm ">
                    Open and history ticket numbers
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="px-[15px] py-[15px]">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-start-4 col-span-4 pl-3.5">
                <LoadingButton
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#0088CC!important',
                  }}
                  onClick={handleCreateSignalProviderButtonClicked}
                  loading={isLoading}
                >
                  Update
                </LoadingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditSignalProvider;
