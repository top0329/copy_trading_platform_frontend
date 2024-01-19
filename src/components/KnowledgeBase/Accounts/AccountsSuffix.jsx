import * as React from 'react';

function AccountsSuffix() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        Brokers can use different naming conventions for symbols and with FX
        symbols a suffix can be appended to the name. An example is{' '}
        <strong>EURUSD.fx</strong>
        where <strong>.fx</strong> is the suffix.
      </p>
      <p className="py-2.5 text-[13px]">
        When an account is added to the system it will make a best effort to
        determine what suffix is being used, based on the most common occurrence
        in the symbol list.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">My suffix</h4>
      <p className="py-2.5 text-[13px]">
        If a suffix has been detected, the suffix only will be set. If no suffix
        has been detected, a blank will be set. If the suffix has not been set
        correctly you can manually update to the correct value. For convenience,
        a complete list of the symbols on the account is listed.
      </p>
      <p className="py-2.5 text-[13px] font-bold">
        If trades are not copying because of a 133 error, this could be the
        solution
      </p>
    </React.Fragment>
  );
}

export default AccountsSuffix;