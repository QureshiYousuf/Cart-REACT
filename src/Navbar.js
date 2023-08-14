import React from "react";
// using fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome);

const Navbar = (props) => {

    return (
        <div className="navbar">
            <h3>Home</h3>
            <div className="navbar-items">                    
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> 
                <span style={styles.cartCount}> {props.count} </span>
            </div>
        </div>
    );
}


const styles = {
    cartCount: {
        fontSize: '10.5px',
        fontWeight: 'Bold',
        background: 'yellow',
        borderRadius: '50%',
        padding: '2px 6px',
        position: 'absolute',
        right: 5,
        top: 11
    }
  }

export default Navbar;