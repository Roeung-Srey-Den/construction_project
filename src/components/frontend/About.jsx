import React from 'react'
import Header from '../commen/Header'
import Footer from '../commen/Footer'
import {default as AboutNew} from '../commen/About'
import MemberImg1 from '../../assets/images/member4.jpg'
import MemberImg2 from '../../assets/images/member4.jpg'
import MemberImg3 from '../../assets/images/member4.jpg'
import Hero from '../commen/Hero'

const About = () => {
  return (
    <>
    <Header/>
    <main>
          <Hero preHeading='Quality. Intergrity. Value'
                 heading='About Us'
                 text='We excel at transforming visitors into<br/> reality through outstanding craftsmanship and precise'/>
          <AboutNew/>
          {/* Our Team */}
          <section className='section-8 bg-light py-5'>
            <div className='container'>
              <div className='section-header text-center'>
                 <span>Team</span>
                 <h2>Our Team</h2>
                 <p>We specialize in a wide range of construction services. including residential and industrail projects.
                 </p>
             </div>
              <div className='row pt-3'>
                           <div className='col-md-6 col-lg-3 mb-3'>
                               <div className='card shadow border-0'>
                               <div className='card-img-top'>
                                    <img src={MemberImg1} alt="" className='w-100' />
                               </div>
                               <div className='card-body p-4'>
                                   <div className='card-title pb-0 mb-0'>
                                       Roeung Srey Den
                                   </div>
                                   <div className='card-sub-title mb-2'>
                                       Web developer
                                   </div>
                                   <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg></a>
                               </div>
                               </div>
                           </div>
                           <div className='col-md-6 col-lg-3 mb-3'>
                               <div className='card shadow border-0'>
                               <div className='card-img-top'>
                                    <img src={MemberImg2} alt="" className='w-100' />
                               </div>
                               <div className='card-body p-4'>
                                   <div className='card-title pb-0 mb-0'>
                                       Roeung Srey Den
                                   </div>
                                   <div className='card-sub-title mb-2'>
                                       Web developer
                                   </div>
                                   <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg></a>
                               </div>
                               </div>
                           </div>
                           <div className='col-md-6 col-lg-3 mb-3'>
                               <div className='card shadow border-0'>
                               <div className='card-img-top'>
                                    <img src={MemberImg3} alt="" className='w-100' />
                               </div>
                               <div className='card-body p-4'>
                                   <div className='card-title pb-0 mb-0'>
                                       Roeung Srey Den
                                   </div>
                                   <div className='card-sub-title mb-2'>
                                       Web developer
                                   </div>
                                   <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg></a>
                               </div>
                               </div>
                           </div>
                           <div className='col-md-6 col-lg-3 mb-3'>
                               <div className='card shadow border-0'>
                               <div className='card-img-top'>
                                    <img src={MemberImg3} alt="" className='w-100' />
                               </div>
                              <div className='card-body p-4'>
                                   <div className='card-title pb-0 mb-0'>
                                       Roeung Srey Den
                                   </div>
                                   <div className='card-sub-title mb-2'>
                                       Web developer
                                   </div>
                                   <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg></a>
                               </div>
                               </div>
                           </div>
                          </div>
            </div>

          </section>
    </main>
    <Footer/>
    </>
  )
}

export default About