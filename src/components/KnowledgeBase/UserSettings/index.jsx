import * as React from 'react';
import { Icon } from '@iconify/react';

function UserSettingsOverview() {
  return (
    <React.Fragment>
      <p className="py-2.5 text-[13px]">
        From the <strong>user settings</strong> section, you can manage your
        platform user details.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Email & Name</h4>
      <p className="py-2.5 text-[13px]">
        You can update your registered email address and name by adjusting and
        clicking update.
      </p>
      <h4 className="my-2.5 text-[18px] text-white">Password</h4>
      <p className="py-2.5 text-[13px]">
        You can update your password to a new one at any time. It must be 6 or
        more characters and we recommend setting a password with a mix of
        numbers and letters for increased security.
      </p>
    </React.Fragment>
  );
}

export default UserSettingsOverview;
