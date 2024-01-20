import * as React from 'react';

import General from './General';
import DisableSymbols from './DisableSymbols';

function EditTradeCopier() {
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
      <div className="col-span-3 flex flex-col gap-2">
        <button
          className={`w-full rounded px-3 py-1.5 text-white text-sm ${
            activeTab === 1 ? 'bg-[#0099E6]' : 'bg-[#282D36]'
          }`}
          onClick={() => handleTabClick(1)}
        >
          General
        </button>
        <button
          className={`w-full rounded px-3 py-1.5 text-white text-sm ${
            activeTab === 2 ? 'bg-[#0099E6]' : 'bg-[#282D36]'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Disable Symbols
        </button>
      </div>
      <div className="col-span-9">
        {activeTab === 1 && <General />}
        {activeTab === 2 && <DisableSymbols />}
      </div>
    </div>
  );
}

export default EditTradeCopier;
