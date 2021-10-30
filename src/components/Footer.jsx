import React from 'react';
import FacebookOutlinedIcon from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import YouTube from '@material-ui/icons/YouTube';


const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (<div className="footer text-center  py-2" id="footer">
        <p className=""> © Copyright {currentYear} . All Rights Reserved <span className="font_color">Privacy Policy</span> | <span className="font_color">Terms & Conditions</span></p>
        <div className="align-content-center mt-5 social_icons_div"><FacebookOutlinedIcon className="mx-3 social_icons" /><LinkedIn className="mx-3 social_icons" /><YouTube className="mx-3 social_icons" /><Instagram className="mx-3 social_icons" /><Twitter className="mx-3 social_icons" />
        </div>
    </div>)
}


export default Footer;