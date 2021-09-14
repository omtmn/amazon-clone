import React from 'react';
import "../css/Navbar.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../context/StateProvider";

function Navbar() {
    const [{ cart }] = useStateValue(); //using that data layer and changing it with dispatch
    return (
        <nav className="navbar">
            <Link to="/">
                <img 
                className="navbar_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="amazon" /> 
            </Link>
            <div className="nav_search">
                <input type="text" className="nav_searchInput" />
                <SearchIcon className="nav_searchIcon" />
            </div>
            <div className="nav_links">
                <Link to="/login" className="links"> 
                    <div className="nav_option">
                        <span className="nav_optionLineOne"> Hello, Sign in</span>
                        <span className="nav_optionLineTwo"> Accounts & List </span>
                    </div>
                </Link>
                <Link to="/" className="links"> 
                    <div className="nav_option">
                        <span className="nav_optionLineOne">Returns</span>
                        <span className="nav_optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link className="links" to="/checkout">
                    <div className="nav_optionCart">
                        <ShoppingBasketIcon/>
                        <span className="nav_optionLineTwo nav_count">{cart?.length}</span> {/* length of the cart in outer data layer */}
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
