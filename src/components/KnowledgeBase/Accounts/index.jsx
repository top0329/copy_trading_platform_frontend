import * as React from 'react';
import { Icon } from '@iconify/react';

function AccountsOverview() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        Any account you have connected to the system will be listed under my
        accounts. You can see a brief overview of each account with some
        important values being highlighted.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Connection state</h4>
      <p className="py-2.5 text-[13px]">
        Every account on the system is polled periodically to confirm it is
        connected ok. The connection state is shown as a colour-coded box for
        each account. There are 4 states:
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
            <strong>Green</strong> The connection is OK.
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
            <strong>Amber</strong> The account has not been seen for more than 2
            minutes.
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
            <strong>Red</strong> The account has not been seen for more than 10
            minutes.
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
            <strong>Timer Icon</strong> The account is connecting.
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
            <strong>No Entry Icon</strong> The account has invalid credentials
            or you are connecting to the wrong server.
          </p>
        </li>
      </ul>
      <p className="py-2.5 text-[13px]">
        If any account is not showing green, click on the icon to navigate to
        open the login credentials modal. From here you can try to reconnect the
        account by updating your login credentials.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Equity monitor</h4>
      <p className="py-2.5 text-[13px]">
        You can see at a glance what equity monitors you have set up on your
        accounts. If you want to change one of the settings you can click on the
        icon to navigate to the equity monitor settings of the selected account.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Account settings</h4>
      <p className="py-2.5 text-[13px]">
        You can navigate to the account-specific settings page, where you can
        adjust settings including email alerts and login credentials.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Account logs</h4>
      <p className="py-2.5 text-[13px]">
        You can navigate to the account logs page, where you can see the
        connection status of an account over time. This shows connections,
        disconnections and when they occurred.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Deleting an account</h4>
      <p className="py-2.5 text-[13px]">
        To delete an account click on the red trash can. Any associated trade
        copiers and shared accounts will be deleted during this process.
      </p>
    </React.Fragment>
  );
}

export default AccountsOverview;