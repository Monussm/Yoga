import React from "react";
const Excersieb=(props)=>{
    return<>
    <div className="col-md-4 thirdicon">
    <img src={props.thirdicon} alt="wow"/>
    <h3 className="mx-5">{props.program1}</h3>
    <p>{props.Lorem}</p>
    </div>
    <div className="col-md-4">
       
        <img src={props.secondicon} alt="wow"/>
        <h3 className="mx-5">{props.Program2}</h3>
        <p>{props.Lorem2}</p>
    </div>
    <div className="col-md-4">
    <img src={props.firsticon} alt="wow"/>
    <h3 className="mx-5">{props.Program3}</h3>
    <p>{props.Lorem3}</p>

    </div>
    </>



}
export default Excersieb;