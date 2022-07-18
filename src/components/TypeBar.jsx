import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {items} = useContext(Context)
    return (

        <div className="list-group">
            <div className="align text-center px-4 m-3 fw-bold ">
                <p>Shops:</p>
            </div>
            {items.types.map (types =>
                <a className = "list-group-item list-group-item-action mb-3 p-4 rounded-3 border-1 text-center"
                   key={types.id} style={{cursor: "pointer"}} >
                    {types.name}
                </a>
            )}
        </div>
    );
});

export default TypeBar;