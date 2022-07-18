import React from 'react';
import TypeBar from "../components/TypeBar";
import ProductsList from "../components/ProductsList";

const Shop = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <TypeBar />
                    </div>
                    <div className="col-9">
                        <ProductsList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;