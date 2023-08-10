import React from "react";
import CartItem from './CartItem';

class Cart extends React.Component {

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

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                { products.map((product) => {
                    return (
                        <CartItem  
                            product={product} 
                            key={product.id}
                            handleIncreaseQuantity={this.handleIncreaseQuantity}
                            handleDecreaseQuantity={this.handleDecreaseQuantity}
                            handleDeleteProduct={this.handleDeleteProduct}
                        />
                    )
                }) }
            </div>
            
        );
    }
}


export default Cart;