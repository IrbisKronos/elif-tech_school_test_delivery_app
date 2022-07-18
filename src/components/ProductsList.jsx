import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ProductCard from "./ProductCard";

const ProductsList = observer(() => {
    const {items} = useContext(Context)


    return (
        <div className="row mh-100 overflow-scroll " style={{height: "600px"}}>
            {items.items.map(items =>
                <ProductCard items={items} />
            )}
        </div>
    );
});

export default ProductsList;