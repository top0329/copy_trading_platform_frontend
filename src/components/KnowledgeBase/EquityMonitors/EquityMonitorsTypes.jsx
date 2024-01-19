import * as React from 'react';
import { Icon } from '@iconify/react';

function EquityMonitorsTypes() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        There are 4 types of equity monitors;
      </p>
      <ul className="mb-0 pl-[8px] text-[13px]">
        <li className="flex flex-row justify-start items-center gap-1">
          <Icon
            icon="icon-park-outline:dot"
            width="12"
            height="12"
            className="inline-block"
          />
          <p>
            <strong>Target Value</strong>
          </p>
        </li>
        <li className="flex flex-row justify-start items-center gap-1">
          <Icon
            icon="icon-park-outline:dot"
            width="12"
            height="12"
            className="inline-block"
          />
          <p>
            <strong>Target Percentage</strong>
          </p>
        </li>
        <li className="flex flex-row justify-start items-center gap-1">
          <Icon
            icon="icon-park-outline:dot"
            width="12"
            height="12"
            className="inline-block"
          />
          <p>
            <strong>Protect Value</strong>
          </p>
        </li>
        <li className="flex flex-row justify-start items-center gap-1">
          <Icon
            icon="icon-park-outline:dot"
            width="12"
            height="12"
            className="inline-block"
          />
          <p>
            <strong>Protect Percentage</strong>
          </p>
        </li>
      </ul>
      <h4 className="my-2.5 text-[18px] text-white">Target Value</h4>
      <p className="py-2.5 text-[13px]">
        Equity monitor will be triggered once this equity value is met, used
        when you want to trigger <strong>ABOVE</strong> your current equity.
      </p>
      <p className="py-2.5 text-[13px]">
        For example; If your current equity is 10,000 and you want to trigger an
        action when it reaches 11,000, select this option.
      </p>
      <h4 className="mt-5 mb-2.5 text-2xl text-white">Target Percentage</h4>
      <p className="py-2.5 text-[13px]">
        Equity monitor will be triggered once your current equity percentage is
        <strong>ABOVE</strong> this value.
      </p>
      <p className="py-2.5 text-[13px]">
        For example; If your current equity is 10,000 and you want to trigger an
        action when it increases by 10% i.e. 11,000, enter 110%.
      </p>
      <h4 className="mt-5 mb-2.5 text-2xl text-white">Protect Value</h4>
      <p className="py-2.5 text-[13px]">
        Equity monitor will be triggered once this equity value is met, used
        when you want to trigger <strong>BELOW</strong> your current equity.
      </p>
      <p className="py-2.5 text-[13px]">
        For example; If your current equity is 10,000 and you want to trigger an
        action when it reaches 9,000 select this option.
      </p>
      <h4 className="mt-5 mb-2.5 text-2xl text-white">Protect Percentage</h4>
      <p className="py-2.5 text-[13px]">
        Equity monitor will be triggered once your current equity percentage is
        <strong>BELOW</strong> this value.
      </p>
      <p className="py-2.5 text-[13px]">
        For example; If your current equity is 10,000 and you want to trigger an
        action when it decreases by 10% i.e. 9000, enter 90%.
      </p>
    </React.Fragment>
  );
}

export default EquityMonitorsTypes;
