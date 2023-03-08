
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./productsearch.css";

function Locationsearch() {
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
          <input
            type="text"
            placeholder="Location Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}><BiSearchAlt></BiSearchAlt></button>
        </form>
      </div>
    );
}

export default Locationsearch;