import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import ToggleBtn from '../../togglebtn/ToggleBtn'

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <ToggleBtn clicked={props.drawerToggleClick} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar