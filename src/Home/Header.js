import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Home,
  LocationOn,
  Hiking,
  Info,
  ContactMail,
  Login,
  Phone,
} from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import logo from "../Images/logo.jpg";

/* ================= STYLES ================= */

const HeaderContainer = styled(AppBar)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.75)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 999,
  padding: "10px 20px",
  transition: "all 0.3s ease",

  [theme.breakpoints.down("sm")]: {
    padding: "10px 12px",
  },
}));

const ToolbarContainer = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  flexShrink: 0,

  [theme.breakpoints.down("sm")]: {
    gap: "8px",
  },
}));

const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  flex: 1,
  marginLeft: "30px",
  marginRight: "30px",

  [theme.breakpoints.down("lg")]: {
    gap: "2px",
    marginLeft: "10px",
    marginRight: "10px",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  color: "white",
  cursor: "pointer",
  padding: "8px 12px",
  fontWeight: 600,
  transition: "0.3s ease",

  "&:hover": {
    color: "#90ee90",
  },

  [theme.breakpoints.down("lg")]: {
    padding: "6px 8px",
    fontSize: "14px",
  },
}));

const ContactBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  minWidth: "170px",
  maxWidth: "190px",
  flexShrink: 0,
  marginLeft: "auto",

  [theme.breakpoints.down("lg")]: {
    minWidth: "150px",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "white",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

/* ================= COMPONENT ================= */

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", icon: <Home fontSize="small" />, id: "home" },
    {
      label: "Destinations",
      icon: <LocationOn fontSize="small" />,
      id: "destinations",
    },
    {
      label: "Package",
      icon: <LocationOn fontSize="small" />,
      id: "packages",
    },
    {
      label: "Adventures",
      icon: <Hiking fontSize="small" />,
      id: "adventures",
    },
    {
      label: "About Us",
      icon: <Info fontSize="small" />,
      id: "about",
    },
    {
      label: "Contact",
      icon: <ContactMail fontSize="small" />,
      id: "contact",
    },
    {
      label: "Login",
      icon: <Login fontSize="small" />,
      id: "login",
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMobileOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <ToolbarContainer>
          {/* Logo */}
          <LogoContainer>
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <Typography
              sx={{
                color: "white",
                fontWeight: 700,
                fontSize: {
                  xs: "22px",
                  sm: "28px",
                  md: "34px",
                },
                whiteSpace: "nowrap",
              }}
            >
              Yuva Payana
            </Typography>
          </LogoContainer>

          {/* Desktop Navigation */}
          <NavContainer>
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                onClick={() => scrollToSection(item.id)}
              >
                {item.icon}

                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </Typography>
              </NavItem>
            ))}
          </NavContainer>

          {/* Phone */}
          <ContactBox>
            <Phone
              sx={{
                color: "white",
                fontSize: "20px",
              }}
            />

            <Typography
              sx={{
                color: "white",
                fontWeight: 700,
                whiteSpace: "nowrap",
                fontSize: "15px",
              }}
            >
              +91 7090037535
            </Typography>
          </ContactBox>

          {/* Mobile Menu */}
          <MobileMenuButton onClick={toggleDrawer}>
            <MenuIcon />
          </MobileMenuButton>
        </ToolbarContainer>
      </HeaderContainer>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
      >
        <Box
          sx={{
            width: 260,
            pt: 2,
          }}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  {item.icon}
                  <ListItemText primary={item.label} />
                </Box>
              </ListItem>
            ))}

            {/* Mobile Phone */}
            <ListItem>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 1,
                }}
              >
                <Phone />
                <Typography>
                  +91 7090037535
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;