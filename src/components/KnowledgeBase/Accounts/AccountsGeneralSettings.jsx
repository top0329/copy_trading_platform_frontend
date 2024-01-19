import * as React from 'react';

function AccountsGeneralSettings() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        This is a general overview of the account including broker and account
        type.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Descriptive names</h4>
      <p className="py-2.5 text-[13px]">
        To update the descriptive enter a new name and click update.
      </p>
    </React.Fragment>
  );
}

export default AccountsGeneralSettings;