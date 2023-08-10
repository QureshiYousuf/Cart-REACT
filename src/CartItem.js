import React from "react";

// installing fontawesome
// npm i --save @fortawesome/fontawesome-svg-core 
// npm i --save @fortawesome/free-solid-svg-icons    
// npm i --save @fortawesome/free-regular-svg-icons 
// npm i --save @fortawesome/react-fontawesome@latest

// using fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome);


class CartItem extends React.Component {

    // using arrow func value of 'this' will be binded to the increaseQuantity function
 


    render() {
        // object destructuring
        const {title, price, qty} = this.props.product;
        const {
                product, 
                handleIncreaseQuantity, 
                handleDecreaseQuantity, 
                handleDeleteProduct
            } = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25, fontWeight: "bold"}}> {title} </div>
                    <div style={{fontSize: 15, color: "grey"}}> {price} </div>
                    <div style={{fontSize: 15, color: "grey"}}> {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <h4 className="action-icons" onClick={() => handleIncreaseQuantity(product)}><FontAwesomeIcon icon="fa-solid fa-cart-plus" /></h4>
                        <h4 className="action-icons" onClick={() => handleDecreaseQuantity(product)}><FontAwesomeIcon icon="fa-solid fa-square-minus" /></h4>
                        <h4 className="action-icons" onClick={() => handleDeleteProduct(product.id)}><FontAwesomeIcon icon="fa-solid fa-trash" /></h4>
                    </div>
                </div>
            </div>
        );
    }
}


const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4
    }
  }

export default CartItem;