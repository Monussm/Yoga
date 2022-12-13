import React from "react";
const Form=()=>{
    return<>
    <div className="container">
        <div className="row">
            <h3 className="text-center">Get in touch</h3>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Full Address</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <div className="row">
    <button className="join mt-3" type="sumbit">Submit</button>

  </div>
</div>
    
    
        </div>

    </div>
    
    </>






}
export default Form;