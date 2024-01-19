import * as React from 'react';

const AccountDetails = ({ data }) => {
  const _renderGrowth = (data) => {
    let deposit = 0.0;
    let profit = 0.0;
    data.forEach((item) => {
      if (item.type === 'DEAL_TYPE_BALANCE') {
        deposit = item.profit;
      } else profit += item.profit;
    });

    return ((profit + deposit) / deposit) * 100;
  };

  return (
    <div>
      <ul className="flex text-sm font-medium text-center  dark:text-gray-400">
        <li className="mr-[2px]">
          <a
            href="#"
            aria-current="page"
            className="inline-block px-[15px] py-[10px] text-white rounded-t border-t-[3px] box-border hover:border-white
              border-white bg-[#2E353E]"
          >
            Account Details
          </a>
        </li>
      </ul>
      <div className="bg-[#2E353E] px-[15px] py-[10px] rounded-b">
        <p className="text-[24px] mb-[10px] text-white">
          {Object.keys(data).length > 0 && data.name}
        </p>
        <p className="text-[12px] text-white">Growth</p>
        <p className="text-[#47A447] text-[18px] font-[700]">
          {Object.keys(data).length > 0 &&
            (isNaN(_renderGrowth(data.profit)) ? (
              <p>No Data</p>
            ) : (
              <React.Fragment>
                {_renderGrowth(data.profit)}<small>%</small>
              </React.Fragment>
            ))}{' '}
        </p>
        <p className="text-[12px] text-white mt-[5px]">Profit/Loss</p>
        <p className="text-white text-[18px] font-[700]">
          76,030.71 <small>USD</small>
        </p>
        <p className="text-[12px] text-white mt-[5px]">Balance</p>
        <p className="text-white text-[18px] font-[700]">
          {Object.keys(data).length > 0 && data.balance} <small>USD</small>
        </p>
        <p className="text-[12px] text-white mt-[5px]">Equity</p>
        <p className="text-white text-[18px] font-[700]">
          {Object.keys(data).length > 0 && data.equity} <small>USD</small>
        </p>
        <p className="text-[12px] text-white mt-[5px]">Equity Percentage</p>
        <p className="text-white text-[18px] font-[700]">
          {Object.keys(data).length > 0 &&
            ((data.equity / data.balance) * 100).toFixed(3)}{' '}
          <small>%</small>
        </p>

        <p className="mt-[35px] text-[#505461] text-[13px]">
          Updated:&nbsp;
          {Object.keys(data).length > 0 &&
            data.updatedAt.substr(0, 10) + ' ' + data.updatedAt.substr(11, 5)}
        </p>
      </div>
    </div>
  );
};

export default AccountDetails;
