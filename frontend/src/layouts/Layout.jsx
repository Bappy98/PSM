import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarCollapseChange = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <div>
      <Topbar sidebarCollapsed={sidebarCollapsed} />
      <Box sx={{ display: "flex" }}>
        <Sidebar onCollapseChange={handleSidebarCollapseChange} />;
        <Box
          className="content"
          sx={{
            flexGrow: 1,
            marginTop: "90px",
            padding: "15px",
            transition: "margin-left 0.3s ease",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
