import React, { useEffect, useRef, useState } from 'react';
import { HeroSection, HeroWrapper, Button, HeroSlide, HeroSlider, HeroImage, HeroContent, SliderMoveBut, CustomIcon } from '../styled-components/Hero';
// import {ForwardOutlined} from '@mui/icons-material';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

const Hero = ( {slides= []} ) => {

    const [current, setCurrent]= useState(0);
    const [heroScroll, setHeroScroll]= useState(false);

    const timeOut= useRef(null);

    const length= slides.length;

    const forwordHandler= ()=> {
        setCurrent( current === length -1 ? 0 : current+1  )
        console.log('forwordHandler', current);
    }

    const backHandler= ()=> {
        setCurrent ( current === 0 ? length -1 : current-1 ) 
        console.log('backHandler', current);
    }
    
    useEffect( ()=> {
        // console.log(window.screenX, 'window.screenX')
        const nextSlide= () => {
            setCurrent (current => (current === length-1 ? 0: current+1))
        };
        timeOut.current= setTimeout(nextSlide, 2000);
        return () => {
            // console.log('reeeeeeeeer')
            if(timeOut.current){
                // console.log(timeOut.current, 'timeOut')
                clearTimeout(timeOut.current)
            }
        }
    }, [current, length] );

    useEffect(() => {
        getResult();

        console.log('scrolled')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.scrollY])

    const getResult= ()=> {

        let windowScrollX= window.scrollY;

        if( windowScrollX >= 140 ){
            setHeroScroll(true);
            console.log('reeee');
            console.log(heroScroll, 'heroScroll')
        }

        console.log(windowScrollX, 'windowScrollX');
        }
    
    return (
        <HeroSection heroScroll={heroScroll} >
            <HeroWrapper>{
                slides.map( (slide, index)=> {
                    return (
                        index === current && (
                    <HeroSlide key={index}>
                    <HeroSlider>
                    <HeroImage src={slide.image} alt={slide.alt} />
                    <HeroContent> 
                      <h1>{slide.title} </h1>
                      <p>{slide.price}</p>
                      <Button  to={slide.path} >{slide.label} <IoArrowForward /> </Button>
                    </HeroContent>
                    </HeroSlider>
                </HeroSlide>)
                )
                } )
            }
            
            
            <SliderMoveBut>
            <CustomIcon onClick={ (e) => backHandler() } ><IoArrowBack /></CustomIcon>
            
            <CustomIcon onClick={ (e) => forwordHandler()} ><IoArrowForward /></CustomIcon>

                
            </SliderMoveBut>
            </HeroWrapper>

        </HeroSection>
    );
};

export default Hero;