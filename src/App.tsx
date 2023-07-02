import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Background from './Background';
import TitleImg from './assets/title.png';
import Price from './assets/price.png';
import MapImg from './assets/map.png';
import Hero from './Hero';
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
        <ContentWrapper reverse={false}>
        <EventInfo>
        <MobilePriceImg src={Price} />
          <p>Join us Sunday, July 2nd in NE Portland for an evening with <a href="https://www.instagram.com/zaktoscani/" target="_blank" rel="noreferrer">Zak Toscani</a> and opener Lonnie Bruhn. Hosted by Barbara Holmes.</p>
          <h3>Event Details</h3>
          <ul>
            <li>Doors at 6:30, Show at 7pm</li>
            <li>Address provided with ticket purchase</li>
            <li>Bring your own chair or blanket</li>
            <li>Refreshments available for purchase (Alcohol + NA)</li>
            <li>No ticket, no entry</li>
          </ul>
          <p>To buy tickets, <a href="https://account.venmo.com/u/megan-withey-1">send payment of $20 to venmo.com/megan-withey-1</a>. If purchasing more than one ticket, please add a note. By purchasing a ticket, you are agreeing to the Code of Conduct*.</p>
          <LinkButton path="https://account.venmo.com/u/megan-withey-1" label="Buy Tickets Now!" />
        </EventInfo>
        <DesktopPriceImg src={Price} />
         <Hero />
        </ContentWrapper>
        <ContentWrapper reverse>
        <Map src={MapImg} />
        <EventInfo>
          <h3>Location Details</h3>
          <strong>Exact address will be supplied after receipt of payment to Venmo.</strong>
          <ul>
            <li>Entrance will be on the left-hand side of the house.</li>
            <li>Please note that this is a private residence, so respect the neighbors by being chill.</li>
            <li>Parking is limited, so roll with a bud!</li>
            </ul>
          <LinkButton path="https://account.venmo.com/u/megan-withey-1" label="Buy Tickets Now!" />
        </EventInfo>
        </ContentWrapper>
        <Footer>
          <p>*Just don't be a dick.</p>
        </Footer>
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
