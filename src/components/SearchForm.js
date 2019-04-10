import React, { useState } from 'react';
// import history from '../actions/history';


// import SearchIcon from '../assets/svg/search.svg';

import SearchButton from './SearchButton';

  const SearchForm = () => {
  
  const [input, setInput] = useState('');
  // const [state, setState] = useState('');

  function onFormSubmit(e) {
    e.preventDefault();
    if (input.length === 0) {
      return;
    }
    setInput('');


    // console.log(this)

    // this.setState({
    //     searchQuery: {input}
    // })
    
    window.location.href = `${process.env.PUBLIC_URL}/search/${input}`;
    // history.push(`${process.env.PUBLIC_URL}/search/${input}`);
  }

  function onInputChange(e) {

    setInput(e.target.value)
    
  }
 
  
    return (
     
      <form onSubmit={onFormSubmit}>
        <input
          onChange={onInputChange}
          id="searchInput"
          type="text"
          placeholder="Search for a movie..."
          value={input}
          autoComplete="off"
        />
        <button className={"searchIcon " + (input ? 'active' : 'inactive')} type="submit" onClick={onFormSubmit}><SearchButton /></button>
      </form>


    );
}
  
export default SearchForm;