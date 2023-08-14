import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products: [
            {
                title: 'IPhone',
                price: 999,
                qty: 1,
                img: '',
                id: 1
            },
            {
                title: 'Watch',
                price: 99,
                qty: 5,
                img: '',
                id: 2
            },
            {
                title: 'Laptop',
                price: 999,
                qty: 1,
                img: '',
                id: 3
            }
        ]
    }
  }

  handleIncreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          products: products
      })
  }

  handleDecreaseQuantity = (product) => {
      if(product.qty == 0){
          return;
      }
      const { products } = this.state;
      const index = products.indexOf(product);
    
      products[index].qty -= 1;
    
      this.setState({
          products: products
      })
  }

  handleDeleteProduct = (id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id); // return another arr[{}]

      this.setState({
          products: items
      })
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.price * product.qty;
    })

    return cartTotal;
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">

        <Navbar count={this.getCartCount()}/>
        <h1>Cart</h1>
        <Cart 
            products={products}
            handleIncreaseQuantity={this.handleIncreaseQuantity}
            handleDecreaseQuantity={this.handleDecreaseQuantity}
            handleDeleteProduct={this.handleDeleteProduct}
        />

        <div className="cart-total">
          TOTAL: {this.getCartTotal()}          
        </div>

      </div>
      
    );
  }
}

export default App;
