import spiderman from '../../assets/img/spiderman.png';

const Home = _ =>{
    return (
      <div>
         <div className="container ">
            <section className="row">
               <div className="col-lg-9 mt-4 mx-auto ">
                <h3 className='fw-light'> Amazing Band for You </h3>
                <h3 className='mb-4'>Take You To A Whole New World , Follow Through</h3>
                
                <img src={spiderman} className='img-fluid' />


               </div>
            </section>
         </div>
      </div>
    )
  }
  
  export default Home;