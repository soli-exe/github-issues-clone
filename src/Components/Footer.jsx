import React from 'react';
import styled from 'styled-components';
import githubMark from '../assets/icon/GitHub-Mark-64px.png';

const FooterTag = styled.footer`
    display: block;
    width: 100%;

    @media (min-width: 1012px){
        padding: 0 16px !important;
    }
    @media (min-width: 544px){
        padding: 0 40px !important;
    }
    
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    flex-wrap: wrap !important;
    font-size: 13px;
    padding: 40px 0 !important;
    margin-top: 40px;
    border-top: 1px solid var(--border-default-color);
    @media (min-width: 1012px){
        flex-wrap: nowrap;
        flex-direction: row !important;
    }
`;

const Ul = styled.ul`
    display: flex;
    margin-bottom: 8px;
    justify-content: center;
    flex-wrap: wrap;
    
    @media (min-width: 1012px){
        margin-bottom: 0 !important;
        justify-content: space-between;

        &.short-width{
            width: 16.6%;
        }
    
        &.long-width{
            width: 66.6%
        }
    }
`;

const Li = styled.li`
    display: list-item;
    margin-right: 16px !important;
    text-align: -webkit-match-parent;
    color: var(--color-fg-muted);
    @media (min-width: 1012px){
        margin: 0;
    }
`;

const A = styled.a`
    color: var(--color-accent-fg);
    text-transform: capitalize;
    width: max-content;
    vertical-align: middle;

    &:hover{
        text-decoration: underline;
    }

    img {
        margin-right: 6px;
    }

`;

const Footer = () => {
    return (
        <FooterTag>
            <Div>
                <Ul className='short-width'>
                    <Li>
                        <A title='Github' target='_blank' href='https://github.com'>
                            <img className='icon-x-lg' src={githubMark} alt='mark' />
                        </A>
                        <span>
                            © 2022 GitHub, Inc.
                        </span>
                    </Li>
                </Ul>
                <Ul className='long-width'>
                    <Li>
                        <A href='https://docs.github.com/en/github/site-policy/github-terms-of-service'>
                            terms
                        </A>
                    </Li>
                    <Li>
                        <A href='https://docs.github.com/en/github/site-policy/github-privacy-statement' >
                            privacy
                        </A>
                    </Li>
                    <Li><A href='https://github.com/security' >secutiry</A></Li>
                    <Li><A href='https://www.githubstatus.com/' >status</A></Li>
                    <Li><A href='https://docs.github.com/' >docs</A></Li>
                    <Li><A href='https://support.github.com/?tags=dotcom-footer' >contact gitHub</A></Li>
                    <Li><A href='https://github.com/pricing' >pricing</A></Li>
                    <Li><A href='https://docs.github.com/' >API</A></Li>
                    <Li><A href='https://services.github.com/' >training</A></Li>
                    <Li><A href='https://github.blog/' >blog</A></Li>
                    <Li><A href='https://github.com/about' >about</A></Li>
                </Ul>
            </Div>
        </FooterTag>
    );
};

export default Footer;