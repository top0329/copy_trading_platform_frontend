import * as React from 'react';
import OpenTradeTable from '../Tables/OpenTradeTable';
import CloseTradeTable from '../Tables/CloseTradeTable';

const TradesAnalysis = () => {
  const [tab, setTab] = React.useState(1);

  return (
    <div>
      <ul className="flex text-sm font-medium text-center  dark:text-gray-400">
        <li className="mr-[2px]">
          <a
            onClick={() => setTab(1)}
            href="#"
            aria-current="page"
            className={`inline-block px-[15px] py-[10px] text-white bg-[#282D36]  rounded-t border-t-[3px] box-border hover:border-white ${
              tab === 1 ? 'border-white bg-[#2E353E]' : 'border-[#282D36]'
            }`}
          >
            Open Trades
          </a>
        </li>
        <li className="mr-[2px]">
          <a
            onClick={() => setTab(2)}
            href="#"
            className={`inline-block px-[15px] py-[10px] text-white bg-[#282D36]  rounded-t border-t-[3px] box-border hover:border-white ${
              tab === 2 ? 'border-white bg-[#2E353E]' : 'border-[#282D36]'
            }`}
          >
            Close Trades
          </a>
        </li>
      </ul>
      <div className="bg-[#2E353E] p-[15px]">
        {tab === 1 && <OpenTradeTable />}
        {tab === 2 && <CloseTradeTable />}
      </div>
    </div>
  );
};

export default TradesAnalysis;
