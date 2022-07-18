import React from 'react';
import ContactForm from "../components/ContactForm";
import TypeBar from "../components/TypeBar";
import ProductsList from "../components/ProductsList";
import CartList from "../components/CartList";

const Cart = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <ContactForm />
                    </div>
                    <div className="col-6">
                        <CartList />
                    </div>
                </div>
            </div>
        </div>
            );
};

export default Cart;