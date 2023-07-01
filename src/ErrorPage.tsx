import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Background from './Background';
import TitleImg from './assets/title.png';
import LinkButton from './LinkButton';

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
        <ContentWrapper reverse>
        <EventInfo>
          <h3>Uh oh</h3>
          <strong>Page not found</strong>
          <p>Sorry about that!</p>
          <LinkButton path="/" label="Return to home" />
        </EventInfo>
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
  max-width: 1000px;
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
  width: 90%;
  max-width: 700px;
  display: block;
  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

const ContentWrapper = styled.section<{ reverse: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
  }
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
  position: relative;
  @media (max-width: 900px) {
    width: 90%;
    max-width: 700px;
    margin: 15px auto;
  }
  p {
    font-size: 16px;
    line-height: 130%;
    margin: 0 15px 15px 0;
  }
  strong {
    font-size: 18px;
    font-weight: 500;
    line-height: 130%;
    margin: 15px 0 5px;
  }
  h3 {
    font-size: 20px;
  }
  ul {
    font-size: 16px;
    line-height: 1.5em;
    margin: 5px 0 15px;
    padding: 0;
    li {
      list-style: none;
		  position: relative;
		  padding: 0 0 0 20px;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 6px;
        height: 5px;
        width: 5px;
        border: 1px solid #ff00ff;
        border-width: 2px 2px 0 0;
        transform: rotate(45deg);
      }
    }
  }
  a {
    color: #000000;
    text-decoration-color: #ff00ff;
    transition: all 0.3s ease;
    :hover {
      color: #ff00ff;
      font-weight: 700;
    }
  }
`;

const Map = styled.img`
  border: 3px solid #000000;
  border-radius: 12px;  
  width: 50%;
  margin: 20px 20px 0 0;
  @media (max-width: 900px) {
    margin: 20px auto;
    width: 90%;
  }
`;

const DesktopPriceImg = styled.img`
  display: block;
  position: absolute;
  top: 100px;
  right: 0;
  max-width: 250px;
  z-index: 15;
  @media (max-width: 900px) {
    display: none;
  }
`;

const MobilePriceImg = styled.img`
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: absolute;
    top: -140px;
    right: 0;
    max-width: 150px;
    z-index: 15;
  }
  @media (max-width: 600px) {
    display: block;
    position: absolute;
    top: -90px;
    right: 0;
    max-width: 100px;
    z-index: 15;
  }
`;

const Footer = styled.footer`
  padding: 20px;
  p {
    color: #FFFFFF;
    font-size: 14px;
    text-align: center;
  }
`;
