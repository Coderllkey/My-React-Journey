import { NavLink } from "react-router-dom";

const Footer = ()=>{
    return(<div>
<div>
            <section className='col-lg-9 mt-4 mx-auto text-center row'>
                 <div className='col-md-4 small headline'>
                     <NavLink to='/' className='mx-2 text-decoration-none text-dark' >Work </NavLink>
                     <NavLink to='/story' className='mx-2 text-decoration-none text-dark' role='button'>Story</NavLink>
                     <NavLink to='/service' className='mx-2 text-decoration-none text-dark' role='button'>Service</NavLink>
                     <NavLink to='/contact' className='d-md-none mx-2 text-decoration-none text-dark' role='button'>Carrers</NavLink>
                      <NavLink to='/contact' className='d-md-none mx-2 text-decoration-none text-dark' role='button'>Contact Us</NavLink>
                 </div>
                 <div className='col-md-4 '>
                     <h5 className='fw-bold headline' role='button' >Repo Hub</h5>
                 </div>
                 <div className='col-md-4 d-flex small headline'>
                      <NavLink to='/contact' className=' d-none d-md-block  mx-2 text-decoration-none text-dark' role='button'>Carrers</NavLink>
                      <NavLink to='/contact' className='d-none d-md-block  mx-2 text-decoration-none text-dark' role='button'>Contact Us</NavLink>

                 </div>
              </section>
         </div>
    </div>)
}

export default Footer;