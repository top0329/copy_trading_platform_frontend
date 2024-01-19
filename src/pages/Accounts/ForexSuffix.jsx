import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { useParams } from 'react-router-dom';

import api from '../../utils/api';
import useToast from '../../hooks/useToast';

function ForexSuffix() {
  const { showToast } = useToast();
  const { id } = useParams();

  const [symbols, setSymbols] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function init() {
      const response = await api.get(`/account/${id}`);
      setSymbols(response.data.symbols);
    }
    init();
  }, []);

  const handleUpdateClicked = async () => {
    try {
      setIsLoading(true);
      // const response = await api.put(`/account/${id}`);
      // console.log('account data', response.data.symbols);
      // setSymbols(response.data.symbols);
      // showToast('User profile updated successfully!', 'success');
    } catch (err) {
      console.log(err);
      showToast(err.response.data.msg, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-[20px] rounded bg-[#282D36] text-white">
      <header className="p-[18px]">
        <h2 className="mt-[5px] text-[20px] font-normal">General</h2>
      </header>
      <div className="p-[15px] bg-[#2E353E] box-border text-[#ccc]">
        <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Forex suffix
          </label>
          <div className="flex w-1/2 px-[15px] justify-start items-center">
            <input
              id="inline-radio"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-[#0088cc] bg-gray-800 border-gray-800 rounded-full"
              checked
            />
            <label
              htmlFor="inline-radio"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 italic"
            >
              No suffix
            </label>
          </div>
        </div>
        <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
          <label className="inline-block relative max-w-full w-1/4 text-right pt-[7px] px-[15px] text-[#ccc] text-[13px]">
            Available Forex Symbols
          </label>
          <div className="w-1/2 px-[15px]">
            <label className="block w-full h-[350px] text-sm text-[#ccc] px-3 py-1.5 rounded overflow-y-auto">
              {symbols.length > 0 &&
                symbols.map((symbol, id) => <p key={id}>{symbol}</p>)}
            </label>
          </div>
        </div>
      </div>
      <footer className="px-[15px] py-[10px]">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-start-4 col-span-4 pl-3.5">
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

export default ForexSuffix;
