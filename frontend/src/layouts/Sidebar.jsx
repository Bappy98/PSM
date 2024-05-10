// Sidebar.js
import { Menu as MenuIcon ,Home as HomeIcon} from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import  { useState } from "react";

const Sidebar = ({ onCollapseChange }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    onCollapseChange(!collapsed); // Notify the parent component about collapse change
  };

  // Determine the selected component based on the current URL path

  return (
    <Drawer
      sx={{
        width: collapsed ? 64 : 240, // Adjust width when collapsed
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? 64 : 240, // Adjust width when collapsed
          boxSizing: "border-box",
          marginTop: "4px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem button onClick={toggleCollapse}>
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          {/* Show/hide text based on collapse state */}
          {!collapsed && (
            <ListItemText
              className="bg-green-900 text-white text-center rounded py-1  font-extrabold uppercase bg-"
              primary="PSM"
            />
          )}
        </ListItem>
        <ListItem button>
     
     <ListItemIcon>
             <HomeIcon />
           </ListItemIcon>
           <ListItemText primary="Market Home" />
    
    
         
         </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
