import * as React from 'react';
import { Icon } from '@iconify/react';

function TradeCopiersOverview() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        Any existing trade copiers will be listed in groups within the copier
        table, with the Lead/Copy from account as the title and a list of the
        Follower/Send to accounts.
      </p>
      <p className="py-2.5 text-[13px]">
        You can edit the risk, mode or append to each copier group i.e. all
        Followers/Send to&apos;s following one Lead/copy from or you can edit
        each copier individually.
      </p>
      <p className="py-2.5 text-[13px]">
        You can enable / disable the columns of each tab by pressing the Columns
        button in the top right corner.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">
        Adding a new trade copier
      </h4>
      <p className="py-2.5 text-[13px]">
        To add a new trade copier, click on the + <strong>Create Copier</strong>{' '}
        in the top left corner of the page.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Copier Modes</h4>
      <p className="py-2.5 text-[13px]">
        A trade copier has 3 modes of operation; <strong>on</strong> shown as a
        green play icon, <strong>monitor existing trades only</strong> shown as
        an amber pause sign and <strong>off</strong> shown as a red stop sign.
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
      <h4 className="mt-5 mb-2.5 text-2xl text-white">Group Copier Settings</h4>
      <h4 className="my-2.5 text-[18px] text-white">
        Add to an existing copier group
      </h4>
      <p className="py-2.5 text-[13px]">
        If you want to add a trade copier to a Lead/Copy from account that has
        existing trade copiers, click on the + Group Copier button on the top
        right of the copier group. This will pre-populate the add copier form
        with the Lead/Copy from account and append the new Follower/Send to
        account.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">
        Set risk / stops and limits for group
      </h4>
      <p className="py-2.5 text-[13px]">
        If you have many trade copiers in a copier group it may be necessary to
        update all Follower/send to accounts in one go. To do this, click group
        risk in the copier group, select the risk setting or stop limits and
        click update. This will update all Follower/send to accounts in one go
        with the risk setting you changed. If you only changed the slippage
        setting it will only update the slippage setting for the group, if you
        set all settings in the risk setting tab, it will update all.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Set all modes for group</h4>
      <p className="py-2.5 text-[13px]">
        If you have many trade copiers in a copier group it may be necessary to
        update all the modes in one go. To do this, click group modes in the
        copier group, select the mode and click update. This will update the
        mode of each trade copier in the copier group.
      </p>
      <h4 className="mt-5 mb-2.5 text-2xl text-white">
        Individual Copier Settings
      </h4>
      <h4 className="my-2.5 text-[18px] text-white">Set mode</h4>
      <p className="py-2.5 text-[13px]">
        You can update the mode of an individual trade copier. Click the mode
        icon, select a new mode and click update.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Copier settings</h4>
      <p className="py-2.5 text-[13px]">
        You can navigate to the trade copier-specific settings page, where you
        can adjust the risk settings and more.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Deleting a trade copier</h4>
      <p className="py-2.5 text-[13px]">
        You can delete a trade copier at any time. Click the red trash can and
        confirm.
      </p>
      <h6 className="my-2.5 text-xs text-white tracking-tight">
        Be aware that any existing copied trades will now be unmanaged. If you
        change your mind, you can recreate the trade copier and existing trades
        will be managed again based on the newly defined settings.
      </h6>
      <h4 className="my-2.5 text-[18px] text-white">Copier commands</h4>
      <p className="py-2.5 text-[13px]">
        You can navigate to the trade copier commands page, where you can see a
        list of commands and events that the copier generates when attempting to
        open, close or modify your trades. Here you can see why trades did or
        didn&apos;t copy depending on your copier settings or MetaTrader errors.
      </p>
    </React.Fragment>
  );
}

export default TradeCopiersOverview;
