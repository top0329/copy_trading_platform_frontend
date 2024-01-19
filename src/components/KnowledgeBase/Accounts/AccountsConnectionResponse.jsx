import * as React from 'react';

function AccountsConnectionResponse() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        When you attempt to connect an account for the first time or when you
        are updating the login credentials the system will return a response to
        advise on the result.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Account has connected</h4>
      <p className="py-2.5 text-[13px]">
        Your account has been connected to the system successfully!
      </p>
      <h4 className="my-2.5 text-[18px] text-white">
        Account has not reconnected
      </h4>
      <p className="py-2.5 text-[13px]">
        In most cases the login credentials are correct but the system did not
        return a connection response quickly enough. Navigate to My Accounts and
        check the account connection icon. If the icon is green the account is
        connected OK, if amber or red, retry updating the login credentials.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">
        Server details incorrect
      </h4>
      <p className="py-2.5 text-[13px]">
        The broker server details are not valid.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Password is incorrect</h4>
      <p className="py-2.5 text-[13px]">
        The broker server details are correct but the password is incorrect.
        Confirm you have entered the correct password and retry. If can not
        resolve, we recommend you set a new password on your MT4 terminal and
        try the new password. This approach will fix most password-related
        issues.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">
        Server busy performing an operation
      </h4>
      <p className="py-2.5 text-[13px]">
        System-wide maintenance is likely running at this time. Retry the
        operation after 30-60 seconds.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">
        System at maximum capacity
      </h4>
      <p className="py-2.5 text-[13px]">
        The system has hit maximum capacity. In most cases, new capacity will be
        brought online within 10 minutes. We will notify you by email once this
        happens and you can then resume the current operation.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">An error has occurred</h4>
      <p className="py-2.5 text-[13px]">
        On some occasions, an unknown error will occur. You can retry the
        current operation to see if it is a permanent error. Support will be
        notified of any errors and investigate the issue.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Still having issues?</h4>
      <p className="py-2.5 text-[13px]">
        If you continually have issues connecting an account and you are sure
        the details are correct, please contact support and we can check the
        issue in more detail.
      </p>
    </React.Fragment>
  );
}

export default AccountsConnectionResponse;