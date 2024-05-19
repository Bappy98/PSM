import { HomeRepairServiceOutlined, ImportContactsOutlined } from "@mui/icons-material";


export const sidebarItems = [
    {
      icon: <ImportContactsOutlined />,
      label: "Dashboard",
      dropdown:false,
      linkto:"/dashboard"
    },
    {
      icon: <HomeRepairServiceOutlined />,
      label: "Company",
      dropdown: true,
      dropdownItems: [
        { label: "Company List",dropIcon:<HomeRepairServiceOutlined /> ,linkTo:"/company/list"  },
        { label: "Company Create",dropIcon:<HomeRepairServiceOutlined />,linkTo:"/company/create" },
       
      
      ],
    },
    {
      icon: <HomeRepairServiceOutlined />,
      label: "Branch",
      dropdown: true,
      dropdownItems: [
        { label: "Create" },
        { label: "Edit" },
      
      ],
    },
    // Add more items as needed
  ];