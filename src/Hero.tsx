import React from 'react';
import styled, { keyframes } from 'styled-components';
import ZakHero from './assets/zak-center.png';
import Hero01 from './assets/hero01.png';
import Hero02 from './assets/hero02.png';
import Hero03 from './assets/hero03.png';
import Hero04 from './assets/hero04.png';
import Hero05 from './assets/hero05.png';

function Hero() {
  return (
    <HeroWrapper>
        <HeroTop src={ZakHero} />
        <HeroImg05 src={Hero05} />
        <HeroImg04 src={Hero04} />
        <HeroImg03 src={Hero03} />
        <HeroImg02 src={Hero02} />
        <HeroImg01 src={Hero01} />
    </HeroWrapper>
  );
}

export default Hero;


const HeroWrapper = styled.section`
  margin: -125px 0 0;
  width: 50%;
  @media (max-width: 900px) {
    margin: 20px auto;
    padding: 0 25px;
    width: 90%;
  }
`;

const Clockwise = keyframes`
    100% {  
        transform:rotate(360deg); 
    } 
`;

const CounterClockwise = keyframes`
    100% {  
        transform:rotate(-360deg); 
    } 
`;

const HeroTop = styled.img`
    position: absolute;
    z-index: 10;
    max-width: 500px;
    width: 100%;
`;

const HeroImg01 = styled.img`
    animation: ${Clockwise} 10000ms linear infinite;
    position: absolute;
    z-index: 1;
    max-width: 500px;
    width: 100%;
`;

const HeroImg02 = styled.img`
    animation: ${CounterClockwise} 10000ms linear infinite;
    position: absolute;
    z-index: 2;
    max-width: 500px;
    width: 100%;
`;

const HeroImg03 = styled.img`
    animation: ${Clockwise} 10000ms linear infinite;
    position: absolute;
    z-index: 3;
    max-width: 500px;
    width: 100%;
`;

const HeroImg04 = styled.img`
    animation: ${CounterClockwise} 10000ms linear infinite;
    position: absolute;
    z-index: 4;
    max-width: 500px;
    width: 100%;
`;

const HeroImg05 = styled.img`
    animation: ${Clockwise} 10000ms linear infinite;
    position: absolute;
    z-index: 5;
    max-width: 500px;
    width: 100%;
`;
