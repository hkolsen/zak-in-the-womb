import React from 'react';
import styled, { keyframes } from 'styled-components';
import StarsBG from './assets/stars.png';
import TwinklingBG from './assets/twinkling.png';
import CloudsBG from './assets/clouds.png'

function Background() {
  return (
    <Container>
        <Stars />
        <Twinkling />
        <Clouds />
    </Container>
  );
}

export default Background;

const MoveBackground = keyframes`
    from {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    to { 
        -webkit-transform: translate3d(1000px, 0px, 0px);
    }
`;

const Container = styled.div`
    position: fixed;
    top: 0;
    left:0;
    bottom: 0;
    right: 0;
    z-index: 1;
`;

const Stars = styled.div`
    background: black url(${StarsBG}) repeat;
    position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: block;
   z-index: 0;
`;

const Twinkling = styled.div`
    width:10000px;
    height: 100%;
    background: transparent url(${TwinklingBG}) repeat;
    background-size: 1000px 1000px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    animation: ${MoveBackground} 70s linear infinite;
`;

const Clouds = styled.div`
    width:10000px;
    height: 100%;
    background: transparent url(${CloudsBG}) repeat;
    background-size: 1000px 1000px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    animation: ${MoveBackground} 150s linear infinite;
`;