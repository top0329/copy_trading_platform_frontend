import * as React from 'react';
import KnowledgeBaseToggle from '../../components/KnowledgeBase/KnowledgeBaseToggle';
import DashboardOverview from '../../components/KnowledgeBase/Dashboard';
import SignalsOverview from '../../components/KnowledgeBase/Signals';
import AccountsOverview from '../../components/KnowledgeBase/Accounts';
import AccountsAddAccount from '../../components/KnowledgeBase/Accounts/AccountsAddAccount';
import AccountsConnectionResponse from '../../components/KnowledgeBase/Accounts/AccountsConnectionResponse';
import AccountsGeneralSettings from '../../components/KnowledgeBase/Accounts/AccountsGeneralSettings';
import AccountsLoginCredentials from '../../components/KnowledgeBase/Accounts/AccountsLoginCredentials';
import AccountsSuffix from '../../components/KnowledgeBase/Accounts/AccountsSuffix';
import AccountsSymbols from '../../components/KnowledgeBase/Accounts/AccountsSymbols';
import TradeCopiersOverview from '../../components/KnowledgeBase/TradeCopiers';
import TradeCopiersAddCopier from '../../components/KnowledgeBase/TradeCopiers/TradeCopiersAddCopier';
import TradeCopiersGeneralSettings from '../../components/KnowledgeBase/TradeCopiers/TradeCopiersGeneralSettings';
import TradeCopiersRiskSettings from '../../components/KnowledgeBase/TradeCopiers/TradeCopiersRiskSettings';
import TradeCopiersStopsAndLimits from '../../components/KnowledgeBase/TradeCopiers/TradeCopiersStopsAndLimits';
import TradeCopiersDisableSymbols from '../../components/KnowledgeBase/TradeCopiers/TradeCopiersDisableSymbols';
import TradeCopiersSymbolMaps from '../../components/KnowledgeBase/TradeCopiers/TradeCopiersSymbolMaps';
import TradeCopiersCopierLog from '../../components/KnowledgeBase/TradeCopiers/TradeCopiersCopierLog';
import EquityMonitorsOverview from '../../components/KnowledgeBase/EquityMonitors';
import EquityMonitorsCreateEquityMonitor from '../../components/KnowledgeBase/EquityMonitors/EquityMonitorsCreateEquityMonitor';
import EquityMonitorsTypes from '../../components/KnowledgeBase/EquityMonitors/EquityMonitorsTypes';
import EmailAlertsOverview from '../../components/KnowledgeBase/EmailAlerts';
import AnalysisOverview from '../../components/KnowledgeBase/Analysis';
import UserSettingsOverview from '../../components/KnowledgeBase/UserSettings';

