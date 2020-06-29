import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';


const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem links='/' exact>Burger Builder</NavigationItem>
        { props.isAuthenticated ? <NavigationItem links='/orders'>My Orders</NavigationItem> : null}
        { !props.isAuthenticated 
            ? <NavigationItem links='/auth'>Authenticate</NavigationItem>
            : <NavigationItem links='/logout'>Logout</NavigationItem> }
    </ul>
);

export default navigationItems;