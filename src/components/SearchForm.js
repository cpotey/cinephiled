import React, { useState} from 'react';

  const SearchForm = () => {
  
  const [input, setInput] = useState('');

  function onFormSubmit(e) {
    e.preventDefault();
    if (input.length === 0) {
      return;
    }
    setInput('');
    window.location.href = `${process.env.PUBLIC_URL}/search/${input}`;
  }

  
  
    return (
     
      <form onSubmit={onFormSubmit}>
        <input
          id="searchInput"
          type="text"
          placeholder="Search for a movie..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>


    );
}
  
export default SearchForm;