import React from 'react'

function KnowledgeBase() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 px-[15px]">
        <section className="mb-[20px] rounded bg-[#282D36]">
          <header className="p-[18px] text-white">
            <h2 className="mt-[5px] text-[20px] font-normal">Knowledge base</h2>
          </header>
          <div className="p-[15px] bg-[#2E353E]">
            <button className="w-full overflow-hidden bg-[#242830] text-[#ccc] px-3 py-1.5 rounded">
              Dashboard
              <b className="inline-block align-middle border-t-[4px] border-dashed border-r-[4px] border-l-[4px]"></b>
            </button>
          </div>
        </section>
      </div>
      <div className="col-span-9 px-[15px]">
        <section className="mb-[20px] rounded bg-[#282D36]">
          <header className="p-[18px] text-white">
            <h2 className="mt-[5px] text-[20px] font-normal">Dashboard</h2>
          </header>
          <div className="p-[15px] bg-[#2E353E] mt-[10px] mb-[5px] text-[#ccc]">
            <div className="w-full overflow-hidden bg-[#0088cc] text-[#ccc] px-3 py-2.5 rounded flex justify-between">
              <button className="">- Overview</button>
              <b className="inline-block align-middle border-t-[4px] border-dashed border-r-[4px] border-l-[4px]"></b>
            </div>
            <p className="py-2.5 text-[13px]">
              From the dashboard, you can see a real-time view of the accounts
              you have on the system. You can view your accounts activity in 3
              ways; accounts, open trades or history. Use the 3 buttons in the
              top left corner to change the view.
            </p>
            <p className="py-2.5 text-[13px]">
              You can filter the view by an individual account or copier group.
              To filter the view, click the filter icon top right corner and
              select the relevant filter.
            </p>
            <p className="py-2.5 text-[13px]"></p>
            <p className="py-2.5 text-[13px]">
              You can enable / disable the columns of each tab by pressing the{' '}
              <strong>Columns</strong> button in the top right corner.
            </p>
            <p className="py-2.5 text-[13px]"></p>
            <p className="py-2.5 text-[13px]">
              The dashboard refreshes every 30 seconds.
            </p>
            <h4 className="my-2.5 text-[18px]">Accounts</h4>
            <p className="py-2.5 text-[13px]">
              An overview of the account details and current state. You can show
              or hide extra columns depending on your preference and screen
              resolution.
            </p>
            <p className="py-2.5 text-[13px]">
              To see a more detailed breakdown of the account, click on the
              chart icon for the relevant account.
            </p>
            <h4 className="my-2.5 text-[18px]">Trades</h4>
            <p className="py-2.5 text-[13px]">
              A list of open trades for each account including key information
              about the trade, for example, open time, lot size, symbol and
              profitability
            </p>
            <h4 className="my-2.5 text-[18px]">Trades</h4>
            <p className="py-2.5 text-[13px]">
              A list of recently closed trades for each account. The history
              view is for 2 weeks only. A full history can be found on the
              account profile page.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default KnowledgeBase