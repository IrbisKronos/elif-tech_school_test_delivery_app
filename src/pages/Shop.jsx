import React from 'react';
import TypeBar from "../components/TypeBar";
import ProductsList from "../components/ProductsList";

const Shop = () => {
    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-md-3 col-12" style={{minWidth: '25%'}}>
                    <TypeBar />
                </div>
                <div className="col-md-9 col-12 h-100" style={{overflowY: 'scroll'}}>
                    <ProductsList />
                </div>
            </div>
        </div>
    );
};

export default Shop;