import React from 'react';
import styled from 'styled-components';

import codeIcon from '../assets/icon/code.svg';
import issuesIcon from '../assets/icon/issue.svg';
import pullIcon from '../assets/icon/pull req.svg';
import actionIcon from '../assets/icon/action.svg';
import projectIcon from '../assets/icon/project.svg';
import wikiIcon from '../assets/icon/wiki.svg';
import securityIcon from '../assets/icon/security.svg';
import insightIcon from '../assets/icon/insight.svg';



const Nav = styled.nav`
    margin-top: 1.5rem;
    width: 100%;
    height: max-content;
    overflow-x: auto;
`;

const Ul = styled.ul`
    display: flex;
    width: 100%;
    height: max-content;
`;

const Li = styled.li`
    margin-right: 3px;
    display: inline-block;
`;

const A = styled.a`
    display: flex;
    width: max-content;
    align-items: center;
    padding: .5rem 1rem;
    font-size: 14px;
    cursor: pointer;
    line-height: 30px;
    color: var(--color-fg-default);
    text-transform: capitalize;

    img {
        margin-right: .5rem;
    }

    &.selected {
        outline-offset: -1px;
        font-weight: 600;
        border-bottom: 2px solid var(--color-primer-border-active);
    }
    
`;


const RepoContainerNav = () => {
    return (
        <Nav>
            <Ul>
                <Li>
                    <A href='https://google.com'>
                        <img src={codeIcon} alt='' /> code
                    </A>
                </Li>
                <Li>
                    <A>
                        <img src={issuesIcon} alt='' /> issues
                        <span className='counter'>
                            673
                        </span>
                    </A>
                </Li>
                <Li>
                    <A>
                        <img src={pullIcon} alt='' /> pull requests
                        <span className='counter'>
                            248
                        </span>
                    </A>
                </Li>
                <Li><A> <img src={actionIcon} alt='' /> actions</A> </Li>
                <Li><A> <img src={projectIcon} alt='' /> projects</A> </Li>
                <Li><A> <img src={wikiIcon} alt='' /> wiki</A> </Li>
                <Li><A> <img src={securityIcon} alt='' /> security</A> </Li>
                <Li><A> <img src={insightIcon} alt='' /> insights</A> </Li>
            </Ul>
        </Nav>
    );
};

export default RepoContainerNav;