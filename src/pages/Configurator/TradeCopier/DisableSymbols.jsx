import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { useParams } from 'react-router-dom';

import api from '../../../utils/api';
import useToast from '../../../hooks/useToast';
import Symbols from '../../../constants/symbols.json';

function DisableSymbols() {
  const { showToast } = useToast();
  const { subscriberId, strategyId } = useParams();

  const [subscriberName, setSubscriberName] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [allSymbols, setAllSymbols] = React.useState(Symbols.symbols);
  const [symbols, setSymbols] = React.useState([]);

  const handleCheckChange = (key, checked) => {
    setAllSymbols(
      allSymbols.map((item) =>
        item.key === key ? { ...item, checked: checked } : item
      )
    );
  };

  const enableAll = () => {
    setAllSymbols(
      allSymbols.map((item) => ({
        key: item.key,
        checked: true,
      }))
    );
  };
  const disableAll = () => {
    setAllSymbols(
      allSymbols.map((item) => ({
        key: item.key,
        checked: false,
      }))
    );
  };

  const renderSymbols = () =>
    allSymbols.map(({ key, checked }) => (
      <div className="col-span-2" key={key}>
        <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => handleCheckChange(key, e.target.checked)}
          />
          <span className="text-[13px] text-center">{key}</span>
        </label>
      </div>
    ));

  React.useEffect(() => {
    async function init() {
      const accountData = await api.get(`/account/${subscriberId}`);
      const subscriberDatas = await api.get(`/subscriber/${subscriberId}`);
      const subscriberData = subscriberDatas.data.subscriptions.find(
        (data) => data.strategyId === strategyId
      );
      setSubscriberName(subscriberDatas.data.name);
      setSymbols(accountData.data.symbols);
      const included = subscriberData.symbolFilter.included;

      if (included.length === 0) {
        setAllSymbols(
          allSymbols.map((item) => ({ key: item, checked: false }))
        );
      } else if (included.length > 0) {
        setAllSymbols(
          allSymbols.map((item) =>
            included.includes(item)
              ? { key: item, checked: true }
              : { key: item, checked: false }
          )
        );
      }
    }
    init();
  }, []);

  const handleUpdateClicked = async () => {
    try {
      setIsLoading(true);
      let excluded = [],
        included = [];
      allSymbols.forEach(({ key, checked }) => {
        if (!checked) {
          excluded = [...excluded, key];
        } else if (checked) {
          included = [...included, key];
        }
      });
      let data;
      if (included.length === 0) {
        data = {
          name: subscriberName,
          strategyId: strategyId,
          symbolFilter: {
            included: [],
            excluded: allSymbols.map((symbol) => symbol.key),
          },
        };
      } else {
        data = {
          name: subscriberName,
          strategyId: strategyId,
          symbolFilter: { included: included, excluded: [] },
        };
      }
      const res = await api.put(
        `/subscriber/update-symbol-filter/${subscriberId}`,
        data
      );
      showToast(res.data.msg, 'success');
    } catch (err) {
      console.log(err);
      showToast(err.response.data.msg, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded bg-[#282D36] text-white sticky">
      <header className="p-[18px]">
        <div className="flex justify-between">
          <h2 className="mt-[5px] text-[20px] font-normal">Disable Symbols</h2>
          <div className="inline-flex rounded">
            <button
              onClick={enableAll}
              className="bg-[#0088cc] hover:bg-[#0099E6] rounded-l inline-flex items-center justify-center py-1.5 px-3 text-center text-sm font-medium text-white transition-all"
            >
              Enable all
            </button>
            <button
              onClick={disableAll}
              className="hover:bg-[#242830] rounded-r inline-flex items-center justify-center py-1.5 px-3 text-center text-sm font-medium transition-all"
            >
              Disable all
            </button>
          </div>
        </div>
        <strong className="text-[#ccc] text-[13px]">
          <span className="text-[#47a447]">
            {allSymbols.reduce(
              (count, item) => count + (item.checked ? 1 : 0),
              0
            )}
          </span>{' '}
          Enabled symbols
        </strong>{' '}
        |{' '}
        <strong className="text-[#ccc] text-[13px]">
          <span className="text-[#d2322d]">
            {allSymbols.reduce(
              (count, item) => count + (!item.checked ? 1 : 0),
              0
            )}
          </span>{' '}
          Disabled symbols
        </strong>
      </header>
      <div className="p-[18px] bg-[#2E353E]">
        <div className="flex justify-between">
          <h2 className="mt-[5px] text-[20px] font-normal">Forex symbols</h2>
          <div className="inline-flex rounded">
            <button
              onClick={enableAll}
              className="bg-[#0088cc] hover:bg-[#0099E6] rounded-l inline-flex items-center justify-center py-1.5 px-3 text-center text-sm font-medium text-white transition-all"
            >
              Enable
            </button>
            <button
              onClick={disableAll}
              className="bg-[#282D36] hover:bg-[#242830] rounded-r inline-flex items-center justify-center py-1.5 px-3 text-center text-sm font-medium transition-all"
            >
              Disable
            </button>
          </div>
        </div>
      </div>
      <div className="box-border px-[20px] bg-[#2E353E] h-[500px] overflow-y-scroll">
        <div className="flex justify-start p-[20px] mb-[10px]">
          <h2 className="text-[14px] font-normal pr-3">No suffix</h2>
          <div className="flex items-center justify-center rounded">
            <button
              onClick={enableAll}
              className="bg-[#0088cc] hover:bg-[#0099E6] rounded-l items-center justify-center py-[1px] px-[5px] text-center text-xs font-medium text-white transition-all"
            >
              Enable
            </button>
            <button
              onClick={disableAll}
              className="bg-[#282D36] hover:bg-[#242830] rounded-r items-center justify-center py-[1px] px-[5px] text-center text-xs font-medium transition-all"
            >
              Disable
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 pb-[15px]">{renderSymbols()}</div>
      </div>
      <footer className="px-[15px] py-[10px]">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-start-1 col-span-4 pl-3.5">
            <LoadingButton
              variant="contained"
              sx={{
                textTransform: 'none',
                backgroundColor: '#0088CC!important',
                alignItems: 'center',
              }}
              onClick={handleUpdateClicked}
              loading={isLoading}
            >
              Update
            </LoadingButton>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DisableSymbols;
