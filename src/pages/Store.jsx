import React from 'react';
import TypeBar from "../components/TypeBar";

const Store = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <TypeBar />
                    </div>
                    <div className="col-9">Items</div>
                </div>
            </div>
        </div>
    );
};

export default Store;