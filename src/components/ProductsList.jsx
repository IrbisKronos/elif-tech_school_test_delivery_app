import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ProductCard from "./ProductCard";

const ProductsList = observer(() => {
    const {items} = useContext(Context)

    return (
        <div className="container">
            <div className="row" style={{    }}>
                {items.items.map(items =>
                    <ProductCard items={items} />
                )}
            </div>
        </div>
    );
});

export default ProductsList;