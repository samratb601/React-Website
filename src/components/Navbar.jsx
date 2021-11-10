import React from "react";
import { NavLink } from 'react-router-dom';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';


const Navbar = () => {
    return (<div className="container-fluid nav_bg " id="sticky_nav">
                <div className="row">
                    <div className="col-12 col-md-11  mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light shadow-sm ">
                    <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold " id="navbar-brand" to="/">XYZ</NavLink>
                    <button className="navbar-toggler shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <MenuOpenOutlinedIcon/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                                <li className="nav-item">
                            <NavLink exact activeClassName="active_link"  className="nav-link d-inline-block mb-2 mb-md-0 mb-lg-0 "  to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                            <NavLink  activeClassName="active_link" className="nav-link d-inline-block mb-2 mb-md-0 mb-lg-0 "  to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                            <NavLink  activeClassName="active_link" className="nav-link d-inline-block mb-2 mb-md-0 mb-lg-0 "  to="/service">Serivce</NavLink>
                                </li>
                                <li className="nav-item">
                            <NavLink  activeClassName="active_link" className="nav-link d-inline-block mb-2 mb-md-0 mb-lg-0 "  to="/contact">Contact</NavLink>
                                </li>        
                        </ul>
                    </div>
                    </div>
                    </nav>
        </div>
    </div>
</div>);
}
export default Navbar;