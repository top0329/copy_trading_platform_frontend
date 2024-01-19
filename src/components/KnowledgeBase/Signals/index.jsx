import * as React from 'react';
import { Icon } from '@iconify/react';

function SignalsOverview() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        From the signal page, you can view any signals you are following.
        Signals are accounts you have either signed up to follow via a signal
        page or another user has granted you access to the account.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">My Signals</h4>
      <p className="py-2.5 text-[13px]">
        Each signal shows the provider of the signal, access rights, access
        terms and expiry date (if applicable).
      </p>
      <p className="py-2.5 text-[13px]">
        A signal will have specific access rights. The rights can be:
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
            <strong>No rights</strong> - only see the account stats and trades
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
            <strong>Email Alerts</strong> - set up email alerts for trading
            events on the account only
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
            <strong>Trade Copier</strong> - set up a trade copier to copy trades
            from the account only
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
            <strong>Email Alerts & Trade Copier</strong> - set up email alerts
            and trader copiers
          </p>
        </li>
      </ul>
      <p className="py-2.5 text-[13px]">
        Depending on the specific rights you have you can configure Trade Alerts
        and/or Trade Copiers in the <strong>configurator</strong> section.
      </p>
      <p className="py-2.5 text-[13px]">
        The access terms show if a signal requires a payment to maintain access.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Manage Signals</h4>
      <p className="py-2.5 text-[13px]">
        For a more detailed view of a particular signal, click{' '}
        <strong>manage signal</strong> on any signal.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Renewals</h4>
      <p className="py-2.5 text-[13px]">
        Signal access can be paid for access. You can manage related
        payments/renewals by clicking <strong>manage renewals</strong>.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Deleting Signals</h4>
      <p className="py-2.5 text-[13px]">
        If you no longer wish to follow a signal you can remove it by clicking
        the <strong>red trash can</strong>.
      </p>
    </React.Fragment>
  );
}

export default SignalsOverview;
