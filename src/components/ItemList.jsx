import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Item from "./Item";

const ItemList = observer(() => {
    const {item} = useContext(Context)
    return (
        <div>
            {item.items.map(item =>
            <Item />
            )}

        </div>
    );
});

export default ItemList;