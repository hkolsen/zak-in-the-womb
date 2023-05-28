import React from 'react';
import styled from 'styled-components';

function LinkButton({ path, label}: {path: string, label: string}) {
  return (
    <StyledLink href={path}>{label}</StyledLink>
  );
}

export default LinkButton;


const StyledLink = styled.a`
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
  width: fit-content;
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