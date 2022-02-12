import React from "react";
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <h2 className="header-logo__title">
                    Cats
                    <span >Project</span>
                </h2>   
            </div>
        </header>
    )
}

export default Header;