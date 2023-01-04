import './NavItem.css';
import React from 'react';
import { Link } from 'react-router-dom';

function reUse(props){
    return props.href.split('/')[1]
}

export default props => 
    <div className='menu-links'>
        <Link to={props.href}>
            <i className={`fa fa-${props.icon ? props.icon: reUse(props)}`}></i>
            {props.label}
        </Link>
    </div>