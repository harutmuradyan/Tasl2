/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import './Sidebar.scss';
import Page from "../page/Page";

const Sidebar = () => {

    

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/categories")
          .then(res => res.json())
          .then(res => setCategory(res)
        )
      }, [])

    const [category, setCategory] = useState([
    ]) 

   
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Categoryes</h2>
            <div className="sidebar-content">

                <Page/>

                <ul className="sidebar-navbar__items">
                    {category.map(item => 
                        <li className="sidebar-navbar__item">
                            <Link to='/category/1' className="sidebar-navbar__link" key={item.id}>
                                {item.name}
                            </Link>
                        </li>
                    )}  
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;