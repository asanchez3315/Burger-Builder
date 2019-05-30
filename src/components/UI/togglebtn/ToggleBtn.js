import React from 'react'
import classes from './toggleBtn.module.css'

const toggleBtn = (props) => (

    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>

    </div>
)

export default toggleBtn

