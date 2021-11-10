import React from 'react'

const AboutpageCard = (props) => {
    return (
        <>
            <div className=" col-md-6 col-12 mx-auto mb-4 ">
                <div className="card ms-2 py-2 shadow-sm "
                    style={{
                        height: '35vh',
                        backgroundColor:  props.bgcolor 
                    }} >
                
                    <div className="card-body d-flex align-content-center flex-column justify-content-center p-5">
                        <h1 className="card-title text-center text-uppercase mt-0 mb-4" style={{color:props.color}}>{props.title} </h1>
                    <p className="text-center" style={{color:props.color}}>{props.text}</p>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutpageCard;