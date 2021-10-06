import { Link } from "react-router-dom";
import styled,{} from "styled-components/macro";

export const HeroSection= styled.section `
    height: 90vh;
    width: 100%;
    position: relative;
    top: 120px;
    opacity: ${ ({heroScroll})=> (heroScroll ? '1' : '0' ) };;
    transition: 1.5s opacity  ;

    ${'' /* left: ${ ({heroScroll})=> (heroScroll ? '100%' : '-100%' ) }; */}
`

export const HeroWrapper= styled.div `
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const HeroSlide= styled.div `
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: 0.3s ease-in-out;

`

export const HeroSlider= styled.div `
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeroImage= styled.img `
    position: absolute;
    top:0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
`
export const HeroContent= styled.div `
    z-index: 7;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: white;

    h1{
        font-size: clamp(1rem, bvw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
    }
    p{
        font-size: 1.2rem;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 0.3rem;
    }
    

`



export const Button= styled(Link) `
    font-family: 'Open Sans Condensed', sans-serif;
    text-decoration: none;
    font-size: 20px;
    width: 20%;
    padding: 6px 0 ;
    background: rgb(228,243,234);
    color: rgb(32,67,69);
    display: flex;
    align-items: center;
    justify-content: center;


    &:hover{
        transition: transform 0.3s;
        background-color: rgb(159,210,181) ;
        transform: translateX(4px);
    }
`

export const SliderMoveBut= styled.div `
    width: 110px;
    position: absolute;
    z-index: 5;
    bottom: 40px;
    display: flex;
    justify-content: space-between;
`
export const CustomIcon= styled.button `
    background: rgb(228,243,234);
    color: rgb(32,67,69);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        transition: background 0.3s;
        background-color: rgb(159,210,181) ;
    }
`