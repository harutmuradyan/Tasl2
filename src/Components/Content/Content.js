import React from "react";
import Items from "../Items/Items";
import './Content.scss';

//Import commponents


const Content = ({data}) => {
    return (
        <div className="content">
            <div className="content-block">
                <Items data={data}/>
            </div>
        </div>
    )
}

export default Content;