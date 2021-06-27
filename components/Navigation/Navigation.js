import React from 'react'
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./Navgation.styles";

const Navigation = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar position="relative">
            <Toolbar>
              <Typography variant="body1" noWrap className={classes.home}>
                Home
              </Typography>
              <Typography variant="body1" noWrap className={classes.cards}>
                Branded-Cards
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Toolbar>
          </AppBar>
        </div>)
}

export default Navigation
