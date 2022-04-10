import React from 'react';
import styled from 'styled-components';
import openIssueIcon from '../assets/icon/open _success.svg';

const Div = styled.div`
    display: flex;
    &:not(:last-child){
        border-bottom: 1px solid var(--border-default-color);
    }
`;

const BoxRow = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`;

const IssueState = styled.div`
    flex-shrink: 0 !important;
    padding: 8px 0 0 16px !important;
`;

const IssueDetails = styled.div`
        flex: auto !important;
        min-width: 0 !important;
        width: 100%;
        padding: 8px 8px 16px 8px !important;
        @media (min-width: 768px){
            padding-right: 8px !important;
        }
`;

const AdditionalDetails = styled.div`
    display: flex;
    font-size: 12px !important;
    margin-top: 6px !important;
    color: var(--color-fg-muted);

    a {
        color: var(--color-fg-muted);
        &:hover{
        color: var(--color-accent-fg);
    }
    }
`;

const A = styled.a`
    color: var(--color-fg-default);
    font-weight: 600;
    font-size: 16px !important;
    vertical-align: middle;

    &:hover{
        color: var(--color-accent-fg);
    }
`;

const IssueConnectionDetails = styled.div`
    display: none;
    @media (min-width: 544px){
        display: flex;
        flex-shrink: 0 !important;
        padding: 8px 16px 0 0 !important;
        white-space: nowrap;
        width: 24.9999%;
        text-align: right !important;

    }
    
    span {
        flex-shrink: 0;
        flex: 1 !important;
    }

    .link-muted {
        color: var(--color-fg-muted);
        height: max-content;

        &:hover{
            color: var(--color-accent-fg);
            
            svg path {
                fill: var(--color-accent-fg);
            }
        }

    }
`;

const CmCounter = styled.span`
    font-weight: 600;
    font-size: 12px !important;
    margin-left: 4px;
`;

const Label = styled.a`
    background-color: #${props => props.color};
    border: 1px solid transparent;
    border-radius: 2em;
    display: inline-block;
    padding: 0 7px;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    white-space: nowrap;
    margin: 0 4px;
`;


const Issue = (props) => {
    const { title, comments, issueNumber, createdAt, byUser: { login }, labels } = props;

    const calculateIssueCreatedDay = () => {
        const date = new Date();
        const issueDate = new Date(createdAt);
        const day = Math.floor((date.getTime() - issueDate.getTime()) / (1000 * 3600 * 24));
        switch (day) {
            case 0:
                return "Today"
            case 1:
                return "Yesterday"
            default:
                return day + " days ago"
        }
    };

    return (
        <Div>
            <BoxRow>
                <IssueState>
                    <img className='icon-md' src={openIssueIcon} alt='open issue icon' />
                </IssueState>
                <IssueDetails>
                    <A data-hovercard-type="issue" data-hovercard-url="" href={`https://github.com/facebook/react/issues/${issueNumber}`}>{title}</A>
                    {
                        labels.map(lbl => { return <Label key={lbl.id} color={lbl.color}>{lbl.name}</Label> })
                    }
                    <AdditionalDetails>
                        <span>
                            #{issueNumber}
                            &nbsp; opened&nbsp;{calculateIssueCreatedDay()}&nbsp;by
                            <a href={`https://github.com/facebook/react/issues/created_by/${login}`} >
                                &nbsp;{login}
                            </a>
                        </span>
                    </AdditionalDetails>
                </IssueDetails>
                <IssueConnectionDetails>
                    <span>
                    </span>
                    <span>
                    </span>
                    <span>
                        <a href={`https://github.com/facebook/react/issues/${issueNumber}`} className='link-muted'>
                            <svg style={{ verticalAlign: "middle" }} aria-hidden="true" width="16" viewBox="0 0 16 16" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.75 2.5C2.6837 2.5 2.62011 2.52634 2.57322 2.57322C2.52634 2.62011 2.5 2.6837 2.5 2.75V10.25C2.5 10.388 2.612 10.5 2.75 10.5H4.75C4.94891 10.5 5.13968 10.579 5.28033 10.7197C5.42098 10.8603 5.5 11.0511 5.5 11.25V13.44L8.22 10.72C8.36052 10.5793 8.55115 10.5002 8.75 10.5H13.25C13.3163 10.5 13.3799 10.4737 13.4268 10.4268C13.4737 10.3799 13.5 10.3163 13.5 10.25V2.75C13.5 2.6837 13.4737 2.62011 13.4268 2.57322C13.3799 2.52634 13.3163 2.5 13.25 2.5H2.75V2.5ZM1 2.75C1 1.784 1.784 1 2.75 1H13.25C14.216 1 15 1.784 15 2.75V10.25C15 10.7141 14.8156 11.1592 14.4874 11.4874C14.1592 11.8156 13.7141 12 13.25 12H9.06L6.487 14.573C6.28324 14.7767 6.02367 14.9153 5.74111 14.9715C5.45854 15.0277 5.16567 14.9988 4.8995 14.8886C4.63333 14.7784 4.40581 14.5917 4.24571 14.3522C4.08561 14.1127 4.0001 13.8311 4 13.543V12H2.75C2.28587 12 1.84075 11.8156 1.51256 11.4874C1.18437 11.1592 1 10.7141 1 10.25V2.75Z" fill="#57606A" />
                            </svg>
                            <CmCounter>
                                {comments}
                            </CmCounter>
                        </a>
                    </span>
                </IssueConnectionDetails>
            </BoxRow>
        </Div>
    );
};

export default Issue;