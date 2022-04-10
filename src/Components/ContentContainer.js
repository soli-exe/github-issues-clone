import React from 'react';
import RepoContainerHeader from './RepoContainerHeader';
import SubNav from './SubNav';
import Issue from './Issue';
import ContentHeader from './ContentHeader';
import styled from 'styled-components';
import { ContentListFilter, ContentListState, A, openStateIcon, mutedCheckIcon } from './ContentHeader.js';

const Div = styled.div`
    padding: 0 16px;
    margin-top: 24px !important;
    width: 100%;
    
    @media (min-width: 1012px){
      padding: 0 32px !important;
    }
    @media (min-width: 768px){
      padding: 0 24px !important;
    }

    &.container{
      max-width: 1280px;
      margin: 0 auto;
    }

    @media (max-width: 544px){
      padding: 0;
    }

`;

const Box = styled.div`
  background-color: var(--color-canvas-default);
  border-top: 1px solid var(--border-default-color);
  border-bottom: 1px solid var(--border-default-color);
  margin: 0 0 !important;
  width: 100%;

  @media(min-width: 544px){
    margin: 0 15px;
    border-radius: 6px !important;
    border: 1px solid var(--border-default-color);
  }
  
  &.Box-Header {
    border-left-width: 1px;
    border-right-width: 1px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

const ContentContainer = (props) => {

  const { issues, totalIssues } = props;

  return (
    <main>
      <RepoContainerHeader />
      <Div className='container'>
        <SubNav />
        <ContentListFilter className='sm-screen'>
          <ContentListState>
            <A className='selected'>
              <img src={openStateIcon} alt='open state icon' />
              {totalIssues} Open
            </A>
            <A>
              <img src={mutedCheckIcon} alt='check icon' />
              10,609 Closed
            </A>
          </ContentListState>
        </ContentListFilter>
        <Box>
          <ContentHeader totalIssues={totalIssues} />
          {issues.length && issues.map(issue => {
            return <Issue key={issue.id}
              title={issue.title}
              comments={issue.comments}
              issueNumber={issue.number}
              createdAt={issue.created_at}
              byUser={issue.user}
              labels={issue.labels}
            />
          })}
        </Box>
      </Div>
    </main>
  );
};

export default ContentContainer;