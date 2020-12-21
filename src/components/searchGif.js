import React, { Component } from 'react';
import SearchInput from './searchInput';
import SearchResult from './searchResults';
import searchGifApi from '../services/searchGifService';

export default class SearchGif extends Component {
    constructor() {
        super();
        this.state = {
          searchResults: []
        };
        this.performSearch = this.performSearch.bind(this);
        this.debouncedSearch = this.debouncedSearch.bind(this);
    }

    performSearch (val) {
        const searchVal = val && val.trim();
        if (searchVal) {
            searchGifApi(val).then( (res) => {
                this.setState({searchResults: res.data});
            }
            );
        }
    }

    debouncedSearch () {
        let timer;
        const that = this;
        
        return function(e) {
            clearTimeout(timer);            
            timer = setTimeout(() => {
                that.performSearch.call(that, e.target.value);
            }, 400);
        }
    }

    render() {    
        return (
            <div className="search-component">
                <SearchInput handleChange={this.debouncedSearch} />
                {
                    (this.state.searchResults.length > 0 &&
                    <SearchResult {...this.state.searchResults} />)
                }
            </div>
    );
    }
    
}
