import React from 'react';
import AppNavBar from '../app-nav-bar';
export default (props)=>{
    return (
        <div>
        <AppNavBar/>
        {props.children}
        </div>
    );
}