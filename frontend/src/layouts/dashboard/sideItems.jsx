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
        { label: "Company List",dropIcon:<HomeRepairServiceOutlined /> ,linkTo:"/company-list"  },
        { label: "Company Create",dropIcon:<HomeRepairServiceOutlined />,linkTo:"/company-create" },
       
      
      ],
    },
    {
      icon: <HomeRepairServiceOutlined />,
      label: "Branch",
      dropdown: true,
      dropdownItems: [
        { label: "user Register",dropIcon:<HomeRepairServiceOutlined /> ,linkTo:"/branch-register"   },
        { label: "Create Branch",dropIcon:<HomeRepairServiceOutlined /> ,linkTo:"/branch-create"   },
        { label: "Branch List",dropIcon:<HomeRepairServiceOutlined /> ,linkTo:"/branches"   },
      
      ],
    },
    // {
    //   icon: <HomeRepairServiceOutlined />,
    //   label: "Generics",
    //   dropdown: true,
    //   dropdownItems: [
    //     { label: "Create Generics",dropIcon:<HomeRepairServiceOutlined /> ,linkTo:"/generics-create"   },
    //     { label: "Generics List",dropIcon:<HomeRepairServiceOutlined /> ,linkTo:"/branch"   },
      
    //   ],
    // },
    // {
    //   icon: <HomeRepairServiceOutlined />,
    //   label: "Dosages",
    //   dropdown: true,
    //   dropdownItems: [
    //     { label: "Create Dosages",dropIcon:<HomeRepairServiceOutlined /> ,linkTo:"/dosages-create"   },
    //     { label: "Dosages List",dropIcon:<HomeRepairServiceOutlined /> ,linkTo:"/dosages"   },
      
    //   ],
    // },
    {
      icon: <HomeRepairServiceOutlined />,
      label: "Medicine",
      dropdown: true,
      dropdownItems: [
        { label: "Medicine Add",dropIcon:<HomeRepairServiceOutlined /> ,linkTo:"/medicine-create"   },
        { label: "Create",dropIcon:<HomeRepairServiceOutlined /> ,linkTo:"/branch-create"   }
      
      ],
    },
    // Add more items as needed
  ];