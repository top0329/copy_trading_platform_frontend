import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SpeedIcon from '@mui/icons-material/Speed';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import ShareIcon from '@mui/icons-material/Share';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import EmailIcon from '@mui/icons-material/Email';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LayersIcon from '@mui/icons-material/Layers';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';

function MainListItems({ open }) {
  const [openConfigurator, setOpenConfigurator] = React.useState(false);
  const [openHelpCenter, setOpenHelpCenter] = React.useState(false);

  const handleConfiguratorClick = () => {
    setOpenConfigurator(!openConfigurator);
  };

  const handleHelpCenterClick = () => {
    setOpenHelpCenter(!openHelpCenter);
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 240,
        bgcolor: '#1D2127',
        flexGrow: 1,
        paddingLeft: '7px',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Link className="flex flex-row" to={'/dashboard'}>
        <ListItemButton>
          <ListItemIcon>
            <SpeedIcon sx={{ color: '#CCC' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link className="flex flex-row" to={'/signals'}>
        <ListItemButton>
          <ListItemIcon>
            <SignalCellularAltIcon sx={{ color: '#CCC' }} />
          </ListItemIcon>
          <ListItemText primary="Signals" />
        </ListItemButton>
      </Link>
      <ListItemButton onClick={handleConfiguratorClick}>
        <ListItemIcon>
          <SettingsSuggestIcon sx={{ color: '#CCC' }} />
        </ListItemIcon>
        <ListItemText primary="Configurator" />
        {openConfigurator ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={openConfigurator && open}
        timeout="auto"
        unmountOnExit
        sx={{ backgroundColor: '#191C21' }}
      >
        <List component="div" disablePadding>
          <Link className="flex flex-row" to={'/accounts'}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ListIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Accounts" />
            </ListItemButton>
          </Link>
          <Link className="flex flex-row" to={'/trade-copier'}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ShareIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Trade Copier" />
            </ListItemButton>
          </Link>
          <Link className="flex flex-row" to={'/equity-monitors'}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <MonitorHeartIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Equity Monitors" />
            </ListItemButton>
          </Link>
          <Link className="flex flex-row" to={'/email-alerts'}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EmailIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Email Alerts" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
      <Link className="flex flex-row" to={'/analysis'}>
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon sx={{ color: '#CCC' }} />
          </ListItemIcon>
          <ListItemText primary="Analysis" />
        </ListItemButton>
      </Link>
      <Link className="flex flex-row" to={'/signal-followers'}>
        <ListItemButton>
          <ListItemIcon>
            <ForwardRoundedIcon sx={{ color: '#CCC' }} />
          </ListItemIcon>
          <ListItemText primary="Signal Followers" />
        </ListItemButton>
      </Link>
      <Link className="flex flex-row" to={'/signal-provider'}>
        <ListItemButton>
          <ListItemIcon>
            <SwapHorizRoundedIcon sx={{ color: '#CCC' }} />
          </ListItemIcon>
          <ListItemText primary="Signal Provider" />
        </ListItemButton>
      </Link>
      <ListItemButton onClick={handleHelpCenterClick}>
        <ListItemIcon>
          <LayersIcon sx={{ color: '#CCC' }} />
        </ListItemIcon>
        <ListItemText primary="Help Center" />
        {openHelpCenter ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={openHelpCenter && open}
        timeout="auto"
        unmountOnExit
        sx={{ backgroundColor: '#191C21' }}
      >
        <List component="div" disablePadding>
          <Link className="flex flex-row" to={'/knowledge-base'}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LibraryBooksIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Knowledge Base" />
            </ListItemButton>
          </Link>
          <Link className="flex flex-row" to={'/contact-support'}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ChatBubbleIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Contact Support" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}

export default MainListItems;
