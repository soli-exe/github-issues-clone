import React from 'react';
import styled from 'styled-components';
import checkIcon from '../assets/icon/check.svg';
import {
    SelectMenuHeader, SelectMenuList,
    H5, SelectMenuFooter
} from './SuggestLists';

const SelectMenuModal = styled.div`
    position: absolute;
    top: 2.5rem;
    left: 0;
    background-color: var(--overlay-canvas-color);
    border: 1px solid var(--border-default-color);
    z-index: 99;
    @media(min-width: 544px){
        width: 300px;
        height: max(auto, 480px);
    }
`;

const A = styled.a`
    color: var(--color-accent-fg);
    cursor: pointer;
    font-weight: 500;
`;


const Button = styled.button`
    padding: 8px 8px 8px 12px;
    width: 100%;
    display: flex;
    text-align: start;
    cursor: pointer;

    &:not(:last-child){
        border-bottom: 1px solid var(--border-default-color);
    }

    &:hover {
        background-color: var( --color-button-hover);
    }

    span {
        margin-right: .5rem;
    }

    div {
        p {
            color: var(--color-fg-muted);
            margin-top: 3px;
            line-height: 18px;
            font-size: 12px;
        }
    }
`;

const Notifications = () => {
    return (
        <SelectMenuModal className='rounded'>
            <SelectMenuHeader>
                <H5 style={{ fontSize: '12px' }}>Notifications</H5>
                <button className='btn-reset'>
                    x
                </button>
            </SelectMenuHeader>
            <SelectMenuList style={{ padding: "0" }}>
                <Button className='btn-reset'>
                    <span>
                        <img className='icon-md' src={checkIcon} alt='check' />
                    </span>
                    <div>
                        <h4>Participating and @mentions</h4>
                        <p>
                            Only receive notifications from this repository when participating or @mentioned.
                        </p>
                    </div>
                </Button>
                <Button className='btn-reset'>
                    <span style={{ opacity: '0' }}>
                        <img className='icon-md' src={checkIcon} alt='check' />
                    </span>
                    <div>
                        <h4>All activity</h4>
                        <p>
                            Notified of all notifications on this repository.

                        </p>
                    </div>
                </Button>
                <Button className='btn-reset'>
                    <span style={{ opacity: '0' }}>
                        <img className='icon-md' src={checkIcon} alt='check' />
                    </span>
                    <div>
                        <h4>Ignore</h4>
                        <p>
                            Never be notified.
                        </p>
                    </div>
                </Button>
                <Button className='btn-reset'>
                    <span style={{ opacity: '0' }}>
                        <img className='icon-md' src={checkIcon} alt='check' />
                    </span>
                    <div>
                        <h4>
                            Custom
                        </h4>
                        <p>
                            Select events you want to be notified of in addition to participating and @mentions.
                        </p>
                    </div>
                </Button>
            </SelectMenuList>
            <SelectMenuFooter style={{ padding: "10px 8px" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.75 0C3.28587 0 2.84075 0.184374 2.51256 0.512563C2.18437 0.840752 2 1.28587 2 1.75V14.25C2 15.216 2.784 16 3.75 16H12.25C12.7141 16 13.1592 15.8156 13.4874 15.4874C13.8156 15.1592 14 14.7141 14 14.25V1.75C14 1.28587 13.8156 0.840752 13.4874 0.512563C13.1592 0.184374 12.7141 0 12.25 0H3.75ZM3.5 1.75C3.5 1.6837 3.52634 1.62011 3.57322 1.57322C3.62011 1.52634 3.6837 1.5 3.75 1.5H12.25C12.3163 1.5 12.3799 1.52634 12.4268 1.57322C12.4737 1.62011 12.5 1.6837 12.5 1.75V14.25C12.5 14.3163 12.4737 14.3799 12.4268 14.4268C12.3799 14.4737 12.3163 14.5 12.25 14.5H3.75C3.6837 14.5 3.62011 14.4737 3.57322 14.4268C3.52634 14.3799 3.5 14.3163 3.5 14.25V1.75ZM8 13C8.26522 13 8.51957 12.8946 8.70711 12.7071C8.89464 12.5196 9 12.2652 9 12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13Z" fill="black" />
                </svg>
                <span>
                    &nbsp; Get push notifications on <A target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/app/apple-store/id1477376905?ct=watch-dropdown&amp;mt=8&amp;pt=524675">iOS</A> or  <A target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.github.android&amp;referrer=utm_campaign%3Dwatch-dropdown%26utm_medium%3Dweb%26utm_source%3Dgithub">Android</A>
                </span>
            </SelectMenuFooter>
        </SelectMenuModal>
    );
};

export default Notifications;