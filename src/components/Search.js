import React from 'react';

const SearchBar = () => (
    <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Browse data portal"
            name="s" 
        />
    </form>
);

export default SearchBar;
