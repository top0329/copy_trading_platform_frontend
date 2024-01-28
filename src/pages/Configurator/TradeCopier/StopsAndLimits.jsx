import * as React from 'react';
import { useParams } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';

import api from '../../../utils/api';
import useToast from '../../../hooks/useToast';

// import utilsReducer from '../../store/reducers/utils';

function StopsAndLimits() {
  const { showToast } = useToast();
  const { subscriberId, strategyId } = useParams();

  const initialValues = {
    name: '',
    copyStopLoss: false,
    copyTakeProfit: false,
  };
  const [values, setValues] = React.useState(initialValues);
  const [createButtonClicked, setCreateButtonClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function init() {
      try {
        const subscriberData = await api.get(`/subscriber/${subscriberId}`);
        setValues({
          name: subscriberData.data.name,
          copyStopLoss: subscriberData.data.copyStopLoss,
          copyTakeProfit: subscriberData.data.copyTakeProfit,
        });
      } catch (err) {
        console.log(err);
      }
    }
    init();
  }, []);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    }
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleUpdateButtonClicked = async () => {
    try {
      setIsLoading(true);
      const data = {
        ...values,
        subscriptions: [
          {
            strategyId: strategyId,
          },
        ],
      };
      console.log(data);
      const response = await api.put(
        `/subscriber/update-stops-limits/${subscriberId}`,
        data
      );
      showToast('Successfully updated!', 'success');
    } catch (err) {
      showToast('Update failed!', 'error');
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-[20px] rounded bg-[#282D36] text-white">
        <header className="p-[18px]">
          <h2 className="mt-[5px] text-[20px] font-normal">Stops & Limits</h2>
        </header>
        <div className="p-[15px] bg-[#2E353E] box-border">
          {/* <div className="border-b-[1px] border-[#242830] pb-[15px] mb-[15px] flex justify-start">
            <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
              Copy Pending Orders
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
            </div>
          </div> */}
          <div className="flex justify-start mb-[15px] pb-[15px] border-b-[1px] border-[#242830]">
            <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
              Copy Stop Loss
            </label>
            <div className="w-1/2 px-[15px]">
              <select
                name="copyStopLoss"
                value={values.copyStopLoss}
                required
                className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                onChange={handleInputChange}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>
          </div>
          <div className="flex justify-start">
            <label className="text-[#ccc] text-[13px] text-right w-1/4 pt-[7px] px-[15px] inline-block relative max-w-full">
              Copy Take Profit
            </label>
            <div className="w-1/2 px-[15px]">
              <select
                name="copyTakeProfit"
                value={values.copyTakeProfit}
                required
                className="block bg-[#282d36] text-[#fff] px-3 py-1.5 rounded w-full h-[34px] text-sm"
                onChange={handleInputChange}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
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
                onClick={handleUpdateButtonClicked}
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

export default StopsAndLimits;
