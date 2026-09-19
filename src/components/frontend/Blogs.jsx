import React from 'react'
import Header from '../commen/Header'
import Footer from '../commen/Footer'
import Hero from '../commen/Hero'
import Blog1 from '../../assets/images/blog1.jpg'
import Blog2 from '../../assets/images/blog2.jpg'
import Blog3 from '../../assets/images/blog3.png'

const Blogs = () => {
  return (
    <>
    <Header/>
          <main>
            <Hero preHeading='Quality. Intergrity. Value'
                 heading='Blogs'
                 text='We excel at transforming visitors into<br/> reality through outstanding craftsmanship and precise'/>
          <section className='section-6 bg-light py-5'>
                          <div className='container'>
                           <div className='section-header text-center'>
                           <span>Blog & News</span>
                           <h2>Articles & blog posts</h2>
                           <p>We offer a diverse array of construction services,
                              spanning residential, commercial, and industrial, and industrail projects.
                           </p>
                       </div>
                       <div className='row pt-3'>
                        <div className='col-md-4'>
                            <div className='card shadow border-0'>
                            <div className='card-img-top'>
                                 <img src={Blog1} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                                <div className='mb-3'>
                                  <a href="#" className='title'>Den blog title</a>
                                </div>
                                <a href="#" className='btn btn-primary '>READ MORE</a>
                            </div>
                            </div>
                        </div>
                         <div className='col-md-4'>
                            <div className='card shadow border-0'>
                            <div className='card-img-top'>
                                 <img src={Blog1} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                                <div className='mb-3'>
                                  <a href="#" className='title'>Den blog title</a>
                                </div>
                                <a href="#" className='btn btn-primary '>READ MORE</a>
                            </div>
                            </div>
                        </div>
                         <div className='col-md-4'>
                            <div className='card shadow border-0'>
                            <div className='card-img-top'>
                                 <img src={Blog1} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                                <div className='mb-3'>
                                  <a href="#" className='title'>Den blog title</a>
                                </div>
                                <a href="#" className='btn btn-primary '>READ MORE</a>
                            </div>
                            </div>
                        </div> <div className='col-md-4'>
                            <div className='card shadow border-0'>
                            <div className='card-img-top'>
                                 <img src={Blog1} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                                <div className='mb-3'>
                                  <a href="#" className='title'>Den blog title</a>
                                </div>
                                <a href="#" className='btn btn-primary '>READ MORE</a>
                            </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow border-0'>
                            <div className='card-img-top'>
                                 <img src={Blog3} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                                <div className='mb-3'>
                                  <a href="#" className='title'>Den blog title<br/>The modern house</a>
                                </div>
                                <a href="#" className='btn btn-primary '>READ MORE</a>
                            </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow border-0'>
                            <div className='card-img-top'>
                                 <img src={Blog2} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                                <div className='mb-3'>
                                  <a href="#" className='title'>Den blog title</a>
                                </div>
                                <a href="#" className='btn btn-primary '>READ MORE</a>
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

export default Blogs