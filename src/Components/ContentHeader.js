import React from 'react';
import styled from 'styled-components';
import {
  SelectMenuModal,
  SelectMenuHeader,
  SelectMenuList,
  H5
} from './SuggestLists.js';
import { SelectMenuItem } from './Filters.js';

import openStateIcon from '../assets/icon/open.svg';
import mutedCheckIcon from '../assets/icon/check_muted.svg';
import caretDown from '../assets/icon/caret-down-fill.svg';

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between !important;
  padding: 16px;
  /* margin: -1px -1px 0; */
  background-color: var(--color-canvas-subtle);
  border-bottom: 1px solid var(--border-default-color);
`;

const ContentListFilter = styled.div`
  display: none;
  flex: auto;
  min-width: 0 !important;
  @media (max-width: 544px) {
    margin-left: 1rem;
  }

  &.lg-screen{
    @media(min-width: 1012px) {
      display: flex;
    }
  }

  &.sm-screen{
    @media(max-width: 1012px) {
      display: flex !important;
      margin-bottom: 16px !important;
    }

  }
`;

const ContentListState = styled.div`
  display: flex;
  flex: auto !important;
  padding: 0 !important;

  a {
    margin-right: 12px;
  }
`;

const A = styled.a`
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 14px;
  white-sapce: nowrap;
  user-select: none;
  background-color: transparent;
  color: var(--color-fg-muted);

  img {
    margin-right: 8px;
  }

  &.selected {
    font-weight: 600;
    color: initial;
  }
`;

const ContentListToggle = styled.div`
  display: flex;
  flex: auto !important;
  white-space: nowrap;

  @media (min-width: 1012px){
    justify-content: flex-end !important;
  }

  @media (min-width: 544px){
    justify-content: flex-start;
  }

`;

const Details = styled.details`
  display: inline-block;
  position: relative;
  padding: 0 16px !important;
  
  &:last-child {
    padding-right: 0 !important;
  }
`;

const Summary = styled.summary`
    vertical-align: middle;
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 500;
    color: var(--color-fg-muted);
    cursor: pointer;

    img {
      margin-left: 4px;
    }
`;

const Span = styled.span`
    @media(max-width: 768px){
      display: none;
    }
`;

const SelectMenuFilter = styled.div`
  padding: 16px;
  margin: 0;
  border-bottom: 1px solid var(--border-default-color);
  @media(min-width: 544px){
    padding: 8px;
  }
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 5px 12px;
    line-height: 20px;
    @media(min-width: 544px){
      font-size: 14px;
    }
    outline: none;
    border: 1px solid var(--border-default-color);
