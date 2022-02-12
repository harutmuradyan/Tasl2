import React from "react";
import Item from "../Item/Item";
import './Items.scss';

const Items = ({data}) => {
    return (
        <div className="items">
            {data.map(item => 
                <Item   key={item.id} 
                        name={item.name}   
                        id={item.id} 
                        url={item.url}
                        width = {item.width}
                        height = {item.height}
                />
            )}
        </div>
    )
}

export default Items;