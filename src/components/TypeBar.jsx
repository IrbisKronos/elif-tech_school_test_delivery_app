import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {items} = useContext(Context)
    return (
        <div className="list-group">
            {items.types.map (types =>
                <a
                    className = "list-group-item list-group-item-action"
                    key={types.id}
                    style={{cursor: "pointer"}}
                >
                    {types.name}
                </a>
            )}
        </div>
    );
});

export default TypeBar;