import React from "react";
const Bodyr=(props)=>{
    return <>
    <div className="col-md-6">
        <img className="Firstimg" src={props.firstimg} alt="First"/>
    </div>
    <div className="col-md-6">
        <div className="row mt-5">
            <h2>{props.balance}</h2>
        </div>
        <div className="row mt-4">
            <p>{props.lorem}</p>
        </div>
        <div className="row mt-4">
            <button className="join">{props.join}</button>
        </div>
    </div>
    </>

}
export default Bodyr;