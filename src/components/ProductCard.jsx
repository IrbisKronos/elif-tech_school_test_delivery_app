import React from 'react';

const ProductCard = (items) => {
    //debugger;

    return (
        <div className="card col-md-5 m-4 p-4">
            <img src={items.items.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{items.items.name}</h5>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-warning">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;