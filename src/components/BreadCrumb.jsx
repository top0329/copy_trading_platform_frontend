import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useLocation } from 'react-router-dom';
import { breadcrumbs } from '@material-tailwind/react';

const breadcrumb = {
  "/dashboard": [
    { name: "Dashboard", url: "/dashboard" }
  ],
  "/profile": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Profile", url: "/profile" },
  ],
  "/signals": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Signals", url: "/signals" },
  ],
  "/analysis": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Analysis", url: "/analysis" },
  ],
  "/accounts": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Configurator", url: "" },
    { name: "Accounts", url: "/accounts" },
  ],
  "/trade-copier": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Configurator", url: "" },
    { name: "Trade Copier", url: "/trade-copier" },
  ],
  "/email-alerts": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Configurator", url: "" },
    { name: "Email Alerts", url: "/email-alerts" },
  ],
  "/equity-monitors": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Configurator", url: "" },
    { name: "Equity Monitors", url: "/equity-monitors" },
  ],
  "/signal-followers": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Signal Followers", url: "/signal-followers" },
  ],
  "/signal-provider": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Signal Provider", url: "/signal-provider" },
  ],
  "/whitelabel/dashboard": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Whitelabel", url: "" },
    { name: "Dashboard", url: "/whitelabel/dashboard" },
  ],
  "/whitelabel/users": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Whitelabel", url: "" },
    { name: "Users", url: "/whitelabel/users" },
  ],
  "/whitelabel/homepage": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Whitelabel", url: "" },
    { name: "Homepage", url: "/whitelabel/homepage" },
  ],
  "/whitelabel/settings": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Whitelabel", url: "" },
    { name: "Settings", url: "/whitelabel/settings" },
  ],
  "/knowledge-base": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Help Center", url: "" },
    { name: "Knowledge Base", url: "/knowledge-base" },
  ],
  "/contact-support": [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Help Center", url: "" },
    { name: "Contact Support", url: "/contact-support" },
  ],
}

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {

  const { pathname } = useLocation();

  const breadcrumbs = breadcrumb[pathname].map(item => 
    <Link
      underline="hover"
      key="2"
      color="white"
      href={item.url}
    >
      { item.name }
    </Link>
  );
  
  
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon sx={{ color: 'white' }} fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}