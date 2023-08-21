import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
// import * as firebase from 'firebase'; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


class App extends React.Component {

  constructor () {
    super();
  
    this.state = {
      products: [],
      loading: true
    }

    this.db = firebase.firestore();
    // console.log("db",this.db);
  
  }

  componentDidMount() {
    // console.log("db",this.db);
    this.db
    .collection('products')
    // .where('price', '<', 90)
    .onSnapshot((snapshot) => {
      // console.log("snapshot",snapshot.docs);
      snapshot.docs.map((doc) => {
        // console.log(doc.data());
      });

      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products,
        loading: false
      });
    });
  }

  addProduct = () => {
    console.log("db",this.db);
    this.db
    .collection("products")
    .add({
      img: '',
      price: 70,
      qty: 10,
      title: 'Wall Clock'
    })
  }

  handleIncreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);

      // products[index].qty += 1;
      const docRef = this.db.collection("products").doc(products[index].id);
      docRef.update({
        qty: products[index].qty + 1
      })      
      .then(() => {
        console.log("Updated successfully");
      })
      .catch((err) => {
        console.log("Error: ", err);
      })
  }

  handleDecreaseQuantity = (product) => {
      if(product.qty == 0){
          return;
      }
      const { products } = this.state;
      const index = products.indexOf(product);
    
      // products[index].qty -= 1;
      const docRef = this.db.collection("products").doc(products[index].id);
      docRef.update({
        qty: products[index].qty - 1
      })      
      .then(() => {
        console.log("Updated successfully");
      })
      .catch((err) => {
        console.log("Error: ", err);
      })

      this.setState({
          products: products
      })
  }

  handleDeleteProduct = (id) => {
      const {products} = this.state;

      const docRef = this.db.collection("products").doc(id);

      docRef
      .delete()
      .then(() => {
        console.log("Deleted successfully");
      })
      .catch((err) => {
        console.log("Error: ", err);
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
      if(product.qty > 0){
        cartTotal = cartTotal + product.price * product.qty;
      }
      return '';
    })

    return cartTotal;
  }

  render() {
    const {products} = this.state;
    const{loading} = this.state;
    return (
      <div className="App">

        <Navbar count={this.getCartCount()}/>
        <h1>Cart</h1>
        {/* <button onClick={this.addProduct}>Add Product</button> */}
        <Cart 
            products={products}
            handleIncreaseQuantity={this.handleIncreaseQuantity}
            handleDecreaseQuantity={this.handleDecreaseQuantity}
            handleDeleteProduct={this.handleDeleteProduct}
        />

        {loading && <h1 className="loading-products">Loading products...</h1>}
        <div className="cart-total">
          TOTAL: {this.getCartTotal()}          
        </div>

      </div>
      
    );
  }
}

export default App;
