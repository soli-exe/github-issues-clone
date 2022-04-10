import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Navbar from './Navbar';
import styled from 'styled-components';
import githubMark from '../assets/icon/Mark-Light-64px.png';
import bellIcon from '../assets/icon/bell-regular.svg';
import plusIcon from '../assets/icon/plus.svg';
import style from '../assets/css/header.module.css';
import avatar1 from '../assets/img/Avatar/A.png';
import focusAvatar from '../assets/img/Avatar/focus.svg';
import menuIcon from '../assets/icon/hamburger.svg';

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--color-bg-dark-header);
  color: var(--font-color);
  height: 3.875rem;
  padding: 1rem 2rem;
  font-size: 1rem;

  @media (max-width: 768px){
    justify-content: space-between;
  }
`;

const Button = styled.button`
    display: block;
    border: none;
    background-color: unset;
    cursor: pointer;
    
    @media (min-width: 768px) {
      display: none;

  }

`;

const Div = styled.div` /* Dropdown items container */
  display: flex;
  align-items: center;

  @media (max-width: 768px){
    display: none;
  }
`;

const Details = styled.details`
  position: relative;
  display: inline-block;
`;

const Ul = styled.ul`
  list-style-type: none;
  list-style: none;
  width: 160px;
  background-color: var(--overlay-canvas-color);
  text-align: start;
  border-radius: 6px;
  padding: 0.4rem 0;
  position: absolute;
  border: 1px solid var(--border-default-color);
  z-index: 1;
  font-size: 14px;
  top: 180%;
  right: 0;
  color: var(--color-fg-default);

  &:before {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 5%;
    border: 7px solid;
    border-color: transparent transparent var(--overlay-canvas-color) transparent;
  }

`;

const Li = styled.li`
  padding: .45rem 1.1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-accent-emphasis);
    color: var(--font-color-light);
  }
}
`;

const Summary = styled.summary`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }

  &:first-child {
    margin-left: .8rem;
  }

  img {
    margin-right: 3px;
  }


`;

const A = styled.a`
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.4;
  }

  &:nth-child(4){
    @media (min-width: 768px){
      margin-left: auto;
    }
  }

`;

const Span = styled.span`
    display: inline-flex;
    text-align: start;
    border: 1px solid var(--border-default-color);
    padding: .45rem .5rem;
    border-radius: 6px;
    margin: 0 auto;
    width: 140px;
    color: var(--font-color);
    cursor: pointer;

    span {
      width: 100%;
      margin-left: .5rem;

      &:hover {
        color: var(--color-accent-emphasis);
      }
    }
`;

const Header = () => {

  const [isNavOpen, setNavToggler] = useState(false);

  const toggleNavbar = () => {
    return setNavToggler(prevState => !prevState);
  }

  return (
    <HeaderTag>
      <Button onClick={toggleNavbar}>
        <img className='icon-lg' src={menuIcon} alt='menu icon' />
      </Button>
      <A href='https://github.com'>
        <img className='icon-xx-lg' src={githubMark} alt='brand mark' />
      </A>
      <Navbar isNavOpen={isNavOpen} />
      <A href='https://github.com/notifications'>
        <img src={bellIcon} alt='bell icon' data-tip='You have no unread notifications' />
      </A>
      <Div>
        <Details className='detailsReset'>
          <Summary >
            <img src={plusIcon} alt='plus icon' />
            <i className='caret-down-light'></i>
          </Summary>
          <Ul>
            <Li>New repository</Li>
            <Li>Import repository</Li>
            <Li>New gist</Li>
            <Li>New organization</Li>
          </Ul>
        </Details>
        <Details className='detailsReset'>
          <Summary >
            <img className='icon-lg' src={avatar1} alt='plus icon' />
            <i className='caret-down-light'></i>
          </Summary>
          <Ul style={{ width: '180px' }}>
            <a href='google.com' className={`${style.headerCurrentUser} ${style.userProfileLink}`}>
              Signed in as
              <strong style={{ margin: '0 5px' }}>
                soli-exe
              </strong>
            </a>
            <span className='dropDown-divider'></span>
            <div className={style.userStatusContainer}>
              <Span>
                <img className={style.userStatusAvatar} src={focusAvatar} alt='status avatar' />
                <span>
                  Focusing
                </span>
              </Span>
            </div>
            <span className='dropDown-divider'></span>
            <ul>
              <Li>Your profile</Li>
              <Li>Your repository</Li>
              <Li>Your codespaes</Li>
              <Li>Your projects</Li>
              <Li>Your start</Li>
              <Li>Your gists</Li>
            </ul>
            <span className='dropDown-divider'></span>
            <ul>
              <Li>Upgrade</Li>
              <Li>Feature preview</Li>
              <Li>Help</Li>
              <Li>Settings</Li>
            </ul>
            <span className='dropDown-divider'></span>
            <ul>
              <Li>Sign out</Li>
            </ul>
          </Ul>
        </Details>
      </Div>
      <ReactTooltip className={style.customReactTooltip} place='bottom' offset={{ 'left': 80 }} effect='solid' arrowColor='#00000000' />
    </HeaderTag>
  );
}

export default Header;
export { avatar1, Details };