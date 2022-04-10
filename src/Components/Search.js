import React, { useState } from 'react';
import styled from 'styled-components';
import slashIcon from '../assets/icon/slash.svg';

const SearchForm = styled.form`
    position: relative;
    height: 1.875rem;
    display: flex;
    align-items: center;
    margin: 0 1rem 0 1rem;
    width: 16.875rem;
    transition: all 0.4s ease-in-out;

    &:focus-within {
      width: 100%;
    }

    @media (max-width: 768px){
      width: 100%;
      margin: 0 0 1rem 0;
  }

`;

const Img = styled.img`
    position: absolute;
    right: 0.2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-color: var(--color-header-search-bg);
  border: 1px solid var(--color-header-search-border);
  outline: none;
  padding: 0.75rem;
  font-size: 0.89rem;
  color: var(--font-color);
  transition: all 0.2s ease-in-out;


  &:focus {
    border-radius: 6px 6px 0 0;
    border-bottom: none;
    border-top: 1px solid var(--color-accent-emphasis);
    border-left: 1px solid var(--color-accent-emphasis);
    border-right: 1px solid var(--color-accent-emphasis);

    & + ${Img} {
      display: none;
    }
  }

`;

const Search = () => {

  const [inputValue, setInputValue] = useState("");


  const changeHandler = (e) => {
    return setInputValue(e.target.value);
  }

  return (
    <SearchForm>
      <SearchInput onChange={changeHandler} value={inputValue} type='text' placeholder='Search or jump to...' id='headerSearchInput' />
      <Img src={slashIcon} alt='salsh icon' />
    </SearchForm>
  );
};

export default Search;
