import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components/macro';
import {HiMenu} from 'react-icons/hi';

/*
colors
rgb(228,243,234)
rgb(32,67,69)
#68bd90
rgb(49,125,79)

logo => rgb(49,125,79)
sign => rgb(159,210,181)
log color => rgb(15,28,40)

item=> rgb(84,89,95)



*/

// as a var called in comps
const NavLink= css `
    color: ${ ({scroll, barEvent}) =>  (scroll || barEvent ? 'rgb(228,243,234)'  : 'rgb(84,89,95)')};
    font-family: 'Open Sans Condensed', sans-serif;
    text-decoration: none;
    font-size: 20px;
`
// comps

export const Nav= styled.nav`
    background: ${ ({scroll}) =>   (scroll ? 'rgb(32,67,69)' : 'rgb(228,243,234)') };
    width:100%;
    height: 80px;
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-around;;
    padding: 0 30px ;

    @media (max-width: 870px){
        
    }
`;

export const Logo= styled(Link)`
    ${NavLink}
    color: ${ ({scroll}) =>  (scroll ? 'rgb(228,243,234)' : 'rgb(49,125,79)')};
    font-weight: bold;
    font-size: 45px;
`;

export const NavMenu= styled.div `
    width: 25%;
    display: flex;
    justify-content: space-around;
    
    @media (max-width: 870px){
        display: ${ ({barEvent}) => (barEvent? 'flex' : 'none')};
        width: 20%;
        background: rgb(32,67,69); 
        height: 300px;
        text-align: center;
        flex-direction: column;
        position: absolute;
        top: 80px;
        right: 0;
    }
    
`


export const NavMenuItem= styled(Link) `
    ${NavLink}
    font-size: 20px;

`

export const NavButtonMenu= styled.div `
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    

    @media (max-width: 870px){
        width: 22%;
    }
`

export const SignUpButton= styled(Link) `
    ${NavLink}
    padding: 8px 16px ;
    border-radius: 5px;
    background-color: rgb(159,210,181,0.5) ;
    color:rgb(15,28,40);

    &:hover{
        transition: background 0.3s;
        background-color: rgb(159,210,181) ;
        transform: translateY(-4px);
    }
`;

export const NavIcon= styled(HiMenu) `
    color: ${ ({scroll}) =>  (scroll ? 'rgb(228,243,234)' : 'rgb(159,210,181)')};
    font-size: 40px;
    cursor: pointer;
    display: none;

    @media (max-width: 870px){
        display: block;
    }
`

export const LogInutton= styled(Link) `
    ${NavLink}
   
`

