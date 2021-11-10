import React from 'react'

const HomepageCard = (props) => {
    return (
        <>
             <div className="col-lg-3 col-md-6 col-12 mx-auto mb-4 ">
                <div className="card ms-2 py-2 shadow-sm"
                    style={{
                        height: '30vh',
                        backgroundColor:  props.bgcolor 
                    }} >
                
                    <div className="card-body d-flex align-content-center flex-column justify-content-center">
                        <h6 className="card-title text-center text-uppercase mt-0 mb-4">{props.title} </h6>
                    <p className="text-center" >{props.text}</p>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomepageCard;
