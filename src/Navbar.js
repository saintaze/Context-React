import React, { Component, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { ThemeContext } from './ThemeContext';
import { LanguageContext, withLanguageContext } from './LanguageContext';
import styles from './NavbarStyles';

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
};

const Navbar = props => {
    const { classes } = props;
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);
    const { search, flag } = content[lang]
    return (
        <div className={classes.root}>
          <AppBar position='static' color={isDarkMode ? 'primary' : 'default'}>
            <Toolbar>
              <IconButton className={classes.menuButton} color='inherit'>
                <span>{flag}</span>
              </IconButton>
              <Typography className={classes.title} variant='h6' color='inherit'>
                App Title
              </Typography>
              <Switch onChange={toggleTheme} />
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder={search + '...'}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
            </Toolbar>
          </AppBar>
        </div>
    );
}
export default withStyles(styles)(Navbar);