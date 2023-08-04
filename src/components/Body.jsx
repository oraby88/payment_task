import React from "react";

export default function Body() {
  return (
    <>
      <div className="m-5">
        <div className="w-70 p-4  text-center bg-info">
          <h1 className=" text-danger">Completion of the purchase process</h1>
        </div>
        <p>
          Returning customer? <a className="text-danger" href="#">Click here to login</a>
        </p>
        <p>
          Do you have a coupon? 
          <a className="text-info" href="#">Click here to enter your code</a>
        </p>
        <input
          type="text"
          className="form-control bg-danger"
          placeholder="coupon code"
        />
        <p className="text-primary">
          <strong>Invoice details</strong>
        </p>

        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label" >
              First name*
            </label>
            <input type="text" class="form-control bg-info" id="inputEmail4" placeholder="Hassan"/>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label" >
              Last name*
            </label>
            <input type="text" class="form-control bg-info" id="inputPassword4" placeholder="Mamouni"/>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Phone*
            </label>
            <input type="number" class="form-control bg-info" id="inputPassword4" placeholder="+212601010101"/>
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email address*
            </label>
            <input type="email" class="form-control bg-info" id="inputEmail4" placeholder="example@n9dar.com" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Create a password for your account *
            </label>
            <input
              type="password"
              class="form-control bg-info"
              id="inputAddress"
              placeholder="password"
            />
          </div>
          <div class="col-12">
            
          <div class="dropdown">
          <label for="inputAddress" class="form-label">
              Country *
            </label>
            <select class="form-select bg-info" aria-label="Default select example">
                <option selected>Morocco</option>
                <option value="1">Egypt</option>
                <option value="2">UAE</option>
                <option value="3">Tunisia</option>
            </select>
            </div>
          </div>
          <p className="text-primary">
          <strong>Additional information</strong>
          </p>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Order notes
            </label>
            <div class="form-outline mb-4">
            <textarea class="form-control bg-info" id="textAreaExample6" rows="3" placeholder="Order notes, for example:special delivery instructions"></textarea>
            </div>
          </div>
        </form>
        <hr/>
        <p className="text-primary">
          <strong>Payment information</strong>
        </p>
        <img alt="" width="35px" height="30px"
        src="https://thumbs.dreamstime.com/b/paypal-logo-printed-paper-chisinau-moldova-september-internet-based-digital-money-transfer-service-128373487.jpg" ></img>
        <img alt="" width="45px" height="30px"
        src="https://seeklogo.com/images/D/Discover_Card-logo-4BC5D7C02C-seeklogo.com.png" ></img>
        <hr/>

        <form className="d-flex">
          <div>
            <input type="radio" id="creditcard" name="payment" value="creditcard"/>
            <label for="creditcard">Credit Card</label>
            <div className="">
          <form class="bg-danger row g-3">
          <h4>The Cradit Card</h4>
          <p><span className="">Notice: </span>Please contact us for alternative pyment and purchasing methods if you do not have PayPal or a credit card</p>
          <p>This payment is protected through SSL encryption</p>
          <div class="col-12">
            <label for="inputEmail4" class="form-label" >
              <strong>CardHolder Name *</strong>
            </label>
            <p>The name printed on ypur credit card</p>
            <input type="text" class="form-control" id="inputEmail4" placeholder="CardHolder Name"/>
          </div>
          
          <div class="col-12">
            <label for="inputEmail4" class="form-label">
              <strong>Credit Card Number *</strong>
            </label>
            <input type="number" class="form-control" id="inputEmail4" placeholder="1234 1234 1234 1234" />
          </div>
          <div class="col-md-6">
            <label for="inputAddress" class="form-label">
              <strong>Expiration Date *</strong>
            </label>
            <input
              type="date"
              class="form-control"
              id="inputAddress"
            />
          </div>
          <div class="col-md-6">
            <label for="inputAddress" class="form-label">
              <strong>CVC Code *</strong>
            </label>
            <input
              type="date"
              class="form-control"
              id="inputAddress"
              
            />
          </div>
          <p>* Your personal information will be used to process your order. for more information, read <a href="#">The Privacy Policy.</a> </p>
          <div class="col-12">
            <input type="number" class="form-control" id="inputEmail4" placeholder="Subtotal : 30,00 $" />
          </div>
          <button type="submit" className="btn btn-primary">Complete checkout</button>
          </form>
          <br/>
        </div>
          </div>
          <div>
            <input type="radio" id="paypal" name="payment" value="paypal"/>
            <label for="paypal">PayPal</label>
          </div>
        </form>
        <br/>
        
        
        
     
      </div>
    </>
  );
}
