import React from 'react'

const HomepageCard = (props) => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-3 my-2 mx-auto py-5 px-3 text-center rounded-1 shadow-sm bg-light" >
                    <h6 className=" mb-lg-4 mb-3 ">{props.title}</h6>
                    <p className="">{props.text}</p>
            </div>
        </>
    )
}
export default HomepageCard;
