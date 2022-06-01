import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material";

import {
  AddCircleOutlineOutlined,
  SubjectOutlined,
  AccountCircle,
} from "@mui/icons-material";

import { useLocation, useNavigate } from "react-router-dom";

import { useTheme } from "@mui/material";
import format from "date-fns/format";

const drawerWidth = 240;

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "My notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  const theme = useTheme();
  const classes = {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
      ".MuiDrawer-paper": {
        width: drawerWidth,
      },
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(3),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },

    date: {
      flexGrow: 1,
    },

    avatar: {
      marginLeft: theme.spacing(2),
    },
  };

  return (
    <Box sx={classes.root}>
      <AppBar sx={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography sx={classes.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>tr43om</Typography>
          <Avatar src={AccountCircle} sx={classes.avatar} />
        </Toolbar>
      </AppBar>
      <Drawer sx={classes.drawer} variant="permanent" anchor="left">
        <Typography variant="h5" sx={classes.title}>
          Notes
        </Typography>
        {/* list / links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => navigate(item.path)}
              sx={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={classes.page}>
        <Box sx={theme.mixins.toolbar} />
        {children}
      </Box>
    </Box>
  );
};
export default Layout;
