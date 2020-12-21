import React from 'react';
import ResultItem from './resultItem';

function SearchResult(searchResults) {

  function getResultItemProps(data) {
    const {title, images, url} = data;
    return {
      img: images.original.url,
      title,
      url
    };
  }

  function getResultItems() {
    const searchRes = Object.values(searchResults);
    const resultItems = searchRes.map(resultItem => (<ResultItem {...getResultItemProps(resultItem)} />));
    return resultItems;
  }
  
  return (
    <div className="searchResult">
      {getResultItems()}
    </div>
  );
}

export default SearchResult;