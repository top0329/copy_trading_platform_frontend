import * as React from 'react';

import General from './General';
import DisableSymbols from './DisableSymbols';
import RiskSettings from './RiskSettings';
import StopsAndLimits from './StopsAndLimits';
import MapSymbols from './MapSymbols';

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
      <div className="col-span-3 flex flex-col gap-1.5">
        <button
          className={`w-full rounded px-3 py-1.5 text-[#eee] text-sm ${
            activeTab === 1 ? 'bg-[#0099E6]' : 'bg-[#282D36]'
          }`}
          onClick={() => handleTabClick(1)}
        >
          General
        </button>
        <button
          className={`w-full rounded px-3 py-1.5 text-[#eee] text-sm ${
            activeTab === 2 ? 'bg-[#0099E6]' : 'bg-[#282D36]'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Risk Settings
        </button>
        <button
          className={`w-full rounded px-3 py-1.5 text-[#eee] text-sm ${
            activeTab === 3 ? 'bg-[#0099E6]' : 'bg-[#282D36]'
          }`}
          onClick={() => handleTabClick(3)}
        >
          Stops & Limits
        </button>
        <button
          className={`w-full rounded px-3 py-1.5 text-[#eee] text-sm ${
            activeTab === 4 ? 'bg-[#0099E6]' : 'bg-[#282D36]'
          }`}
          onClick={() => handleTabClick(4)}
        >
          Disable Symbols
        </button>
        <button
          className={`w-full rounded px-3 py-1.5 text-[#eee] text-sm ${
            activeTab === 5 ? 'bg-[#0099E6]' : 'bg-[#282D36]'
          }`}
          onClick={() => handleTabClick(5)}
        >
          Map Symbols
        </button>
      </div>
      <div className="col-span-9">
        {activeTab === 1 && <General />}
        {activeTab === 2 && <RiskSettings />}
        {activeTab === 3 && <StopsAndLimits />}
        {activeTab === 4 && <DisableSymbols />}
        {activeTab === 5 && <MapSymbols />}
      </div>
    </div>
  );
}

export default EditTradeCopier;