`;

const ContentHeader = (props) => {
  const { totalIssues } = props;
  return (
    <BoxHeader className='Box-Header'>
      <ContentListFilter className='lg-screen'>
        <ContentListState>
          <A className='selected'>
            <img className='icon-md' src={openStateIcon} alt='open state icon' />
            {totalIssues} Open
          </A>
          <A>
            <img src={mutedCheckIcon} alt='check icon' />
            10,609 Closed
          </A>
        </ContentListState>
      </ContentListFilter>
      <ContentListToggle>
        <Details className='detailsReset'>
          <Summary>
            <span>author</span>
            <img className='icon-sm' src={caretDown} alt='caret down' />
          </Summary>
          <SelectMenuModal className='rounded' style={{ top: '2rem' }}>
            <SelectMenuHeader>
              <H5>
                Filter by author
              </H5>
              <button className='btn-reset'>
                x
              </button>
            </SelectMenuHeader>
            <SelectMenuFilter>
              <Input className='rounded' type='text' placeholder='Filter users' value=" " readOnly />
            </SelectMenuFilter>
          </SelectMenuModal>
        </Details>
        <Details className='detailsReset'>
          <Summary>
            <span>label</span>
            <img className='icon-sm' src={caretDown} alt='caret down' />
          </Summary>
          <SelectMenuModal className='rounded' style={{ top: '2rem' }}>
            <SelectMenuHeader>
              <H5>
                Filter by label
              </H5>
              <button className='btn-reset'>
                x
              </button>
            </SelectMenuHeader>
            <SelectMenuFilter>
              <Input className='rounded' type='text' placeholder='Filter labels' readOnly value='' />
            </SelectMenuFilter>
          </SelectMenuModal>
        </Details>
        <Span>
          <Details className='detailsReset'>
            <Summary>
              <span>projects</span>
              <img className='icon-sm' src={caretDown} alt='caret down' />
            </Summary>
            <SelectMenuModal className='rounded' style={{ top: '2rem' }}>
              <SelectMenuHeader>
                <H5>
                  Filter by projects
                </H5>
                <button className='btn-reset'>
                  x
                </button>
              </SelectMenuHeader>
              <SelectMenuFilter>
                <Input className='rounded' type='text' placeholder='Filter projects' readOnly value='' />
              </SelectMenuFilter>
            </SelectMenuModal>
          </Details>
          <Details className='detailsReset'>
            <Summary>
              <span>milestones</span>
              <img className='icon-sm' src={caretDown} alt='caret down' />
            </Summary>
            <SelectMenuModal className='rounded' style={{ top: '2rem' }}>
              <SelectMenuHeader>
                <H5>
                  Filter by milestones
                </H5>
                <button className='btn-reset'>
                  x
                </button>
              </SelectMenuHeader>
              <SelectMenuFilter>
                <Input className='rounded' type='text' placeholder='Filter milestones' readOnly value='' />
              </SelectMenuFilter>
            </SelectMenuModal>
          </Details>
        </Span>
        <Details className='detailsReset'>
          <Summary>
            <span>assigner</span>
            <img className='icon-sm' src={caretDown} alt='caret down' />
          </Summary>
          <SelectMenuModal className='rounded' style={{ top: '2rem' }}>
            <SelectMenuHeader>
              <H5>
                Filter by who`s assigned
              </H5>
              <button className='btn-reset'>
                x
              </button>
            </SelectMenuHeader>
            <SelectMenuFilter>
              <Input className='rounded' type='text' placeholder='Filter users' readOnly value='' />
            </SelectMenuFilter>
          </SelectMenuModal>
        </Details>
        <Details className='detailsReset'>
          <Summary>
            <span>sort</span>
            <img className='icon-sm' src={caretDown} alt='caret down' />
          </Summary>
          <SelectMenuModal className='rounded' style={{ top: '2rem' }}>
            <SelectMenuHeader>
              <H5>
                Sort by
              </H5>
              <button className='btn-reset'>
                x
              </button>
            </SelectMenuHeader>
            <SelectMenuList style={{ padding: '0' }}>
              <SelectMenuItem href="https://github.com/facebook/react/issues?q=is%3Aopen+is%3Aissue">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check checked">
                  <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
                <span>newest</span>
              </SelectMenuItem>
              <SelectMenuItem href="https://github.com/facebook/react/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                  <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
                <span>oldest</span>
              </SelectMenuItem>
              <SelectMenuItem href="https://github.com/facebook/react/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-desc">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                  <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
                <span>most commented</span>
              </SelectMenuItem>
              <SelectMenuItem href="https://github.com/facebook/react/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-asc">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                  <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
                <span>least commented</span>
              </SelectMenuItem>
              <SelectMenuItem href="https://github.com/facebook/react/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                  <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
                <span>recently updated</span>
              </SelectMenuItem>
              <SelectMenuItem href="https://github.com/facebook/react/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                  <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
                <span>last recently updated</span>
              </SelectMenuItem>
            </SelectMenuList>
          </SelectMenuModal>
        </Details>
      </ContentListToggle>
    </BoxHeader>
  );
};

export default ContentHeader;
export { ContentListFilter, ContentListState, A, openStateIcon, mutedCheckIcon };