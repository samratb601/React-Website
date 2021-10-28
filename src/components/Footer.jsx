import React from 'react';


const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (<footer className="footer text-center  py-2" id="footer">Copyright @ { currentYear }</footer>)
}

export default Footer;