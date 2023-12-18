import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Accounts = lazy(() => import('../pages/Accounts'));
const AddAccount = lazy(() => import('../pages/Accounts/AddAccount'));
const Analysis = lazy(() => import('../pages/Analysis'));
const ContactSupport = lazy(() => import('../pages/ContactSupport'));
const EmailAlerts = lazy(() => import('../pages/EmailAlerts'));
const EquityMonitors = lazy(() => import('../pages/EquityMonitors'));
const KnowledgeBase = lazy(() => import('../pages/KnowledgeBase'));
const Signals = lazy(() => import('../pages/Signals'));
const TradeCopier = lazy(() => import('../pages/TradeCopier'));
const SignalFollowers = lazy(() => import('../pages/SignalFollowers'));
const SignalProvider = lazy(() => import('../pages/SignalProvider'));
const CreateSignal = lazy(() => import('../pages/SignalProvider/CreateSignal'));

const coreRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/accounts',
    title: 'Accounts',
    component: Accounts,
  },
  {
    path: '/accounts/add-account',
    title: 'Add Account',
    component: AddAccount,
  },
  {
    path: '/analysis',
    title: 'Analysis',
    component: Analysis,
  },
  {
    path: '/signal-followers',
    title: 'Signal Followers',
    component: SignalFollowers,
  },
  {
    path: '/signal-provider',
    title: 'Signal Provider',
    component: SignalProvider,
  },
  {
    path: '/signal-provider/create-signal',
    title: 'Create Signal',
    component: CreateSignal,
  },
  {
    path: '/contact-support',
    title: 'Support',
    component: ContactSupport,
  },
  {
    path: '/email-alerts',
    title: 'Email Alerts',
    component: EmailAlerts,
  },
  {
    path: '/equity-monitors',
    title: 'Equity Monitors',
    component: EquityMonitors,
  },
  {
    path: '/knowledge-base',
    title: 'Knowledge Base',
    component: KnowledgeBase,
  },
  {
    path: '/signals',
    title: 'Signals',
    component: Signals,
  },
  {
    path: '/trade-copier',
    title: 'Copiers',
    component: TradeCopier,
  },
];

const routes = [...coreRoutes];
export default routes;
