import React from "react";



const Searchbox = ({ searchfield , searchchange }) => {
    return (
        <div className='pa2'>
        <input 
        className="pa3  ba b--green bg-lightest-pink"
        type='search' 
        placeholder="search robots" 
        onChange={searchchange}
        />
        </div>
    );
}

export default Searchbox;