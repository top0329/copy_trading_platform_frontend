import * as React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';

import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function ConfigurePaymentProcessor() {
  const { showToast } = useToast();
  const { strategyId } = useParams();

  const initialValues = {
    paypalEmail: false,
  };
  const [values, setValues] = React.useState(initialValues);
  const [configureButtonClicked, setConfigureButtonClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleConfigureButtonClicked = async () => {
    try {
      setConfigureButtonClicked(true);
      if (
        values.paypalEmail == ''
      ) {
        showToast('Please fill in all the information!', 'error');
        console.log('something error');
      } else {
        setIsLoading(true);
        // const result = await api.post('/strategy/register-strategy', values);
        showToast('Payment processor configured successfully!', 'success');
        // console.log(result);
        setIsLoading(false);
        navigate(`/signal-provider/`);
      }
    } catch (err) {
      showToast('Payment configuration failed!', 'error');
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
            to='/signal-provider'
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
            <h2 className="mt-[5px] text-[20px] font-normal">Follower Terms</h2>
          </header>
          <div className="box-border p-[15px] bg-[#2E353E]">
            <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Select Processor
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
                    className="ms-2 text-sm font-medium text-[#ccc] dark:text-gray-300"
                  >
                    Paypal
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
                    className="ms-2 text-sm font-medium text-[#ccc] dark:text-gray-300"
                  >
                    Stripe
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-start">
              <label className="inline-block relative text-right w-1/4 pt-[7px] px-[15px] max-w-full text-[#ccc] text-[13px]">
                Paypal Email
              </label>
              <div className="w-1/2 px-[15px]">
                <input
                  name="paypalEmail"
                  type="email"
                  required
                  className="block w-full h-[34px] text-sm bg-[#282d36] text-[#fff] px-3 py-1.5 rounded"
                  onChange={handleInputChange}
                />
                {values.paypalEmail == '' &&
                  configureButtonClicked && (
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
                <LoadingButton
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#0088CC!important',
                  }}
                  onClick={handleConfigureButtonClicked}
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

export default ConfigurePaymentProcessor;
