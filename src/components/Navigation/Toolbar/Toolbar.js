import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuItem from '../SideDrawer/MenuItem/MenuItem';


const toolbar = props => (
    <header className={classes.Toolbar}>
        <MenuItem clicked={props.openMenu} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;