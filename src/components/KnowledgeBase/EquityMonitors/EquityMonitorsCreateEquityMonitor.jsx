import * as React from 'react';
import { Icon } from '@iconify/react';

function EquityMonitorsCreateEquityMonitor() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        You can create an equity monitor for each connected account. Each
        account can have 1 of each type of equity monitor at a time. You can
        cancel an equity monitor and create a new one at any time.
      </p>
      <p className="py-2.5 text-[13px]">
        The create equity monitor page displays your current equity and equity
        percentage for your account depending on your monitor type selection.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Monitor account</h4>
      <p className="py-2.5 text-[13px]">
        Select the account which you would like to apply the equity monitor to.
        If you have the account connected to a copier and are using the disable
        copiers action, this will disable all the copiers the account is a{' '}
        <strong>Send to</strong> on.
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
      <p className="py-2.5 text-[13px]">See Types section.</p>
      <h4 className="mt-5 mb-2.5 text-2xl text-white">Equity value</h4>
      <p className="py-2.5 text-[13px]">
        Enter the value at which the equity monitor will be triggered. If you
        selected the <strong>target value</strong> or{' '}
        <strong>protect value</strong> you will be entering the literal equity
        value the monitor will trigger. If you have selected the{' '}
        <strong>target percentage</strong> or{' '}
        <strong>protect percentage</strong> you will be entering the percentage
        the monitor will be trigger.
      </p>
      <h4 className="mt-5 mb-2.5 text-2xl text-white">Monitor action</h4>
      <p className="py-2.5 text-[13px]">
        Select the action you wish to trigger ones the equity value has been
        met.
      </p>
      <p className="py-2.5 text-[13px]">
        There are 3 actions which can be performed;
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
            <strong>Email alert</strong> The equity monitor will send an email
            alert once triggered.
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
            <strong>Email alert and disable copiers</strong> The equity monitor
            will send an email alert and disable any of the account&apos;s trade
            copiers when triggered.
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
            <strong>Email alert, disable copiers and close trades</strong> The
            equity monitor will send an email alert, disable any of the
            account&apos;s trade copiers and close all open trades when
            triggered.
          </p>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default EquityMonitorsCreateEquityMonitor;
