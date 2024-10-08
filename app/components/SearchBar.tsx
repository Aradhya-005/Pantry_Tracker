import React from 'react';
import '../css/SearchBar.css'; // Import the CSS file
   
interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'enter item'}) => {
  

  

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        
      />
      <button className="search-button" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M10 2a8 8 0 105.292 14.708l4.707 4.707-1.414 1.414-4.707-4.707A8 8 0 1010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
