import * as React from 'react';
import { Icon } from '@iconify/react';

function EquityMonitorsOverview() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        With equity monitors, you can setup an action that is trigger when a
        specific equity value is met. You can do this either below or above the
        current equity and select from a list of actions including sending an
        email alert, stopping copiers or closing trades. With equity monitors we
        built upon the previous implementation of equity protection and now
        allow you to trigger actions from both sides of the equity value.
      </p>
      <p className="py-2.5 text-[13px]">
        On the equity monitors page there are two tabs, active and concluded. On
        the active tab, you see a list of equity monitors that are currently
        active for all of your accounts. On the concluded tab, you will see all
        equity monitors that have been completed or cancelled.
      </p>
      <p className="py-2.5 text-[13px]">
        You can create an equity monitor or cancel an equity monitor. You cannot
        edit or delete an equity monitor. When you create an equity monitor, the
        status is set to active and it will appear in the active table. Once the
        equity monitor is triggered the status will change to complete. If you
        cancel the equity monitor, the status will be changed to cancelled. Both
        appear in the concluded table.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Equity Monitor Types</h4>
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
      <p className="py-2.5 text-[13px]">See Types section.</p>
      <h4 className="mt-5 mb-2.5 text-2xl text-white">
        Equity Monitor Actions
      </h4>
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
      <p className="py-2.5 text-[13px]">
        To cancel an already set equity monitor, press the red trash can on the
        active equity monitors page.
      </p>
    </React.Fragment>
  );
}

export default EquityMonitorsOverview;
