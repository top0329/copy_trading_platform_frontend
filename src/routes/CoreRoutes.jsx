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
const SignalFollowers = Loadable(
  lazy(() => import('../pages/SignalFollowers'))
);
const SignalProvider = Loadable(lazy(() => import('../pages/SignalProvider')));
const CreateSignal = Loadable(
  lazy(() => import('../pages/SignalProvider/CreateSignal'))
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
      // title: 'Dashboard',
      element: <Dashboard />,
    },
    {
      path: '/accounts',
      // title: 'Accounts',
      element: <Accounts />,
    },
    {
      path: '/accounts/add-account',
      // title: 'Add Account',
      element: <AddAccount />,
    },
    {
      path: '/analysis',
      // title: 'Analysis',
      element: <Analysis />,
    },
    {
      path: '/signal-followers',
      // title: 'Signal Followers',
      element: <SignalFollowers />,
    },
    {
      path: '/signal-provider',
      // title: 'Signal Provider',
      element: <SignalProvider />,
    },
    {
      path: '/signal-provider/create-signal',
      // title: 'Create Signal',
      element: <CreateSignal />,
    },
    {
      path: '/contact-support',
      // title: 'Support',
      element: <ContactSupport />,
    },
    {
      path: '/email-alerts',
      // title: 'Email Alerts',
      element: <EmailAlerts />,
    },
    {
      path: '/equity-monitors',
      // title: 'Equity Monitors',
      element: <EquityMonitors />,
    },
    {
      path: '/knowledge-base',
      // title: 'Knowledge Base',
      element: <KnowledgeBase />,
    },
    {
      path: '/signals',
      // title: 'Signals',
      element: <Signals />,
    },
    {
      path: '/trade-copier',
      // title: 'Copiers',
      element: <TradeCopier />,
    },
    {
      path: '/trade-copier/create-new-trade-copier',
      // title: 'Create Copier',
      element: <CreateNewTradeCopier />,
    },
  ],
};

export default coreRoutes;

// export default function CoreRoutes() {
//   return useRoutes([coreRoutes]);
// }
