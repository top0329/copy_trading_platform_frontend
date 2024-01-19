import { lazy } from 'react';
import AuthGuard from '../utils/AuthGuard';
import Loadable from '../third-party/Loadable';

const DefaultLayout = Loadable(lazy(() => import('../layouts/DefaultLayout')));
const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));
const Accounts = Loadable(lazy(() => import('../pages/Accounts')));
const AddAccount = Loadable(lazy(() => import('../pages/Accounts/AddAccount')));
const Analysis = Loadable(lazy(() => import('../pages/Analysis')));
const ContactSupport = Loadable(lazy(() => import('../pages/ContactSupport')));
const EmailAlerts = Loadable(lazy(() => import('../pages/EmailAlerts')));
const EquityMonitors = Loadable(lazy(() => import('../pages/EquityMonitors')));
const KnowledgeBase = Loadable(lazy(() => import('../pages/KnowledgeBase')));
const Signals = Loadable(lazy(() => import('../pages/Signals')));
const TradeCopier = Loadable(lazy(() => import('../pages/TradeCopier')));
const CreateNewTradeCopier = Loadable(
  lazy(() => import('../pages/TradeCopier/CreateNewTradeCopier'))
);
const EditTradeCopier = Loadable(
  lazy(() => import('../pages/TradeCopier/EditTradeCopier'))
);
const SignalFollowers = Loadable(
  lazy(() => import('../pages/SignalFollowers'))
);
const SignalProvider = Loadable(lazy(() => import('../pages/SignalProvider')));
const ConfigurePaymentProcessor = Loadable(lazy(() => import('../pages/SignalProvider/ConfigurePaymentProcessor')))
const CreateSignalProvider = Loadable(
  lazy(() => import('../pages/SignalProvider/CreateSignalProvider'))
);
const FollowerTerms = Loadable(
  lazy(() => import('../pages/SignalProvider/FollowerTerms'))
);
const EditAccount = Loadable(
  lazy(() => import('../pages/Accounts/EditAccount'))
);
const EditSignalProvider = Loadable(
  lazy(() => import('../pages/SignalProvider/EditSignalProvider'))
);
const AccountAnalysis = Loadable(
  lazy(() => import('../pages/Analysis/AccountAnalysis'))
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

const coreRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <DefaultLayout />
    </AuthGuard>
  ),
  children: [
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
  ],
};

export default coreRoutes;

// export default function CoreRoutes() {
//   return useRoutes([coreRoutes]);
// }
