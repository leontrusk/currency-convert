import React, { useEffect, useState } from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.Header}>
            <h1 className={classes.Title}>Currency Convert</h1>
            <div className={classes.currencyName}>USD</div>
			<div className={classes.currency} data-value="USD">--.--</div>
            <div className={classes.currencyName}>EUR</div>
			<div className={classes.currency} data-value="EUR">--.--</div>
        </div>


    )
}

export default Header;