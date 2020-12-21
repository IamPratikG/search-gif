import React from 'react';

function SearchInput({handleChange}) {
    return (
        <input type="text" className="input-box" onChange={handleChange()} placeholder="Search Gifs" />
    );
}

export default SearchInput;