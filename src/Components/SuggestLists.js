import React from 'react';
import styled from 'styled-components';
import rocketIcon from '../assets/img/emoji/rocket.png';
import crystalballIcon from '../assets/img/emoji/crystal_ball.png';
import sparklesIcon from '../assets/img/emoji/sparkles.png';


const SelectMenuModal = styled.div`
    position: absolute;
    top: 2.5rem;
    right: 0;
    z-index: 100;
    background-color: var(--overlay-canvas-color);
    border: 1px solid var(--border-default-color);

    @media(min-width: 544px){
        width: 300px;
        height: max(auto, 480px);
    }
`;

const SelectMenuHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    width: 100%;
    border-bottom: 1px solid var(--border-default-color);
    `;

const SelectMenuList = styled.div`
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 8px 16px;
    background-color: var(--overlay-canvas-color);
    border-bottom: 1px solid var(--border-default-color);
`;

const H5 = styled.h5`
    font-weight: 600;
    font-size: 12px;
    `;

const MenuListForm = styled.form`
    display: block;
    text-align: left;
    background-color: var(--overlay-canvas-color);
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    
    &:not(:last-child){
        margin-bottom: 1rem;
    }

    * {
        margin-right: 5px;
    }
`;

const SpanTitle = styled.span`
    font-size: 14px;
    font-weight: 400;
    max-width: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:first-letter {
        text-transform: capitalize;
    }
`;

const SelectMenuFooter = styled.footer`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    padding: 4px 4px;
`;

const Button = styled.button`
    width: max-content;
    background-color: transparent;
    font-size: 14px;
    cursor: pointer;
    display: block;
    text-align: left;
    padding: 8px 12px;
    
    /* &:hover {
        background-color: var( --color-button-hover);
    } */
    
    svg {
        vertical-align: middle;
        margin-right: .4rem;
    }
    
    span {
        vertical-align: middle;
    }
`;

const SuggestLists = () => {
    return (
        <SelectMenuModal className='rounded'>
            <SelectMenuHeader>
                <H5>Suggested lists</H5>
                <button className='btn-reset'>
                    x
                </button>
            </SelectMenuHeader>
            <SelectMenuList>
                <MenuListForm>
                    <div className='flex-col'>
                        <Label>
                            <input type='checkbox' />
                            <img className='icon-md' src={crystalballIcon} alt='crustal_ball' />
                            <SpanTitle>
                                future ideas
                            </SpanTitle>
                        </Label>
                        <Label>
                            <input type='checkbox' />
                            <img className='icon-md' src={rocketIcon} alt='rocket' />
                            <SpanTitle>
                                my stack
                            </SpanTitle>
                        </Label>
                        <Label>
                            <input type='checkbox' />
                            <img className='icon-md' src={sparklesIcon} alt='sparkles' />
                            <SpanTitle>
                                inspiration
                            </SpanTitle>
                        </Label>
                    </div>
                </MenuListForm>
            </SelectMenuList>
            <SelectMenuFooter>
                <Button className='btn-reset rounded' style={{ width: '100%' }}>
                    <svg aria-hidden="true" width="12" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#57606a" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                        </path>
                    </svg>
                    <span>
                        Create list
                    </span>
                </Button>
            </SelectMenuFooter>
        </SelectMenuModal>
    );
};

export default SuggestLists;
export { SelectMenuModal, SelectMenuHeader, SelectMenuList, H5, SelectMenuFooter };