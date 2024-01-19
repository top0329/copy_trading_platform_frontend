import * as React from 'react';

function AccountsAddAccount() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        You can add any MT4 trading account to the platform. Once connected, you
        will be able to set up email trade alerts, close trades and create trade
        copiers to replicate trades between accounts.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Descriptive name</h4>
      <p className="py-2.5 text-[13px]">
        A reference name to help you identify the account e.g.{' '}
        <strong>My Super Trades</strong>.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Account number</h4>
      <p className="py-2.5 text-[13px]">
        The broker supplied MT4 account number.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Account password</h4>
      <p className="py-2.5 text-[13px]">
        The password for the MT4 account. This can be either the master or
        investor (read-only) password. <strong>Note</strong> If you want the
        account to be able to receive trades from other accounts or manage trade
        closes, you must use the master password.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">
        Broker from the dropdown
      </h4>
      <p className="py-2.5 text-[13px]">
        Select your accounts broker from the list. Once selected, a second
        dropdown will appear with the different server options.
      </p>
      <p className="py-2.5 text-[13px]">
        Select the relevant server name and update.
      </p>
      <p className="py-2.5 text-[13px] font-bold">
        To get your broker added send a message to support. We need as much
        detail about the broker as possible, including the broker&apos;s URL and
        any known server names.
      </p>
    </React.Fragment>
  );
}

export default AccountsAddAccount;