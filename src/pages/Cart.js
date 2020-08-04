import React, {Component} from 'react';
import {connect} from 'react-redux'


class Cart extends Component {
    render() {
        const cart = this.props.cart
        return (
            <div>
                    {cart.map(item => <li key={item.id}>
                    <h3>nama barang: {item.name}</h3>
                    <h3>harga barang: {item.price}</h3>
                    <h3>jumlah item: {item.quantity}</h3>
                    <h3>total harga: {item.price * item.quantity}</h3>
                    </li>)}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
   
    return{
        products : state.products,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);