import React from 'react'
import Header from '../commen/Header'
import Footer from '../commen/Footer'
import Hero from '../commen/Hero'

const ContactUs = () => {
  return (
    <>
    <Header/>
    <main>
         <Hero preHeading='Quality. Intergrity. Value'
                 heading='Contact Us'
                 text='We excel at transforming visitors into<br/> reality through outstanding craftsmanship and precise'/>
    </main>
    <section className='section-9 py-5'>
        <div className='container'>
             <div className='section-header text-center'>
                 <span></span>
                 <h2>Contact Us</h2>
                 <p>Our dedicate experts are here to help you with any of your questions, contact us by<br/> filling out the form below and we will be in touch shortly.
                 </p>
             </div>
             <div className='row'>
                  <div className='col-md-3'>
                      <div className='card shadow border-0'>
                          <div className='card-body'>
                              <h3>Call Us</h3>
                             <div> <a href="#">(96 22 55 063)</a></div>
                              <div><a href="">(96 531 888 2)</a></div>

                             <h3>You can  write us:</h3>
                              <a href="#">example@gmail.com</a>
                              <a href="">den@gmail.com</a>

                              <h3>Address</h3>
                               <div>songkat terktlar khan <br/>sensok phonpenh city</div>
                          </div>
                      </div>
                  </div>
                  <div className='col-md-9 '>
                     <div className='card shadow border-0 mt-3'>
                        
                        <div className='card-body p-5'>
                            <form action="">
                            <div className='row mt-5'>
                               <div className='col-md-6 mb-4'>
                                <label htmlFor="" className='form-label'>Name</label>
                                 <input type="text" className='form-control form-control-lg' placeholder='Enter Name'></input>
                               </div>
                               <div className='col-md-6 mb-4'>
                                <label htmlFor="" className='form-label'>Email</label>
                                <input type="text" className='form-control form-control-lg' placeholder='Enter Email'></input>
                               </div>
                            </div>
                             <div className='row'>
                               <div className='col-md-6 mb-4'>
                                <label htmlFor="" className='form-label'>Phone</label>
                                 <input type="text" className='form-control form-control-lg' placeholder='Phone No.'></input>
                               </div>
                               <div className='col-md-6 mb-4'>
                                <label htmlFor="" className='form-label'>Subject</label>
                                <input type="text" className='form-control form-control-lg' placeholder='Subject'></input>
                               </div>
                            </div>
                            <div>
                                <label htmlFor="" className='form-label'>Message</label>
                                <textarea name="" placeholder='Message' id="" rows={5} className='form-control form-control-lg'></textarea>
                            </div>
                            <button className='btn btn-primary large mt-3'>Submit</button>
                         </form>
                        </div>
                      </div>
                  </div>
             </div>
        </div>

             
    </section>
    <Footer/>
    </>
  )
}

export default ContactUs