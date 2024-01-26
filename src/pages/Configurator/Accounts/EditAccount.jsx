import * as React from 'react';

import AccountProfile from './AccountProfile';
import DisableSymbols from './DisableSymbols';
import ForexSuffix from './ForexSuffix';

function EditAccount() {
  const [activeTab, setActiveTab] = React.useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
    let config = JSON.parse(sessionStorage.getItem('profile'));
    config.tab = id;
    sessionStorage.setItem('profile', JSON.stringify(config));
  };

  React.useEffect(() => {
    let config = sessionStorage.getItem('profile');
    if (!config) {
      config = {
        tab: 1,
      };
      sessionStorage.setItem('profile', JSON.stringify(config));
    } else {
      config = JSON.parse(config);
      setActiveTab(config.tab);
    }
  }, []);

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3 flex flex-col gap-1.5">
        <button
          className={`w-full rounded px-3 py-1.5 text-[#eee] text-sm ${
            activeTab === 1 ? 'bg-[#0099E6]' : 'bg-[#282D36]'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Account Profile
        </button>
        <button
          className={`w-full rounded px-3 py-1.5 text-[#eee] text-sm ${
            activeTab === 2 ? 'bg-[#0099E6]' : 'bg-[#282D36]'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Forex Suffix
        </button>
        {/* <button
          className={`w-full rounded px-3 py-1.5 text-[#eee] text-sm ${
            activeTab === 3 ? 'bg-[#0099E6]' : 'bg-[#282D36]'
          }`}
          onClick={() => handleTabClick(3)}
        >
          Disable Symbols
        </button> */}
      </div>
      <div className="col-span-9">
        {activeTab === 1 && <AccountProfile />}
        {activeTab === 2 && <ForexSuffix />}
        {/* {activeTab === 3 && <DisableSymbols />} */}
      </div>
    </div>
  );
}

export default EditAccount;
