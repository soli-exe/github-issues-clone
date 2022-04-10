import React from 'react';
import {
    SelectMenuModal,
    SelectMenuHeader,
    SelectMenuList,
    H5,
} from './SuggestLists';
import styled from 'styled-components';

const SelectMenuItem = styled.a`
    display: flex;
    align-items: center;
    overflow: hidden;
    color: var(--color-fg-default);
    cursor: pointer;
    width: 100% !important;
    padding: 7px 16px;
    font-size: 12px;

    text-transform: capitalize;


    &:not(:last-child){
        border-bottom: 1px solid var(--border-default-color);
    }

    svg{
        margin-right: 8px;
        opacity: 0;
    }

    &:hover {
        background-color: var(--color-button-hover);
    }

    .checked {
        opacity: 1 !important;
    }
`;

const Filters = () => {
    return (
        <SelectMenuModal className='rounded' style={{ left: '0' }}>
            <SelectMenuHeader>
                <H5>
                    Filter issues
                </H5>
                <button className='btn-reset'>
                    x
                </button>
            </SelectMenuHeader>
            <SelectMenuList style={{ padding: '0' }}>
                <SelectMenuItem>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                        <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                    </svg>
                    open issues and pull requests
                </SelectMenuItem>
                <SelectMenuItem>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                        <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                    </svg>
                    Your issues
                </SelectMenuItem>
                <SelectMenuItem>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                        <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                    </svg>
                    your pull requests
                </SelectMenuItem>
                <SelectMenuItem>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                        <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                    </svg>
                    Everything assigned to you
                </SelectMenuItem>
                <SelectMenuItem>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                        <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                    </svg>
                    Everything mentioning you
                </SelectMenuItem>
            </SelectMenuList>
        </SelectMenuModal>
    );
};

export default Filters;
export { SelectMenuItem };