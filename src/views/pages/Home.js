import spiderman from '../../assets/img/spiderman.png';
import simg1 from '../../assets/img/our_service_1.png';
import simg2 from '../../assets/img/our_service_2.png';
import simg3 from '../../assets/img/our_service_3.png';
import simg4 from '../../assets/img/our_service_4.png';
import img1 from '../../assets/img/batman.png';
import img2 from '../../assets/img/drfate.png';
import img3 from '../../assets/img/flash.png';
import img4 from '../../assets/img/ironman.png';
import prephoto from '../../assets/img/myss.png';



import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../../assets/css/cus.css';
import { Helmet } from 'react-helmet';



const Home = _ =>{



const works = [
   {id:1, title:'some title texxt', body:'this is the body part wheere there is long text' , photo:img1},
   {id:2, title:'some title texxt', body:'this is the body part wheere there is long text',  photo:img2},
   {id:3, title:'some title texxt', body:'this is the body part wheere there is long text', photo:img3},
   {id:4, title:'some title texxt', body:'this is the body part wheere there is long text',  photo:img4},

]

const Services = [
   {id:1, description:'Research, Analysis', image:simg1},
   {id:2, description:'Creative Annovation', image:simg2},
   {id:3, description:'Contruct, Compute', image:simg3},
   {id:4, description:'High Potential Goals', image:simg4}
]
const navigate = useNavigate();
const go=()=>{
   console.log('go');
navigate('/story')
}


useEffect(()=>{
  

   ScrollReveal().reveal('.headline',{ origin: 'bottom',
   distance: '40px',
   duration: 1200,
   // reset: true,
   interval: 200,
   scale: 0.9,
   viewFactor: 0.1, });
},[])


    return (
      <div className='container '>

<Helmet>

<title>My App | Home</title>
<meta name="title" content="Testing of my app" />
<meta name="description" content="This is just a React sample project that i was learning " />

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website" />
<meta property="og:url" content="https://metatags.io/" />
<meta property="og:title" content="Testing of my app" />
<meta property="og:description" content="This is just a React sample project that i was learning " />
<meta property="og:image" content={prephoto} />

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://metatags.io/" />
<meta property="twitter:title" content="Testing of my app" />
<meta property="twitter:description" content="This is just a React sample project that i was learning " />
<meta property="twitter:image" content={prephoto} />

{/* <!-- Meta Tags Generated with https://metatags.io --> */}
</Helmet>


         {/* Home  */}
               <div className="  ">
                  <section className="row">
                     <div className="col-lg-9 mt-4 mx-auto ">
                     <h3 className='fw-light headline'> Amazing Band for You </h3>
                     <h3 className='mb-4 headline'>Take You To A Whole New World , Follow Through</h3>
                     
                     <img src={spiderman} className='img-fluid headline rounded' />


                     </div>
                  </section>
               </div>


        {/* Work  */}
                     <div className="  ">
                           <section className="row">
                              <div className="col-lg-9 mt-4 mx-auto ">
                              <h3 className='text-center headline'> Work Spaces </h3>
                              <div className='row'>
                              {works.map((work, index)=>{
                                 return(
                                                         <div className='col-md-6 p-2' key={index}>
                                    <div className="card p-2 shadow " style={{height:300}} >
                                                   <img src={work.photo} className='img-fluid headline' />
                                    <div className="card-body">
                                       <h5 className="card-title headline">{work.title}</h5>
                                       <p className="card-text headline">{work.body}</p>
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
                  <span className='headline'>More <i className="bi bi-arrow-right-circle"></i></span>
               </div>
               <div className='row '>
                  <div className='col-md-6 headline'>
                     <h2>Our Services</h2>
                  </div>
                  <div className='col-md-6'>
                  <p className='w-75 headline'>some text for the neecesary thing to be carreid out her xt for the neecesary thing to be carreid out herxt for the neecesary thing to be carreid out here 
                  </p>
                  </div>
               </div>
               <div className='row mt-4'>

                  {Services.map((service, index)=>{
                     return(
                        <div key={index} className='col-md-3 col-6 g-3'>
                        <div className="card ">
                           <div className="card-body">
                              <img src={service.image} className='img-fluid headline' />
                              <p className="card-title text-center headline">{service.description}</p>
                           </div>
                        </div>
                     </div>
                     )
                  })}
                 
                 
                  
               </div>
               <div className='my-4 text-end '>
                  <span role='button'>
                  <a  className='text-decoration-none mx-2 headline  text-dark'>Explore More</a>
                  <i className="bi bi-arrow-right-square headline"></i>
                  </span>
                
               </div>
            </section>
         </div>

         {/* Story  */}
         <div className='mt-5'>
            <section className='col-lg-9 mt-4 mx-auto text-center'>
                    <h6 className='text-muted mb-4 headline'>Next</h6>
                    <div className='' style={{height:180}}>
                    <h2  className='  headline'>Our Story</h2>
                    <h1><a onClick={go} className="bi bi-arrow-right text-dark headline" role='button'></a></h1>
                    </div>
                    <hr/>
                  
            </section>
         </div>

         

      </div>
    )
  }
  
  export default Home;