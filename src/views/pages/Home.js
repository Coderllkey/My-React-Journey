import spiderman from '../../assets/img/spiderman.png';
import simg1 from '../../assets/img/our_service_1.png';
import simg2 from '../../assets/img/our_service_2.png';
import simg3 from '../../assets/img/our_service_3.png';
import simg4 from '../../assets/img/our_service_4.png';
import { NavLink } from 'react-router-dom';


const Home = _ =>{

const works = [
   {id:1, title:'some title texxt', body:'this is the body part wheere there is long text'},
   {id:2, title:'some title texxt', body:'this is the body part wheere there is long text'},
   {id:3, title:'some title texxt', body:'this is the body part wheere there is long text'},
   {id:4, title:'some title texxt', body:'this is the body part wheere there is long text'},

]

const Services = [
   {id:1, description:'Research, Analysis', image:simg1},
   {id:2, description:'Creative Annovation', image:simg2},
   {id:3, description:'Contruct, Compute', image:simg3},
   {id:4, description:'High Potential Goals', image:simg4}
]


    return (
      <div className='container '>
         {/* Home  */}
               <div className="  ">
                  <section className="row">
                     <div className="col-lg-9 mt-4 mx-auto ">
                     <h3 className='fw-light'> Amazing Band for You </h3>
                     <h3 className='mb-4'>Take You To A Whole New World , Follow Through</h3>
                     
                     <img src={spiderman} className='img-fluid' />


                     </div>
                  </section>
               </div>


        {/* Work  */}
                     <div className="  ">
                           <section className="row">
                              <div className="col-lg-9 mt-4 mx-auto ">
                              <h3 className='text-center'> Work Spaces </h3>
                              <div className='row'>
                              {works.map((work, index)=>{
                                 return(
                                                         <div className='col-md-6 p-2' key={index}>
                                    <div className="card p-2 shadow " >
                                                   <img src={spiderman} className='img-fluid' />
                                    <div className="card-body">
                                       <h5 className="card-title">{work.title}</h5>
                                       <p className="card-text">{work.body}</p>
                                    </div>
                                    </div>
                                    </div>
                                 )
                              })}
                              
                              </div>
                              </div>
                           </section>
                        </div>

         {/* Services  */}

         <div className='my-4'>
            <section className='col-lg-9 mt-4 mx-auto'>
               <div className='py-3 d-flex justify-content-end'>
                  <span className=''>More <i className="bi bi-arrow-right-circle"></i></span>
               </div>
               <div className='row '>
                  <div className='col-md-6'>
                     <h2>Our Services</h2>
                  </div>
                  <div className='col-md-6'>
                  <p className='w-75 '>some text for the neecesary thing to be carreid out her xt for the neecesary thing to be carreid out herxt for the neecesary thing to be carreid out here 
                  </p>
                  </div>
               </div>
               <div className='row mt-4'>

                  {Services.map((service, index)=>{
                     return(
                        <div key={index} className='col-md-3 col-6 g-3'>
                        <div className="card ">
                           <div className="card-body">
                              <img src={service.image} className='img-fluid' />
                              <p className="card-title text-center">{service.description}</p>
                           </div>
                        </div>
                     </div>
                     )
                  })}
                 
                 
                  
               </div>
               <div className='my-4 text-end '>
                  <span role='button'>
                  <a  className='text-decoration-none mx-2  text-dark'>Explore More</a>
                  <i className="bi bi-arrow-right-square"></i>
                  </span>
                
               </div>
            </section>
         </div>

         {/* Story  */}
         <div className='mt-5'>
            <section className='col-lg-9 mt-4 mx-auto text-center'>
                    <h6 className='text-muted mb-4'>Next</h6>
                    <div className='' style={{height:180}}>
                    <h2 className='  '>Our Story</h2>
                    <h1><a className="bi bi-arrow-right text-dark" role='button'></a></h1>
                    </div>
                    <hr/>
                  
            </section>
         </div>

         {/* footer  */}
         <div>
            <section className='col-lg-9 mt-4 mx-auto text-center row'>
                 <div className='col-md-4 small '>
                     <NavLink to='/work' className='mx-2 text-decoration-none text-dark' >Work </NavLink>
                     <NavLink to='/story' className='mx-2 text-decoration-none text-dark' role='button'>Story</NavLink>
                     <NavLink to='/service' className='mx-2 text-decoration-none text-dark' role='button'>Service</NavLink>
                     <NavLink className='d-md-none mx-2 text-decoration-none text-dark' role='button'>Carrers</NavLink>
                      <NavLink className='d-md-none mx-2 text-decoration-none text-dark' role='button'>Contact Us</NavLink>
                 </div>
                 <div className='col-md-4 '>
                     <h5 className='fw-bold' role='button' >Repo Hub</h5>
                 </div>
                 <div className='col-md-4 d-flex small'>
                      <NavLink className=' d-none d-md-block  mx-2 text-decoration-none text-dark' role='button'>Carrers</NavLink>
                      <NavLink className='d-none d-md-block  mx-2 text-decoration-none text-dark' role='button'>Contact Us</NavLink>

                 </div>
              </section>
         </div>

      </div>
    )
  }
  
  export default Home;