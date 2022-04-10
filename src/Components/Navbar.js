import React from 'react';
import Search from './Search';
import styled from 'styled-components';
import { avatar1 } from './Header';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    align-self: stretch;
    width: min(50rem, 100%);
    z-index: 2;
    @media (max-width: 768px) {
        display: ${(props) => props.isNavOpen ? 'flex' : 'none'};
        padding: 1rem;
        flex-direction: column;
        position: absolute;
        top: 3.875rem;
        left: 0;
        width: 100%;
        background-color: var(--color-bg-dark-header)
    }
`;

const Ul = styled.nav`
    display: flex;
    list-style: none;
    font-weight: 600;
    font-size: 0.86rem;


    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`;

const Ol = styled.ol`
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    font-weight: 600;
    font-size: 0.86rem;

    @media (min-width: 768px){
        display: none;
    }
    
`;

const Li = styled.li`
    display: inline;
    padding: 1rem 0;
    cursor: pointer;
    margin: 0 1rem 0 0;
    transition: all 0.2s ease-in-out;
    color: var(--font-color-light);

    &:first-letter{
        text-transform: capitalize;
    }

    &:hover {
        opacity: 0.5;
    }


    @media (max-width: 768px){
        width: 100%;
        padding: .7rem 0;
        border-top: 2px solid var(--border-default-color);
    }

    span {
        margin-left: 3px;
        @media (max-width: 835px) {
            display: none;
        }

        @media (max-width: 768px){
            display: inline;
        }
    }

`;

const Navbar = (props) => {
    return (
        <Nav isNavOpen={props.isNavOpen}>
            <Search />
            <Ul>
                <Li>pull<span>request</span>s</Li>
                <Li>issues</Li>
                <Li>marketplace</Li>
                <Li>explore</Li>
                <Ol>
                    <Li>codespaces</Li>
                    <Li>sponsors</Li>
                    <Li>settings</Li>
                    <Li style={{ display: 'flex', alignItems: 'center' }}> <img style={{ marginRight: '4px' }} className='icon-lg' src={avatar1} alt='avatar' /> soli-exe</Li>
                    <Li>Sing out</Li>
                </Ol>
            </Ul>
        </Nav>
    );
};

export default Navbar;