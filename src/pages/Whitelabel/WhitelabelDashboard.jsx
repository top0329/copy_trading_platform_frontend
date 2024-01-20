import * as React from 'react';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

function WhitelabelDashboard() {
  return (
    <div className="flex gap-4 w-full">
      <div className="flex w-1/3 relative overflow-hidden rounded-lg bg-[#2E353E] px-4 pb-5 pt-5 shadow sm:px-6 sm:pt-6">
        <GroupsRoundedIcon
          sx={{
            color: 'white',
            borderRadius: '50%',
            backgroundColor: '#0088cc',
            padding: '15px',
            width: '70px',
            height: '70px',
            display: 'flex',
          }}
        />
        <dd className="flex flex-col justify-center ml-6">
          <p className="text-base font-semibold text-white">Users</p>
          <p className="flex items-baseline text-2xl font-bold text-white">
            28
          </p>
        </dd>
      </div>
      <div className="flex w-1/3 relative overflow-hidden rounded-lg bg-[#2E353E] px-4 pb-5 pt-5 shadow sm:px-6 sm:pt-6">
        <ViewListRoundedIcon
          sx={{
            color: 'white',
            borderRadius: '50%',
            backgroundColor: '#0088cc',
            padding: '15px',
            width: '70px',
            height: '70px',
            display: 'flex',
          }}
        />
        <dd className="flex flex-col justify-center ml-6">
          <p className="text-base font-semibold text-white">Accounts</p>
          <p className="flex items-baseline text-2xl font-bold text-white">
            21
          </p>
        </dd>
      </div>
      <div className="flex w-1/3 relative overflow-hidden rounded-lg bg-[#2E353E] px-4 pb-5 pt-5 shadow sm:px-6 sm:pt-6">
        <ShareRoundedIcon
          sx={{
            color: 'white',
            borderRadius: '50%',
            backgroundColor: '#0088cc',
            padding: '15px',
            width: '70px',
            height: '70px',
            display: 'flex',
          }}
        />
        <dd className="flex flex-col justify-center ml-6">
          <p className="text-base font-semibold text-white">Copiers</p>
          <p className="flex items-baseline text-2xl font-bold text-white">
            20
          </p>
        </dd>
      </div>
    </div>
  );
}

export default WhitelabelDashboard;
