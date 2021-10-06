import React from 'react';
import styled from 'styled-components';

const HeaderSection= styled.div `
    height: 90vh;
    width: 100%;
    background-color: rgb(228,243,234) ;
    position: relative;
    top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    z-index: 0;
    padding: 0 50px ; 
    border-bottom-right-radius: 200px ;
    border-bottom-left-radius: 200px;

    

`
const H1= styled.h1 `
    over-flow: hidden;
    color: rgb(15,28,40);
    font-size: 56px;
    font-weight: 700;

    @media (max-width: 870px){
        font-size: 46px;
        font-weight: 600;
    }
`
const Para= styled.p `
    font-size: 30px;
    margin-top: 15px;

    @media (max-width: 870px){
        font-size: 22px;
    }
`

const Header = () => {
    return (
        <HeaderSection>
            <H1>Search What’s Possible. Find What Matters.</H1>
            <Para>Beauty is an expert technology firm specializing in Real Estate solutions for people and businesses across the world.</Para>
        </HeaderSection>
    );
};

export default Header;