function KnowledgeBase() {
  const [selectedOption, setSelectedOption] = React.useState('dashboard');

  const handleInputChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const Title = (selectedOption) => {
    switch (selectedOption) {
      case 'dashboard':
        return 'Dashboard';
      case 'signals':
        return 'Signals';
      case 'accounts':
        return 'Accounts';
      case 'tradeCopiers':
        return 'Trade Copiers';
      case 'equityMonitors':
        return 'Equity Monitors';
      case 'emailAlerts':
        return 'Email Alerts';
      case 'analysis':
        return 'Analysis';
      // case 'profileManager':
      //   return 'Profile Manager';
      case 'userSetting':
        return 'User Settings';
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 px-[15px]">
        <section className="mb-[20px] rounded-lg bg-[#282D36]">
          <header className="p-[18px] text-white">
            <h2 className="mt-[5px] text-[20px] font-normal">Knowledge base</h2>
          </header>
          <div className="p-[15px] bg-[#2E353E] rounded-b-lg">
            <select
              className="w-full overflow-hidden bg-[#282D36] text-white text-[14px] px-3 py-1.5 rounded"
              onChange={handleInputChange}
            >
              <option value="dashboard">Dashboard</option>
              <option value="signals">Signals</option>
              <option value="accounts">Accounts</option>
              <option value="tradeCopiers">Trade copiers</option>
              <option value="equityMonitors">Equity monitors</option>
              <option value="emailAlerts">Email alerts</option>
              <option value="analysis">Analysis</option>
              {/* <option value="profileManager">Profile manager</option> */}
              <option value="userSetting">User settings</option>
            </select>
          </div>
        </section>
      </div>
      <div className="col-span-9 px-[15px] rounded-lg">
        <section className="mb-[20px] rounded-lg bg-[#282D36]">
          <header className="p-[18px] text-white">
            <h2 className="mt-[5px] text-[20px] font-normal">
              {Title(selectedOption)}
            </h2>
          </header>
          {selectedOption === 'dashboard' && (
            <div className="mb-[130px]">
              <KnowledgeBaseToggle
                toggleName={'Overview'}
                initialActive={true}
                initialLastChildren={true}
              >
                <DashboardOverview />
              </KnowledgeBaseToggle>
            </div>
          )}
          {selectedOption === 'signals' && (
            <div className="mb-[130px]">
              <KnowledgeBaseToggle
                toggleName={'Overview'}
                initialActive={true}
                initialLastChildren={true}
              >
                <SignalsOverview />
              </KnowledgeBaseToggle>
            </div>
          )}
          {selectedOption === 'accounts' && (
            <div className="mb-[130px]">
              <KnowledgeBaseToggle toggleName={'Overview'} initialActive={true}>
                <AccountsOverview />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'Add account'}>
                <AccountsAddAccount />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'Connection response'}>
                <AccountsConnectionResponse />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'General settings'}>
                <AccountsGeneralSettings />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'Login credentials'}>
                <AccountsLoginCredentials />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'Suffix'}>
                <AccountsSuffix />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle
                toggleName={'Symbols'}
                initialLastChildren={true}
              >
                <AccountsSymbols />
              </KnowledgeBaseToggle>
            </div>
          )}
          {selectedOption === 'tradeCopiers' && (
            <div className="mb-[130px]">
              <KnowledgeBaseToggle toggleName={'Overview'} initialActive={true}>
                <TradeCopiersOverview />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'Add copier'}>
                <TradeCopiersAddCopier />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'General settings'}>
                <TradeCopiersGeneralSettings />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'Risk settings'}>
                <TradeCopiersRiskSettings />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'Stops and limits'}>
                <TradeCopiersStopsAndLimits />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'Disable symbols'}>
                <TradeCopiersDisableSymbols />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'Symbol maps'}>
                <TradeCopiersSymbolMaps />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle
                toggleName={'Copier log'}
                initialLastChildren={true}
              >
                <TradeCopiersCopierLog />
              </KnowledgeBaseToggle>
            </div>
          )}
          {selectedOption === 'equityMonitors' && (
            <div className="mb-[130px]">
              <KnowledgeBaseToggle toggleName={'Overview'} initialActive={true}>
                <EquityMonitorsOverview />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle toggleName={'Create equity monitor'}>
                <EquityMonitorsCreateEquityMonitor />
              </KnowledgeBaseToggle>
              <KnowledgeBaseToggle
                toggleName={'Types'}
                initialLastChildren={true}
              >
                <EquityMonitorsTypes />
              </KnowledgeBaseToggle>
            </div>
          )}
          {selectedOption === 'emailAlerts' && (
            <div className="mb-[130px]">
              <KnowledgeBaseToggle
                toggleName={'Overview'}
                initialActive={true}
                initialLastChildren={true}
              >
                <EmailAlertsOverview />
              </KnowledgeBaseToggle>
            </div>
          )}
          {selectedOption === 'analysis' && (
            <div className="mb-[130px]">
              <KnowledgeBaseToggle
                toggleName={'Overview'}
                initialActive={true}
                initialLastChildren={true}
              >
                <AnalysisOverview />
              </KnowledgeBaseToggle>
            </div>
          )}
          {/* {selectedOption === 'profileManager' && (
            <KnowledgeBaseToggle>
            <DashboardOverview />
            </KnowledgeBaseToggle>
          )} */}
          {selectedOption === 'userSetting' && (
            <div className="mb-[130px]">
              <KnowledgeBaseToggle
                toggleName={'Overview'}
                initialActive={true}
                initialLastChildren={true}
              >
                <UserSettingsOverview />
              </KnowledgeBaseToggle>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default KnowledgeBase;
