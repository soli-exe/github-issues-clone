import React from 'react';
import { Details } from './Header';
import Filters from './Filters';
import styled from 'styled-components';
import caretDown from '../assets/icon/caret-down-fill.svg';
import searchIcon from '../assets/icon/search.svg';
import milestonesIcon from '../assets/icon/milestones.svg';
import lableIcon from '../assets/icon/label.svg';

const Div = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column-reverse !important;
    justify-content: space-between !important;
    z-index: 1;
    
    @media (max-width: 544px){
        margin: 0 1rem;
  }
    }

    @media (min-width: 768px){
        margin-bottom: 16px;
        flex-direction: row !important;
    }
`;

const Subdiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    
    &:first-child {
        justify-content: flex-start !important;
        flex: auto !important;
        margin: 24px 0 !important;

        @media(min-width: 768px){
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }
    }

    &:last-child{
        margin-left: 16px !important;
        justify-content: space-between;

        @media (min-width: 768px) {
            width: auto !important;
        }
    }
`;

const Summary = styled.summary`
    position: relative;
    display: inline-block;
    padding: 5px 16px;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vetical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid var(--border-default-color);
    background-color: var(--color-page-bg-header);
    border-radius: 6px 0 0 6px;

    img {
        margin-left: 8px;
    }

    &:hover{
        background-color: var(--color-button-hover);
    }
`;

const Form = styled.form`
    position: relative;
    margin-left: -1px;
    width: 100% !important;

    &:focus-within{

    }

    img {
        position: absolute;
        left: 8px;
        top: 9px;
        text-align: center;
        pointer-event: none;
    }
`;

const SearchInput = styled.input`
    width: 100% !important;
    color: var(--color-fg-muted);
    padding: 5px 32px;
    line-height: 20px;
    font-size: .9rem;
    vertical-align: middle;
    border: 1px solid var(--border-default-color);
    background-color: var(--color-page-bg-header);
    border-radius: 0 6px 6px 0;
    outline: none;
    
`;

const SubnavLinks = styled.nav`
    display: none;
    white-space: nowrap !important;
    float: left !important;
    margin-left: 16px;

    &.lg-screen{
        @media(min-width: 768px){
            display: flex;
        }
    }

    &.sm-screen{
        @media(max-width: 768px){
            display: flex;
            margin-left: 0 !important;
        }
    }
`;


const SubnavItem = styled.a`

    &:hover {
        background-color: var(--color-button-hover);
    }

    &:first-child{
        border-radius: 6px 0 0 6px;
    }

    &:last-child{
        border-radius: 0 6px 6px 0;
        margin-left: -1px;
    }

    img {
        margin-right: 5px;
    }
`;

const SubNav = () => {
    return (
        <Div>
            <Subdiv>
                <Details className='details-reset'>
                    <Summary role='button'>
                        filters
                        <img className='icon-sm' src={caretDown} alt='caret down' />
                    </Summary>
                    <Filters />
                </Details>
                <Form>
                    <SearchInput placeholder='Search all issues' value="is:issue is:open" readOnly />
                    <img className='icon-md' src={searchIcon} alt='search icon' />
                </Form>
                <SubnavLinks className='lg-screen'>
                    <SubnavItem className='btn' href="https://github.com/facebook/react/labels">
                        <img src={lableIcon} alt='label icon' />
                        Labels
                        <span className='counter'>
                            66
                        </span>
                    </SubnavItem>
                    <SubnavItem className='btn' href="https://github.com/facebook/react/milestones">
                        <img src={milestonesIcon} alt='milestones icon' />
                        Milestones
                        <span className='counter'>
                            1
                        </span>
                    </SubnavItem>
                </SubnavLinks>
            </Subdiv>
            <Subdiv>
                <SubnavLinks className='sm-screen'>
                    <SubnavItem className='btn' href="https://github.com/facebook/react/labels">
                        <img src={lableIcon} alt='label icon' />
                        Labels
                        <span className='counter'>
                            66
                        </span>
                    </SubnavItem>
                    <SubnavItem className='btn' href="https://github.com/facebook/react/milestones">
                        <img src={milestonesIcon} alt='milestones icon' />
                        Milestones
                        <span className='counter'>
                            1
                        </span>
                    </SubnavItem>
                </SubnavLinks>
                <a href="https://github.com/facebook/react/issues/new/choose" className='btn btn-primary rounded'>
                    <span>New issue</span>
                </a>
            </Subdiv>
        </Div>
    );
};

export default SubNav;