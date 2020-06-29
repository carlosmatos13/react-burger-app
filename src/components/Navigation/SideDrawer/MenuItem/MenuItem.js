import React from 'react';
import classes from './MenuItem.module.css';

const menuItem = props => (
    <div onClick={props.clicked} className={classes.MenuItem}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menuItem;