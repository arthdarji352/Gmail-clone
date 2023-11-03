import React from "react";
import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import {
  Menu as MenuIcon,
  Search,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";

const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

const Searchwrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 80,
  borderRadius: 20,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  "& > svg": {
    marginLeft: 20,
  },
});
const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <MenuIcon color="action" />
        <img
          src={gmailLogo}
          alt="gmailLogo"
          style={{ width: 110, marginLeft: 15 }}
        />
        <Searchwrapper>
          <Search color="action" />
          <InputBase placeholder="Search Mail" />
          <Tune color="action" />
        </Searchwrapper>
        <OptionWrapper>
          <HelpOutlineOutlined color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
        </OptionWrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
