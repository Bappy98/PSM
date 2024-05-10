import { AppBar, Box,Toolbar, IconButton, Avatar, Badge } from "@mui/material";

import { Link } from "react-router-dom";
import {  Notifications } from '@mui/icons-material';

const Topbar = ({ sidebarCollapsed }) => {
 

  return (
    <AppBar
      position="fixed"
      component="div"
      className="wrapperr"
      sx={{
        p: 1,
        width: `calc(100% - ${sidebarCollapsed ? 64 : 240}px)`,
        marginLeft: sidebarCollapsed ? 64 : 240,
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
        Pharmachy Mangagment System
        </Box>
        <Box>
          <IconButton color="inherit" component={Link} to="/notifications">
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit" component={Link} to="/profile">
            <Avatar src="/path/to/avatar.jpg" alt="User Avatar" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
