import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location.trim()) {
      onSearch(location);
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city or zip code"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
