import * as React from 'react';
import { Icon } from '@iconify/react';

function TradeCopiersGeneralSettings() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        You can see an overview of the trade copier relationship and update
        general settings.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Copy from</h4>
      <p className="py-2.5 text-[13px]">
        The account that trades are being copied from. Often referred to as the
        Lead.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Send to</h4>
      <p className="py-2.5 text-[13px]">
        The account that trades are being sent to as copied trades. Often
        referred to as the Follower.
      </p>
      <h4 className="mt-5 mb-2.5 text-2xl text-white">Copier Mode</h4>
      <p className="py-2.5 text-[13px]">
        A trade copier has 3 modes of operation; on shown as a green play icon,
        monitor existing trades only shown as an amber pause sign and off shown
        as a red stop sign.
      </p>
      <ul className="mb-0 pl-[8px] text-[13px]">
        <li className="flex justify-start items-center gap-1">
          <Icon
            icon="icon-park-outline:dot"
            width="12"
            height="12"
            // className="inline-block"
          />
          <p>
            <strong>On</strong> Any trades on the <strong>Copy From</strong>{' '}
            account will be acted upon, based on the relevant settings of the
            trade copier.
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
            <strong>Monitor existing trades only</strong> Any new trades on the
            <strong>Copy From</strong> account will be ignored. Previously
            copied trades will be managed to a conclusion.
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
            <strong>Off</strong> Any trades on the <strong>Copy From</strong>{' '}
            account and previously copied trades will be ignored.
          </p>
        </li>
      </ul>
      <h4 className="my-2.5 text-[18px] text-white">Copy existing trades</h4>
      <p className="py-2.5 text-[13px]">
        This option will only show if the trade copier has not been turned on
        for the first time. If you select yes, when the trade copier is turned
        on for the first time it will try to copy any existing trades on the
        Copy From account. Once the trade copier has been turned on once the
        option will be removed.
      </p>
    </React.Fragment>
  );
}

export default TradeCopiersGeneralSettings;
