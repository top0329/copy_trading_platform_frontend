import React from 'react';
import Button from '@mui/material/Button';

function Analysis() {
  return (
    <div className="w-auto text-[#ccc] grid grid-cols-12 gap-8">
      <div className="col-span-6">
        <section className="mb-[20px] rounded bg-[#282D36]">
          <header className="p-[18px]">
            <h2 className="mt-[5px] text-[20px] font-normal">
              Account Statistics
            </h2>
          </header>
          <div className="p-[15px] bg-[#2E353E]">
            <label className="text-[#ccc] max-w-full inline-block mb-[5px] text-[13px]">
              Choose account
            </label>
            <button className="w-full overflow-hidden bg-[#242830] text-[#ccc] px-3 py-1.5 rounded">
              TradersNetworkClub (254738)
              <b className="inline-block align-middle border-t-[4px] border-dashed border-r-[4px] border-l-[4px]"></b>
            </button>
          </div>
          <footer className="px-[15px] py-[10px]">
            <div className="flex justify-end">
              <Button
                variant="contained"
                size="small"
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#0088CC!important',
                }}
              >
                Analyse Account
              </Button>
            </div>
          </footer>
        </section>
        <section className="mb-[20px] rounded bg-[#282D36]">
          <header className="p-[18px]">
            <h2 className="mt-[5px] text-[20px] font-normal">
              Account Statistics
            </h2>
          </header>
          <div className="p-[15px] bg-[#2E353E]">
            <label className="text-[#ccc] max-w-full inline-block mb-[5px] text-[13px]">
              Choose account
            </label>
            <button className="w-full overflow-hidden bg-[#242830] text-[#ccc] px-3 py-1.5 rounded">
              TradersNetworkClub (254738)
              <b className="inline-block align-middle border-t-[4px] border-dashed border-r-[4px] border-l-[4px]"></b>
            </button>
          </div>
          <footer className="px-[15px] py-[10px]">
            <div className="flex justify-end">
              <Button
                variant="contained"
                size="small"
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#0088CC!important',
                }}
              >
                Analyse Account
              </Button>
            </div>
          </footer>
        </section>
      </div>
      <div className="col-span-6">
        <section className="mb-[20px] rounded bg-[#282D36]">
          <header className="p-[18px]">
            <h2 className="mt-[5px] text-[20px] font-normal">
              Account Statistics
            </h2>
          </header>
          <div className="p-[15px] bg-[#2E353E]">
            <label className="text-[#ccc] max-w-full inline-block mb-[5px] text-[13px]">
              Choose account
            </label>
            <button className="w-full overflow-hidden bg-[#242830] text-[#ccc] px-3 py-1.5 rounded">
              TradersNetworkClub (254738)
              <b className="inline-block align-middle border-t-[4px] border-dashed border-r-[4px] border-l-[4px]"></b>
            </button>
          </div>
          <footer className="px-[15px] py-[10px]">
            <div className="flex justify-end">
              <Button
                variant="contained"
                size="small"
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#0088CC!important',
                }}
              >
                Analyse Account
              </Button>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default Analysis;
