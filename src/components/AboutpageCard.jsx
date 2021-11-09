import React from 'react'

const AboutpageCard = (props) => {
    return (
        <>
            <div className=" col-md-3 col-12 mx-auto my-3 py-5 px-0 px-md-2 bg-light rounded-2 shadow-sm d-flex flex-column justify-content-center text-center">
                <h1 className=" mb-3 fw-bolder " style={{ color:props.color}}>{props.title}</h1>
                    <p className="h6" style={{ color:props.color}}>{props.text}</p>
            </div>
        </>
    )
}
export default AboutpageCard;