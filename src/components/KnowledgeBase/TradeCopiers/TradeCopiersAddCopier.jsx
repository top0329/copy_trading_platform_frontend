import * as React from 'react';

function TradeCopiersAddCopier() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        You can create a trade copier between 2 accounts so that trades on the
        <strong>Copy From</strong> account will be replicated to the{' '}
        <strong>Send To</strong>
        account based on your defined settings. You can create trade copiers
        between any account on your platform. You can also chain multiple
        accounts if required. An example of chaining is if you have 3 accounts;
        A, B and C and you create a trade copier from A to B and then a trade
        copier from B to C.
      </p>
      <h6 className="my-2.5 text-xs text-white tracking-tight">
        Please take care if chaining accounts, that you do not create an
        infinite loop, as you could cause major damage on all the accounts
        involved. A loop example is if you create a trade copier from A to B,
        then B to C, and then C to A. You will be sending the trades back to the
        starting account and they will be repeatedly copied through the chain.
      </h6>
      <h4 className="my-2.5 text-[18px] text-white">Copy from</h4>
      <p className="py-2.5 text-[13px]">
        The account that trades are being copied from. Often referred to as the
        Lead/copy from.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Send to</h4>
      <p className="py-2.5 text-[13px]">
        The account that trades are being sent to as copied trades. Often
        referred to as the Follower/send-to.
      </p>
      <h4 className="mt-5 mb-2.5 text-2xl text-white">Risk types</h4>
      <p className="py-2.5 text-[13px]">See risk settings section.</p>
      <h4 className="my-2.5 text-[18px] text-white">Copy existing trades</h4>
      <p className="py-2.5 text-[13px]">See general settings section.</p>
    </React.Fragment>
  );
}

export default TradeCopiersAddCopier;
