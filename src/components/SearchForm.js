import React, { useState } from 'react';
// import history from '../actions/history';


import SearchIcon from '../assets/svg/search.svg';

  const SearchForm = () => {
  
  const [input, setInput] = useState('');

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

 
  
    return (
     
      <form onSubmit={onFormSubmit}>
        <input
          onChange={e => setInput(e.target.value)}
          id="searchInput"
          type="text"
          placeholder="Search for a movie..."
          value={input}
          autoComplete="off"
        />
        {/* <input type="submit" value="Submit" /> */}
        <button className="searchIcon" type="submit" onClick={onFormSubmit}><img alt="Search" src={SearchIcon} /></button>
      </form>


    );
}
  
export default SearchForm;