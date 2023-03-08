import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./productsearch.css";

function Productsearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // perform search logic here
    console.log("Searching for: ", searchTerm);

    // clear the search input field
    setSearchTerm("");
  };

  return (
    <div class="input-container">
      <form>
      <button onClick={handleSearch}><BiSearchAlt></BiSearchAlt></button>
        <input
          type="text"
          placeholder="Search Product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
      </form>
    </div>
  );
}

export default Productsearch;
