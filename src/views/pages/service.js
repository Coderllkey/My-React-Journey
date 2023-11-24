import { useNavigate } from 'react-router-dom';
import spiderman from '../../assets/img/green.png';
import simg1 from '../../assets/img/our_service_1.png';
import simg2 from '../../assets/img/our_service_2.png';
import simg3 from '../../assets/img/our_service_3.png';
import simg4 from '../../assets/img/our_service_4.png';
import { Helmet } from 'react-helmet';
const Service = _ =>{


  const navigate = useNavigate();
const go=()=>{
   console.log('go');
navigate('/contact')
}


  const Services = [
    {id:1,title:'Research and Analytic',list1:[ '- Analyze cliente business','- Branding Strategy','- Research opportunities'],list2:['- Create information architecture','- Study the target audience','- Production planning'], description:'We immerse ourselves in the analytics of your business, in order to study all the subtleties and determine target audience.', image:simg1},
    {id:2,title:'Product design',list1:['- Interface design','- Visual Identity','- Corporate & Promo landings'],list2:['- UI Kits & Libraries','- E-commerce','- Apps for iOS & Android'], description:'We know how to create complex and intuitive interface systems that are enjoyable to use.', image:simg2},
    {id:3,title:'Development & Integration',list1:['- Front-end Development','- Development Consulting','- CMS Development'],list2:['- API','- Highload-systems','- Animations'], description:'Our developer team easily subdue developments of any complexity. We dominate all the cycle of development.', image:simg3},
    {id:4,title:'Support',list1:['- Content Strategy & Research','- Branding Strategy','- Branding Strategy'],list2:['- Content Strategy','- Strategic Planning','- Production Planning'], description:'We provide technical assistance, that will help you to improve, keep the quality and speed of the launched project like website, app or full product.', image:simg4}
 ]


    return (
      <div>
        <Helmet>
        <title>My App | Service</title>

        </Helmet>
          <div className="  ">
                  <section className="row">
                     <div className="col-lg-9 mt-4 mx-auto ">
                     <h3 className='fw-light headline'> Services</h3>
                     <h3 className='mb-4 headline'>Our services extend to every aspect of the project development process</h3>
                     
                     <img src={spiderman} className='img-fluid headline rounded' />


                     </div>
                  </section>
               </div>

               {/* picture section  */}

              <section className='col-lg-9 mx-auto mt-4 '>
             {Services.map((service, index)=>{
              return(
                <div className='row  p-4'>
                <div className='col-md-8'>
                     <div>
                       <h1>{service.title}</h1>
                       <p>{service.description}</p>
                     </div>
                     <div>
                       <h3>What we do</h3>
                       <div className='row'>
                         <div className='col-6 '>
                         <ul style={{listStyleType:'none'}}>
                         {service.list1.map(i=>{
                            return(
                              <li>{i}</li>
                            )
                          })}
                        

                          </ul>
                          
                         </div>
                         <div className='col-6 '>
                          <ul style={{listStyleType:'none'}}>
                          {service.list2.map(i=>{
                            return(
                              <li>{i}</li>
                            )
                          })}
                        

                          </ul>
                         </div>
                       </div>

                     </div>
                </div>
                <div className='col-md-4 '>
                <div className="card ">
                    <div className="card-body">
                       <img src={service.image} className='img-fluid headline' />
                    </div>
                 </div>
                </div>
             </div>
              )
             })}
                    

              </section>

               {/* picture section  */}

               {/* section  */}
               <div className='mt-5'>
            <section className='col-lg-9 mt-4 mx-auto text-center'>
                    <h6 className='text-muted mb-4 headline'>Next</h6>
                    <div className='' style={{height:180}}>
                    <h2 className='  headline'>Contact Us</h2>
                    <h1><a onClick={go}  className="bi bi-arrow-right text-dark headline" role='button'></a></h1>
                    </div>
                    <hr/>
                  
            </section>
         </div>
         {/* section  */}

      </div>
    )
  }
  
  export default Service;