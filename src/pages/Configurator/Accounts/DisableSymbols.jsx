import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

import api from '../../../utils/api';
import useToast from '../../../hooks/useToast';

function DisableSymbols() {
  const { showToast } = useToast();

  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirm: '',
  };
  const [values, setValues] = React.useState(initialValues);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleUpdateClicked = async () => {
    try {
      // setUpdateButtonClicked(true);
      // setIsLoading(true);
      // if (
      //   values.oldPassword == '' ||
      //   values.newPassword == '' ||
      //   values.confirm == ''
      // ) {
      //   showToast('Please fill in all the information!', 'error');
      // } else if (values.newPassword !== values.confirm) {
      //   showToast('Confirm is not match!', 'error');
      // } else if (values.newPassword.length < 6) {
      //   showToast('Your password must be at least 6 characters long!', 'error');
      // } else {
      //   const res = await api.put('/users/update-password', values);
      //   showToast(res.data.msg, 'success');
      // }
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
        <div className="flex justify-between">
          <h2 className="mt-[5px] text-[20px] font-normal">Disable Symbols</h2>
          <div className="inline-flex rounded">
            <button className="bg-[#0088cc] hover:bg-[#0099E6] rounded-l inline-flex items-center justify-center py-1.5 px-3 text-center text-sm font-medium text-white transition-all">
              Enable all
            </button>
            <button className="hover:bg-[#242830] rounded-r inline-flex items-center justify-center py-1.5 px-3 text-center text-sm font-medium transition-all">
              Disable all
            </button>
          </div>
        </div>
        <strong className="text-[#ccc] text-[13px]">
          <span className="text-[#47a447]"> 69 </span> Enabled symbols
        </strong>{' '}
        |{' '}
        <strong className="text-[#ccc] text-[13px]">
          <span className="text-[#d2322d]"> 0 </span> Disabled symbols
        </strong>
      </header>
      <div className="p-[18px] bg-[#2E353E]">
        <div className="flex justify-between">
          <h2 className="mt-[5px] text-[20px] font-normal">Forex symbols</h2>
          <div className="inline-flex rounded">
            <button className="bg-[#0088cc] hover:bg-[#0099E6] rounded-l inline-flex items-center justify-center py-1.5 px-3 text-center text-sm font-medium text-white transition-all">
              Enable
            </button>
            <button className="bg-[#282D36] hover:bg-[#242830] rounded-r inline-flex items-center justify-center py-1.5 px-3 text-center text-sm font-medium transition-all">
              Disable
            </button>
          </div>
        </div>
      </div>
      <div className="box-border px-[20px] bg-[#2E353E]">
        <div className="flex justify-start border-b-[1px] border-[#242830] pb-[15px] mb-[15px]">
          <h2 className="text-[20px] font-normal pr-3">No suffix</h2>
          <div className="flex items-center justify-center rounded">
            <button className="bg-[#0088cc] hover:bg-[#0099E6] rounded-l items-center justify-center py-[1px] px-[5px] text-center text-xs font-medium text-white transition-all">
              Enable
            </button>
            <button className="bg-[#282D36] hover:bg-[#242830] rounded-r items-center justify-center py-[1px] px-[5px] text-center text-xs font-medium transition-all">
              Disable
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 pb-[15px]">
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
          <div className="col-span-2">
            <label className="flex flex-col gap-2 justify-center items-center mb-[25px]">
              <input type="checkbox" />
              <span className="text-[13px]">AUDCAD</span>
            </label>
          </div>
        </div>
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
