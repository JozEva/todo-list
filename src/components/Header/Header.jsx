import React from 'react';
import { Typography } from "@mui/material";
import "./Header.scss";

const Header = () => {
  const defaultClassName = "header";
  return (
    <Typography variant="h3" component="h1" className={defaultClassName}>
      to-do list
    </Typography>
  );
};

export default Header;
