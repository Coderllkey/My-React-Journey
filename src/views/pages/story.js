import { useNavigate } from 'react-router-dom';
import spiderman from '../../assets/img/superman.png';
import { Helmet } from 'react-helmet';


const Story = _ =>{

  const navigate = useNavigate();
const go=()=>{
   console.log('go');
navigate('/service')
}


    return (
      <div>
              <div className="  ">
                <Helmet>
                  <title>My App | Story</title>
                </Helmet>
                          <section className="row ">
                            <div className="col-lg-9 mt-4 mx-auto ">
                            <h3 className='fw-light headline'> Our Story </h3>
                            <h3 className='mb-4 headline'>We developer complex interface systems for Web, Mobile & AI</h3>
                            
                            <img src={spiderman} className='img-fluid headline rounded' />


                            </div>
                          </section>
                              <section className='d-flex  col-lg-9 mx-auto'>
                                  <div className='mx-4  '>
                                    <h1 className='fw-bold '>20</h1>
                                    <p>Employees</p>
                                  </div>
                                  <div className='mx-4  '>
                                    <h1 className='fw-bold '>5</h1>
                                    <p>Year Experience</p>
                                  </div>
                            </section>
                      </div>
                      {/* some card  */}

                      

                      {/* another section  */}

                      <div className='mt-5'>
            <section className='col-lg-9 mt-4 mx-auto text-center'>
                    <h6 className='text-muted mb-4 headline'>Next</h6>
                    <div className='' style={{height:180}}>
                    <h2 className='  headline'>Our Service</h2>
                    <h1><a onClick={go}  className="bi bi-arrow-right text-dark headline" role='button'></a></h1>
                    </div>
                    <hr/>
                  
            </section>
         </div>

      </div>
    )
  }
  
  export default Story;