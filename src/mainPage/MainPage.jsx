import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DashboardPage from '../pages/home/dashboardPage/DashboardPage';
import { TextField } from '@mui/material';

const NAVIGATION = [
  // {
  //   kind: 'header',
  //   title: 'Main items',
  // },
  // {
  //   segment: 'dashboard',
  //   title: 'Dashboard',
  //   icon: <DashboardIcon />,
  // },
  // {
  //   segment: 'orders',
  //   title: 'Orders',
  //   icon: <ShoppingCartIcon />,
  // },
  // {
  //   kind: 'divider',
  // },
  // {
  //   kind: 'header',
  //   title: 'Analytics',
  // },
  {
    segment: 'home',
    title: 'Home',
    icon: <HomeTwoToneIcon />,
    children: [
      {
        segment: 'dashboard',
        title: 'Dashboard',
        
      },
      {
        segment: 'analytics',
        title: 'Analytics',
        
      },
    ],
  },
  // pages
  {
    segment: 'pages',
    title: 'Pages',
    icon: <DescriptionIcon />,
    children: [
      {
        segment: 'profile',
        title: 'Profile',
        children: [
          {
            segment: 'profile-overview',
            title: 'Profile overview',
          },
          {
            segment: 'teams',
            title: 'Teams',
          },
          {
            segment: 'all-projects',
            title: 'All Projects',
          },
        ]
      },
      {
        segment: 'users',
        title: 'Users',    children: [
          {
            segment: 'reports',
            title: 'Reports',
          },
          {
            segment: 'new-user',
            title: 'New User',
          }
        ]
      },
      {
        segment: 'account',
        title: 'Account',
        children: [
          {
            segment: 'setting',
            title: 'Setting',
          },
          {
            segment: 'billing',
            title: 'Billing',
          },
          {
            segment: 'invoice',
            title: 'Invoice',
          },
          {
            segment: 'security',
            title: 'Security',
          },
        ]
      },
      {
        segment: 'projects',
        title: 'Projects',
        children: [
          {
            segment: 'general',
            title: 'General',
          },
          {
            segment: 'timeline',
            title: 'Timeline',
          },
          {
            segment: 'new-project',
            title: 'New Project',
          },
        ]
      },{
        segment: 'pricing-page',
        title: 'Pricing Page',
      },
      {
        segment: 'charts',
        title: 'Charts',
      },{
        segment: 'notification',
        title: 'Notification',
      },
      {
        segment: 'chat',
        title: 'Chat',
      },
    ],
  },{
    segment: 'applications',
    title: 'Applications',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'kanban',
        title: 'Kanban',
      },
      {
        segment: 'wizard',
        title: 'Wizard',
      },
      {
        segment: 'data-tables',
        title: 'Data tables',
      },
      {
        segment: 'calendar',
        title: 'Calendar',
      },
    ],
  },{
    segment: 'ecommerce',
    title: 'E-commerce',
    icon: <BarChartIcon />,
    children: [
      {
          kind: 'header',
           title: 'overview',
         },
      {
        segment: 'products',
        title: 'Products',
        children: [
          {
            segment: 'new-product',
            title: 'New Products',
          },
          {
            segment: 'edit-product',
            title: 'Edit Products',
          },
          {
            segment: 'product-list',
            title: 'Product List',
          }
          
        ],
      },
      {
        segment: 'orders',
        title: 'Orders',
        children: [
          {
            segment: 'order-list',
            title: 'Order list',
          
          },
          {
            segment: 'order-detail',
            title: 'Order Detail',
          },
        ],
      },
    ],
  },{
    segment: 'authentication',
    title: 'Authentication',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        
        
      },
      {
        segment: 'traffic',
        title: 'traffic',
       
      },
    ],
  },
 
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

const disabled={
  width:"100px"
}

// }

export default function MainPage(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      sx={{width:'400px'}}
      disabled={disabled}
    >
      <DashboardLayout  >
        
        <PageContainer>
          ryernioqnvrpqnv
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
