import * as React from 'react';

function AnalysisOverview() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        From the analysis page, you can access individual account statistic
        pages and compare account trades, which is useful when trades are being
        copied.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Account Stats Page</h4>
      <p className="py-2.5 text-[13px]">
        For a detailed breakdown of the historic performance of any personal
        account or a signal account you are following, select the account from
        the dropdown and click <strong>Analyse Account</strong>.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Account Trade History</h4>
      <p className="py-2.5 text-[13px]">
        For a list of all your historical trades of any personal account or
        signal account you are following, select the account from the dropdown
        and click <strong>Trade History</strong>.
      </p>
      <p className="py-2.5 text-[13px]">
        For a list of historical trades within a given date range of any
        personal account or signal account you are following, select the date
        range, then select the account from the dropdown and click{' '}
        <strong>Trade History</strong>.
      </p>
      <p className="py-2.5 text-[13px]">
        You can download a CSV copy of this data by pressing the{' '}
        <strong>Download CSV</strong>
        button at the top right of the page.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Compare Trades</h4>
      <p className="py-2.5 text-[13px]">
        For accounts that are set up as trade copiers, you can compare each
        copied trade versus the lead trade. To compare all trades, select one
        lead account and one (or many) accounts to compare with and click
        <strong>Compare trades</strong>.
      </p>
      <p className="py-2.5 text-[13px]">
        To compare trades for a given time period, select the date range, then
        select one lead account and one (or many) accounts to compare with and
        click <strong>Compare Trades</strong>.
      </p>
      <p className="py-2.5 text-[13px]">
        You can download a CSV copy of this data by pressing the{' '}
        <strong>Download CSV</strong>
        button at the top right of the page.
      </p>
    </React.Fragment>
  );
}

export default AnalysisOverview;
