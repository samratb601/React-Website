import React, { useState } from "react";
import ContactSvg from './images/undraw_contact_us_15o2.svg';
// import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import AlternateEmailTwoToneIcon from '@material-ui/icons/AlternateEmailTwoTone';
import PhoneAndroidTwoToneIcon from '@material-ui/icons/PhoneAndroidTwoTone';
import ModeCommentTwoToneIcon from '@material-ui/icons/ModeCommentTwoTone';




const Contact = () => {
    const iconColor = { color: "rgb(50, 221, 141)" };

    const [data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '', 
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setData((previousValue) => {
            return {...previousValue,[name]:value,}
        });

    }
    const submitEvent = (event) => {
        event.preventDefault();
        alert(`${data.name},${data.email},${data.mobile},${data.message}`);
        setData({
        name: '',
        email: '',
        mobile: '',
        message: '',})
    }

    return(
        <div className="container-fluid mt-5"><div className="row"><div className="col-10 mx-auto my-5">
            <div className="row ">

            <div className="col-lg-6 col-md-6 col-sm-12 pt-4 d-flex align-content-center mb-sm-5" id="home_img_div">
                    <img className="img-fluid" id="home_img" src={ ContactSvg } alt="Home img"/>
            </div>
                
        <div className="d-flex flex-column justify-content-center  col col-lg-6 col-md-6 col-sm-12 pt-4 pt-lg-0 mt-sm-3">   
        <div className="col-12">
        <div className="row ">
                            <h1 className="text-center mb-3 font_color">Contact Us</h1>
                            
                    <form className="" onSubmit={submitEvent} >
                                
                    <div className="input-group mb-3">
                    <span className="input-group-text " ><PersonOutlineTwoToneIcon style={iconColor}/></span>
                    <input type="text" className="form-control" value={data.name} name="name" onChange={inputEvent} placeholder="Name" />
                    </div>

                    <div className="input-group mb-3">
                                <span className="input-group-text " ><AlternateEmailTwoToneIcon style={ iconColor}/></span>
                    <input type="email" className="form-control" value={data.email} name="email" onChange={inputEvent} placeholder="Recipient's e-mail"  />
                    </div>

                    <div className="input-group mb-3">
                                <span className="input-group-text " ><PhoneAndroidTwoToneIcon style={ iconColor }/></span>
                    <input type="text" className="form-control" value={data.mobile} name="mobile" onChange={inputEvent} placeholder="Mobile" />
                    </div>

                    <div className="input-group">
                                <span className="input-group-text "><ModeCommentTwoToneIcon style={ iconColor}/></span>
                    <textarea className="form-control" value={data.message} name="message" onChange={inputEvent} placeholder="Send a Message" aria-label="With textarea"></textarea>
                    </div>
                    <div className=" d-flex justify-content-center">     
                    <button className="link_button mt-4 px-5" type="submit">Submit</button>
                    </div>
                    </form>
                              
        </div>       
                    </div></div>
            
            </div>
            </div>
        </div>
        </div>)
}

export default Contact;