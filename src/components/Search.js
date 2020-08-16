import React from 'react';

const Search = (props) => {
    return (
        <div className="input-group mb-3">
            <input className="form-control" type="text" placeholder="Find By Name..." />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
    );
}

export default Search;






