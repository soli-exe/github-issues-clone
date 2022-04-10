import React from 'react';
import styled from 'styled-components';
import { Details } from './Header';
import RepoContainerNav from './RepoContainerNav';
import SuggestLists from './SuggestLists';
import Notifications from './Notifications';
import bookmarkIcon from '../assets/icon/bookmark.svg';
import starIcon from '../assets/icon/star.svg';
import eyeIcon from '../assets/icon/eye.svg';
import forkIcon from '../assets/icon/fork.svg';
import caretDown from '../assets/icon/caret-down-fill.svg';

const Header = styled.header`
    sdisplay: block;
    padding: 1rem 2rem 0 2rem;
    width: 100%;
    background-color: var(--color-page-bg-header);
    border-bottom: 1px solid var(--border-default-color);
`;

const Div = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const H2 = styled.h2`
    width: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;

`;

const A = styled.a`
    margin: 0 .3rem;
    color: var(--color-accent-fg);
    font-size: 20px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const Ul = styled.ul`
    display: flex;

    @media (max-width: 768px){
        display: none;
    }

`;

const Li = styled.li`
    display: flex;
    align-items: center;
    border: 1px solid var(--border-default-color);
    margin-left: .4em;

    /* &:hover {
        opacity: .8;
    } */
`;

const Summary = styled.summary`
    width: 100%;
    cursor: pointer;
    display: block;
    padding: 3px .8rem;

`;


const SpanTitle = styled.span`
    font-size: 12px;

    img {
        vertical-align: middle;
    }

`;

const Button = styled.button`
    padding: 3px .8rem;
    width: 100%;
    cursor: pointer;
`;

const RepoContainerHeader = () => {
    return (
        <Header>
            <Div>
                <div>
                    <H2>
                        <img className='icon-md' src={bookmarkIcon} alt='bookmark icon' />
                        <A>
                            facebook
                        </A>
                        <span className='color-fg-muted'>/</span>
                        <A>
                            <strong>
                                react
                            </strong>
                        </A>
                        <span className='label label--secondary'>
                            public
                        </span>
                    </H2>
                </div>
                <Ul>
                    <Li className='rounded'>
                        <Details className='detailsReset'>
                            <Summary>
                                <SpanTitle>
                                    <img className='icon-md' src={eyeIcon} alt='eye icon' />
                                    &nbsp;Watch
                                </SpanTitle>
                                <span className='counter' style={{ marginRight: '4px' }}>
                                    6.6k
                                </span>
                                <img className='icon-sm' src={caretDown} alt='caret down icon' />
                            </Summary>
                            <Notifications />
                        </Details>
                    </Li>
                    <Li className='rounded'>
                        <Button className='btn-reset'>
                            <SpanTitle>
                                <img src={forkIcon} alt='fork icon' />
                                &nbsp;Fork
                            </SpanTitle>
                            <span className='counter' style={{ marginRight: '4px' }}>
                                38k
                            </span>
                        </Button>
                    </Li>
                    <Li className='rounded'>
                        <Button className='btn-reset' style={{ borderRight: '1px solid var(--border-default-color)' }}>
                            <SpanTitle>
                                <img className='icon-md' src={starIcon} alt='star icon' />
                                &nbsp;Star
                            </SpanTitle>
                            <span className='counter' style={{ marginRight: '4px' }}>
                                185k
                            </span>
                        </Button>
                        <Details className='detailsReset'>
                            <Summary>
                                <img className='icon-sm' src={caretDown} alt='caret down icon' />
                            </Summary>
                            <SuggestLists />
                        </Details>
                    </Li>
                </Ul>
            </Div>
            <RepoContainerNav />
        </Header>

    );
};

export default RepoContainerHeader;