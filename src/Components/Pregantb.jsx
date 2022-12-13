import React from "react";
const Pregantb=(props)=>{
return <>
 <div className="col-md-6">
        <div className="row mt-5">
            <h2>{props.pregantheading}</h2>
        </div>
        <div className="row mt-4">
            <p>{props.pregantwoman}</p>
        </div>
        <div className="row mt-4">
            <button className="join">{props.join}</button>
        </div>
    </div>
</>

}
export default Pregantb;