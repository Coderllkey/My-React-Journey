import { Helmet } from "react-helmet";

const Contact = _ =>{
    return (
      <div>
        <Helmet>
        <title>My App | Contact</title>

        </Helmet>
         <section className="col-lg-9 mt-4 mx-auto  ">
         <h3>Wazup there</h3>
         <h3 className="fw-bold">Feel free to drop a line, We are here for you</h3>
           {/* formsection  */}
           <section className="py-4">
            
            <div className="w-75 my-2">
              <div className="d-flex fs-3 text-secondary justify-content-between">
              <label className=" ">New Business</label>

              <i class="bi bi-arrow-right " role="button"></i>

              </div>
              <input className="form-control"/>
            </div>

            <div className="w-75 my-2">
              <div className="d-flex fs-3 text-secondary justify-content-between">
              <label className=" ">Send a message</label>

              <i class="bi bi-arrow-right " role="button"></i>

              </div>
              <input className="form-control"/>
            </div>

            <div className="w-75 my-2">
              <div className="d-flex fs-3 text-secondary justify-content-between">
              <label className=" ">Careers</label>

              <i class="bi bi-arrow-right " role="button"></i>

              </div>
              <input className="form-control"/>
            </div>

            </section>
           {/* formsection  */}


           {/* end section  */}
          <div className="row">
             <div className="col-md-4">
                    <small className="text-muted">General Inquery</small>
                    <h2>Quick Chat</h2>
                    <p><i class="bi bi-messenger me-2"></i>Message on Facebook</p>
             </div>
             <div className="col-md-4">
                    <small className="text-muted">New business —</small>
                    <h2>hi@myeamil.co</h2>
                    <p><i class="bi bi-telephone-outbound-fill me-2"></i>+95 9 888 777 666</p>
             </div>
             <div className="col-md-4">
                    <small className="text-muted">Office —</small>
                    <h2>Yangon</h2>
                    <p><i class="bi bi-geo-alt-fill me-2"></i>Yangon, Myanmar</p>
             </div>

          </div>
         {/* end section  */}


         </section>


      

      </div>
    )
  }
  
  export default Contact;