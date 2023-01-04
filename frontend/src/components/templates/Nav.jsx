import './Nav.css';
import React from 'react';
import NavItem from './NavItem';

export default props =>
    <aside className='menu-area'>
        <nav className="menu">
            <NavItem href="/" icon="home" label="Home" />
            <NavItem href="/users" icon="users" label="Users" />
        </nav>
    </aside>