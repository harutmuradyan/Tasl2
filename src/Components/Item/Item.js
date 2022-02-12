/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Item.scss';

const Item = ( { id , url , name}) => {
    return (
        <div className="item">
            <p className="item-id">{id}</p>
            <p className="item-title">{name}</p>
            <div className="item-img">
                <img   src={url} ></img>
            </div>
        </div>
    )
}

export default Item;