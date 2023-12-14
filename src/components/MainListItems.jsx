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

function MainListItems() {
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
      <ListItemButton>
        <Link className="flex flex-row" to={'/dashboard'}>
          <ListItemIcon>
            <SpeedIcon style={{ color: '#CCC' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link className="flex flex-row" to={'/signals'}>
          <ListItemIcon>
            <SignalCellularAltIcon style={{ color: '#CCC' }} />
          </ListItemIcon>
          <ListItemText primary="Signals" />
        </Link>
      </ListItemButton>
      <ListItemButton onClick={handleConfiguratorClick}>
        <ListItemIcon>
          <SettingsSuggestIcon style={{ color: '#CCC' }} />
        </ListItemIcon>
        <ListItemText primary="Configurator" />
        {openConfigurator ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={openConfigurator}
        timeout="auto"
        unmountOnExit
        sx={{ backgroundColor: '#191C21' }}
      >
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Link className="flex flex-row" to={'/accounts'}>
              <ListItemIcon>
                <ListIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Accounts" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link className="flex flex-row" to={'/trade-copier'}>
              <ListItemIcon>
                <ShareIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Trade Copier" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link className="flex flex-row" to={'/equity-monitors'}>
              <ListItemIcon>
                <MonitorHeartIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Equity Monitors" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link className="flex flex-row" to={'/email-alerts'}>
              <ListItemIcon>
                <EmailIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Email Alerts" />
            </Link>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <Link className="flex flex-row" to={'/analysis'}>
          <ListItemIcon>
            <SearchIcon style={{ color: '#CCC' }} />
          </ListItemIcon>
          <ListItemText primary="Analysis" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link className="flex flex-row" to={'/signal-followers'}>
          <ListItemIcon>
            <ForwardRoundedIcon style={{ color: '#CCC' }} />
          </ListItemIcon>
          <ListItemText primary="Signal Followers" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link className="flex flex-row" to={'/signal-provider'}>
          <ListItemIcon>
            <SwapHorizRoundedIcon style={{ color: '#CCC' }} />
          </ListItemIcon>
          <ListItemText primary="Signal Provider" />
        </Link>
      </ListItemButton>
      <ListItemButton onClick={handleHelpCenterClick}>
        <ListItemIcon>
          <LayersIcon style={{ color: '#CCC' }} />
        </ListItemIcon>
        <ListItemText primary="Help Center" />
        {openHelpCenter ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={openHelpCenter}
        timeout="auto"
        unmountOnExit
        sx={{ backgroundColor: '#191C21' }}
      >
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Link className="flex flex-row" to={'/knowledge-base'}>
              <ListItemIcon>
                <LibraryBooksIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Knowledge Base" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link className="flex flex-row" to={'/contact-support'}>
              <ListItemIcon>
                <ChatBubbleIcon sx={{ color: '#ccc' }} />
              </ListItemIcon>
              <ListItemText primary="Contact Support" />
            </Link>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

export default MainListItems;
