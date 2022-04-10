import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import axios from 'axios';
import ContentContainer from './Components/ContentContainer';
import Footer from './Components/Footer.jsx';
import ReactPaginate from 'react-paginate';
import './assets/css/app.css';
import './assets/css/var.css';
import './assets/css/font.css';

const App = () => {
  const [page, setPage] = useState(1);

  const issuesEndPoint = `/repos/facebook/react/issues?page=${page}&per_page=30`;
  const reactRepoEndPoint = "/repos/facebook/react";

  const [pageCount, setPageCount] = useState(null);
  const [issuesCount, setIssuesCount] = useState(0);
  const [issuesData, setIssuesData] = useState([]);

  useEffect(() => {
    document.addEventListener('click', closeDetails);
    document.addEventListener('keydown', focusOnHeaderSearch);

    axios.all([
      axios.get(reactRepoEndPoint),
      axios.get(issuesEndPoint)
    ])
      .then(axios.spread((reactRepo, issues) => {
        extractURLParamsFromPaginationLink(issues.headers.link);
        setIssuesCount(reactRepo.data.open_issues_count);
        setIssuesData(issues.data);
      }))

  }, []);

  useEffect(() => {
    axios.get(issuesEndPoint)
      .then(res => setIssuesData(res.data));
  }, [page])

  const closeDetails = (e) => {
    const detailsItems = [...document.querySelectorAll('details')];
    if (!detailsItems.some((item) => item.contains(e.target))) {
      detailsItems.forEach((item) => item.removeAttribute('open'));
    } else {
      detailsItems.forEach((item) => !item.contains(e.target) ? item.removeAttribute('open') : '');
    }
  }

  const focusOnHeaderSearch = (event) => {
    switch (event.key) {
      case '/':
        document.getElementById('headerSearchInput').focus();
        return removeInputValue();
      case 'Escape':
        document.getElementById('headerSearchInput').blur();
        break;
      default:
        break;
    }
  }

  const removeInputValue = () => {
    return document.getElementById('headerSearchInput').value = "";
  }

  const extractURLParamsFromPaginationLink = (link) => {
    let extractedLink = link.split(',')[1].split(';')[0];
    extractedLink = extractedLink.substring(link.indexOf("?")).slice(1, -1);
    return getLastPage(extractedLink);
  }

  const getLastPage = (link) => {
    const urlSearchParams = new URLSearchParams(link);
    const params = Object.fromEntries(urlSearchParams.entries());
    return setPageCount(params.page);
  }

  const handlePageChange = (e) => {
    setPage((e.selected + 1));
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Header />
      <ContentContainer issues={issuesData} totalIssues={issuesCount} />
      <ReactPaginate
        containerClassName='paginate-container'
        activeClassName='current'
        pageClassName="page-item"
        previousClassName="page-item-btn"
        nextClassName="page-item-btn"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        breakClassName="disabled-item"
        breakLinkClassName="disabled-link"
        breakLabel="..."
        pageRangeDisplayed={window.screen.width > '768' ? 5 : 1}
        nextLabel="Next >"
        previousLabel="< Previous"
        pageCount={Math.ceil(pageCount)}
        onPageChange={handlePageChange}
        renderOnZeroPageCount={null}
      />
      <Footer />
    </>
  );
}

export default App;
