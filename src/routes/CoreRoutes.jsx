import { lazy } from 'react';
import AuthGuard from '../utils/AuthGuard';
import Loadable from '../third-party/Loadable';
import EditUser from '../pages/Whitelabel/WhitelabelUsers/EditUser';

const DefaultLayout = Loadable(lazy(() => import('../layouts/DefaultLayout')));
const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));
const Signals = Loadable(lazy(() => import('../pages/Signals')));
const Accounts = Loadable(lazy(() => import('../pages/Configurator/Accounts')));
const AddAccount = Loadable(
  lazy(() => import('../pages/Configurator/Accounts/AddAccount'))
);
const EditAccount = Loadable(
  lazy(() => import('../pages/Configurator/Accounts/EditAccount'))
);
const TradeCopier = Loadable(
  lazy(() => import('../pages/Configurator/TradeCopier'))
);
const CreateNewTradeCopier = Loadable(
  lazy(() => import('../pages/Configurator/TradeCopier/CreateNewTradeCopier'))
);
const EditTradeCopier = Loadable(
  lazy(() => import('../pages/Configurator/TradeCopier/EditTradeCopier'))
);
const EquityMonitors = Loadable(
  lazy(() => import('../pages/Configurator/EquityMonitors'))
);
const EmailAlerts = Loadable(
  lazy(() => import('../pages/Configurator/EmailAlerts'))
);
const Analysis = Loadable(lazy(() => import('../pages/Analysis')));
const AccountAnalysis = Loadable(
  lazy(() => import('../pages/Analysis/AccountAnalysis'))
);
const SignalFollowers = Loadable(
  lazy(() => import('../pages/SignalFollowers'))
);
const SignalProvider = Loadable(lazy(() => import('../pages/SignalProvider')));
const ConfigurePaymentProcessor = Loadable(
  lazy(() => import('../pages/SignalProvider/ConfigurePaymentProcessor'))
);
const CreateSignalProvider = Loadable(
  lazy(() => import('../pages/SignalProvider/CreateSignalProvider'))
);
const FollowerTerms = Loadable(
  lazy(() => import('../pages/SignalProvider/FollowerTerms'))
);
const EditSignalProvider = Loadable(
  lazy(() => import('../pages/SignalProvider/EditSignalProvider'))
);
const WhitelabelDashboard = Loadable(
  lazy(() => import('../pages/Whitelabel/WhitelabelDashboard'))
);
const WhitelabelUsers = Loadable(
  lazy(() => import('../pages/Whitelabel/WhitelabelUsers'))
);
const WhitelabelHomepage = Loadable(
  lazy(() => import('../pages/Whitelabel/WhitelabelHomepage'))
);
const WhitelabelSettings = Loadable(
  lazy(() => import('../pages/Whitelabel/WhitelabelSettings'))
);
const KnowledgeBase = Loadable(
  lazy(() => import('../pages/HelpCenter/KnowledgeBase'))
);
const ContactSupport = Loadable(
  lazy(() => import('../pages/HelpCenter/ContactSupport'))
);
const Profile = Loadable(lazy(() => import('../pages/Profile')));
const EmailVerificationPageForUpdate = Loadable(
  lazy(() =>
    import('../pages/EmailVerification/EmailVerificationPageForUpdate')
  )
);
const EmailVerifyUpdate = Loadable(
  lazy(() => import('../pages/EmailVerification/EmailVerifyUpdate'))
);
const AuthView = Loadable(lazy(() => import('../pages/Maintenance/AuthView')));

const coreRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <DefaultLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: '/view/:id',
      element: <AuthView />,
    },
    {
      path: '/dashboard',
      title: 'Dashboard',
      element: <Dashboard />,
    },
    {
      path: '/accounts',
      title: 'Accounts',
      element: <Accounts />,
    },
    {
      path: '/accounts/add-account',
      title: 'Add Account',
      element: <AddAccount />,
    },
    {
      path: '/accounts/edit/:id',
      title: 'Manage Account',
      element: <EditAccount />,
    },
    {
      path: '/analysis',
      title: 'Analysis',
      element: <Analysis />,
    },
    {
      path: '/signal-followers',
      title: 'Signal Followers',
      element: <SignalFollowers />,
    },
    {
      path: '/signal-provider',
      title: 'Signal Provider',
      element: <SignalProvider />,
    },
    {
      path: '/signal-provider/create',
      title: 'Create Signal Provider',
      element: <CreateSignalProvider />,
    },
    {
      path: '/signal-provider/edit/:strategyId',
      title: 'Manage Signal Provider',
      element: <EditSignalProvider />,
    },
    {
      path: '/signal-provider/follower-terms/:strategyId',
      title: 'Manage Signal Provider',
      element: <FollowerTerms />,
    },
    {
      path: '/signal-provider/configure-payment-processor',
      title: 'Configure Payment Processor',
      element: <ConfigurePaymentProcessor />,
    },
    {
      path: '/contact-support',
      title: 'Support',
      element: <ContactSupport />,
    },
    {
      path: '/email-alerts',
      title: 'Email Alerts',
      element: <EmailAlerts />,
    },
    {
      path: '/equity-monitors',
      title: 'Equity Monitors',
      element: <EquityMonitors />,
    },
    {
      path: '/knowledge-base',
      title: 'Knowledge Base',
      element: <KnowledgeBase />,
    },
    {
      path: '/signals',
      title: 'Signals',
      element: <Signals />,
    },
    {
      path: '/trade-copier',
      title: 'Copiers',
      element: <TradeCopier />,
    },
    {
      path: '/trade-copier/create-new-trade-copier',
      title: 'Create Copier',
      element: <CreateNewTradeCopier />,
    },
    {
      path: '/trade-copier/edit/:subscriberId/:strategyId',
      title: 'Manage Copier',
      element: <EditTradeCopier />,
    },
    {
      path: '/analysis/analysis-account/:id',
      title: 'Account Analysis',
      element: <AccountAnalysis />,
    },
    {
      path: '/profile',
      title: 'Profile',
      element: <Profile />,
    },
    {
      path: '/email-verification-page-for-update',
      element: <EmailVerificationPageForUpdate />,
    },
    {
      path: '/email-verify-update/:token',
      element: <EmailVerifyUpdate />,
    },
    {
      path: '/whitelabel/dashboard',
      title: 'Whitelabel',
      element: <WhitelabelDashboard />,
    },
    {
      path: '/whitelabel/users',
      title: 'Whitelabel Users',
      element: <WhitelabelUsers />,
    },
    {
      path: '/whitelabel/users/edit/:userId',
      title: 'Profile',
      element: <EditUser />,
    },
    {
      path: '/whitelabel/homepage',
      element: <WhitelabelHomepage />,
    },
    {
      path: '/whitelabel/settings',
      element: <WhitelabelSettings />,
    },
  ],
};

export default coreRoutes;

// export default function CoreRoutes() {
//   return useRoutes([coreRoutes]);
// }
