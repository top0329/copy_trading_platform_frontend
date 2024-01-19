import * as React from 'react';

function TradeCopiersStopsAndLimits() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        You can set how the <strong>Send To</strong> account will respond to
        stop and limits set on the <strong>Copy From</strong> account. By
        default, the trade copier is set to off for all and will ignore any
        stops and limits. The reason for this is if you are copying across
        different brokers you can potentially get odd results due to the
        difference in spreads and general varied performance of brokers.
      </p>
      <h6 className="my-2.5 text-xs text-white tracking-tight">
        Please consider what would happen if either account hits a respective
        level and the other account misses due to spread differences, before
        choosing to copy any stops or limits.
      </h6>
      <h4 className="my-2.5 text-[18px] text-white">Copy pending orders</h4>
      <p className="py-2.5 text-[13px]">
        If set to <strong>No</strong> the <strong>Send To</strong> account will
        ignore pending orders opened on the <strong>Copy From</strong> account.
        Only if the pending order is filled in the market, will the{' '}
        <strong>Send To</strong>
        account act. The <strong>Send To</strong> will open an at-market trade
        based on the current trade copier settings.
      </p>
      <p className="py-2.5 text-[13px]">
        If set to <strong>Yes</strong> the <strong>Send To</strong> account will
        copy all pending orders like for like.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Copy stop loss</h4>
      <p className="py-2.5 text-[13px]">
        The account that trades are being sent to as copied trades. Often
        referred to as the Follower/send-to.
      </p>
      <h4 className="mt-5 mb-2.5 text-2xl text-white">Risk types</h4>
      <p className="py-2.5 text-[13px]">
        If set to <strong>No</strong> the <strong>Send To</strong> account will
        ignore all stop losses.
      </p>
      <p className="py-2.5 text-[13px]">
        If set to <strong>Yes</strong> the <strong>Send To</strong> account will
        copy stops losses like for like.
      </p>
      <p className="py-2.5 text-[13px]">
        If set to <strong>Fixed</strong> the <strong>Send To</strong> account
        will ignore all stop losses and set the fixed stop loss value. The value
        is in pips.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Copy take profit</h4>
      <p className="py-2.5 text-[13px]">
        If set to <strong>No</strong> the <strong>Send To</strong> account will
        ignore all take profits.
      </p>
      <p className="py-2.5 text-[13px]">
        If set to <strong>Yes</strong> the <strong>Send To</strong> account will
        copy take profits like for like.
      </p>
      <p className="py-2.5 text-[13px]">
        If set to <strong>Fixed</strong> the <strong>Send To</strong> account
        will ignore all take profits and set the fixed take profit value. The
        value is in pips.
      </p>
    </React.Fragment>
  );
}

export default TradeCopiersStopsAndLimits;
