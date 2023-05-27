import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import ZakHero from './assets/hero.png';
import Background from './Background';
import TitleImg from './assets/title.png';

function App() {
  return (
    <>
    <GlobalStyle />
    <Main>
      <Background />
      <Foreground>
        <Header>
          <Title>Standup Comedy House Show!</Title>
        <HeaderImg src={TitleImg} />
        </Header>
        <ContentWrapper>
        <EventInfo>Hello
          <LinkButton href="#">Buy Tickets Now!</LinkButton>
        </EventInfo>
        <Hero src={ZakHero} />
        </ContentWrapper>
      </Foreground>
    </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  background: #000000;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const Foreground = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  z-index: 10;
`;

const Header = styled.header`
  width: 100%;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  padding: 15px;
  width: 100%;
`;

const HeaderImg = styled.img`
  max-width: 700px;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const EventInfo = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 2px solid #000000;
  border-radius: 12px;
  padding: 12px;
  margin: 20px 50px 0 0;
  background-color: #fff;
  box-shadow: 10px 10px 0 #ff00ff;
  transition: all 0.3s;
`;

const LinkButton = styled.a`
color: #ffffff;
border-radius: 5px;
padding: 10px 25px;
font-size: 16px;
font-weight: 500;
background: transparent;
cursor: pointer;
transition: all 0.3s ease;
position: relative;
display: inline-block;
text-decoration: none;
 box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
 7px 7px 20px 0px rgba(0,0,0,.1),
 4px 4px 5px 0px rgba(0,0,0,.1);
outline: none;
  background: #ff00ff;
  border: none;
  z-index: 1;
:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
  background-color: #00fcfd;
  border-radius: 5px;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;
}
:hover {
  color: #000000;
}
:hover:after {
  left: 0;
  width: 100%;
}
:active {
  top: 2px;
}


`;

const Hero = styled.img`
  max-width: 50%;
`;

