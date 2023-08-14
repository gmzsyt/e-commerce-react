import React, { useState } from "react";
import { Notifications, Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../helper/logo.png";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchs = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


export default function Navbar() {

  const [open, setOpen] = useState(false)
  return (
    <div>
      <AppBar position="sticky">
        <StyledToolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Link to="/">
              <img src={logo} alt="logo" style={{ width: "100px" }} />
            </Link>
          </Box>
          <SearchIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Searchs>
            <InputBase placeholder="SEARCH.." />
          </Searchs>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Link to="/checkout"><ShoppingCartIcon sx={{color:"white"}} /></Link>
              
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <PersonIcon onClick = {(e) => setOpen(true)} />
          </Icons>
          <UserBox>
            <PersonIcon onClick = {(e) => setOpen(true)} />
          </UserBox>
        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem><Link style={{textDecoration:"none",color:"black"}} to="/login">Login</Link> </MenuItem>
        <MenuItem><Link style={{textDecoration:"none",color:"black"}} to="/register">Register</Link> </MenuItem>
      </Menu>
      </AppBar>
    </div>
  );
}
