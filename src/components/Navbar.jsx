import React, { useState } from 'react';
import { menuData } from '../data/menuData';

import { Nav, Logo, NavMenu, NavMenuItem, NavButtonMenu, SignUpButton, LogInutton, NavIcon } from '../styled-components/Navbar'
const Navbar = () => {

    const [scroll, setScroll]= useState(false);
    const [barEvent, setBarEvent]= useState(false);


    window.addEventListener('scroll', () =>  {
        if (window.scrollY > 100 ) setScroll(true)
        else setScroll(false)

    })
    

    return (
        <Nav primary={false} scroll={scroll}>   
            <Logo to='/' scroll={scroll} >beauty</Logo>
            
            <NavMenu barEvent={barEvent} >
                {menuData.map(menuItem=> {
                    return <NavMenuItem scroll={scroll} barEvent={barEvent} to={menuItem.link}> {menuItem.title} </NavMenuItem>
                })  }
            </NavMenu>
            <NavButtonMenu>
                <LogInutton to='/login' scroll={scroll}>Login </LogInutton>
                <SignUpButton to='/signup' scroll={scroll} >Sign up</SignUpButton>
                
            </NavButtonMenu>
            <NavIcon onClick={ (e)=> { setBarEvent(!barEvent) ;console.log(barEvent,'barEvent')} } />
        </Nav>
    );
};

export default Navbar;