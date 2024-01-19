import * as React from 'react';

function EmailAlertsOverview() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        You can set up email alerts for trading events that occur on the
        account. You can select to receive alerts for different account events
        by ticking the relevant box. The settings can be changed at any time and
        will reflect future activity.
      </p>
      <p className="py-2.5 text-[13px]">
        To create an email alert press the <strong>Create Email Alert</strong>{' '}
        button, select the account in which you want the alert on and check the
        alert types you wish to receive.
      </p>
      <p className="py-2.5 text-[13px]">
        If you wish to update an existing alert you can check or uncheck the
        alert type you wish to change and then press the <strong>Update</strong>{' '}
        button.
      </p>
      <h5 className="my-2.5 text-white text-sm">Trade open</h5>
      <p className="py-2.5 text-[13px]">
        An alert for any trades opened on the account including; at market,
        pending orders or a pending orders being filled.
      </p>
      <h5 className="my-2.5 text-white text-sm">Trade close</h5>
      <p className="py-2.5 text-[13px]">An alert for any trade closed.</p>
      <h5 className="my-2.5 text-white text-sm">New stop loss</h5>
      <p className="py-2.5 text-[13px]">
        An alert for a new stop loss on any trade.
      </p>
      <h5 className="my-2.5 text-white text-sm">New take profit</h5>
      <p className="py-2.5 text-[13px]">
        An alert for a new take profit on any trade.
      </p>
      <h5 className="my-2.5 text-white text-sm">Pending order new price</h5>
      <p className="py-2.5 text-[13px]">
        An alert for a new price being set on an existing pending order.
      </p>
      <h5 className="my-2.5 text-white text-sm">Command alert</h5>
      <p className="py-2.5 text-[13px]">
        An alert for commands not processed on the account on 1st attempt.
        Commands are generated from trade copiers configured (and equity
        protection events) and inform of reasons why a command was not processed
        successfully.
      </p>
      <p className="py-2.5 text-[13px]">
        Some example alerts would be: &apos;symbol not found&apos;, &apos;off
        quotes&apos;, &apos;out of range&apos;.
      </p>
    </React.Fragment>
  );
}

export default EmailAlertsOverview;
