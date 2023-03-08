import React from "react";
import Searchproduct from "./productsearch";
import Locationsearch from "./locationsearch";
import { Link } from "@chakra-ui/react";

function Header() {
  return (
    <div className="head">
      <div className="head1">
        <div className="headlogo">
          l <span>o</span> g <span>o</span>
        </div>

        <div className="headSearch">
        <div className="search">
          <Searchproduct  />
        </div>
        <div className="search">
          <Locationsearch />
        </div>
      </div>
      </div>
      <div className="headSell">
        <Link to="/sell">Sell On Green Shop</Link>
      </div>
    </div>
  );
}

export default Header;
