import React from 'react';
import ResultItem from './resultItem';

function SearchResult(searchResults) {

  function getResultItemProps() {
    
    return {
      img: '',
      title: '',
      url: ''
    };
  }

  return (
    <div className="searchResult">
      <ResultItem {...getResultItemProps()} />
    </div>
  );
}

export default SearchResult;