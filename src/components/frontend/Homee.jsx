import React, { useEffect, useState } from 'react';

import Header from '../commen/Header';
import Footer from '../commen/Footer';


import Icon1 from '../../assets/images/icon1.png';
import Icon2 from '../../assets/images/icon2.jpg';
import Icon3  from '../../assets/images/icon3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AvatarImg from '../../assets/images/avatar1.png';
import {  Pagination} from 'swiper/modules';
import Blog1 from '../../assets/images/blog1.jpg';
import Blog2 from '../../assets/images/blog2.jpg';
import Blog3 from '../../assets/images/blog3.png';
import About from '../commen/About';
import { apiUrl } from '../commen/http';
import LatestServices from '../commen/LatestServices';
import { LatesProjects } from '../commen/LatesProjects';
const Homee = () => {
  
  return (
    <>
    <Header/>
    <main>
         {/* Hero Us Section*/}
          <section className='section-1'>
             <div className='hero d-flex align-items-center'>
                <div className='container-fluid'>
                   <div className='text-center'>
                       <span>Welcome Amazing Constructions</span>
                       <h1>Crafting dreams with <br/>percistion and excellence.</h1>
                       <p>We excel at transforming visitors into reality through outstanding craftsmanship and precise<br/> attention to detail.with years of experience and a dedication to quality.</p>             
                       <div className='mt-4'>
                           <a className='btn btn-primary large'>Contact Now</a>
                           <a className='btn btn-secondary ms-2 large'>View Projects</a>
                       </div>
                   </div>
                </div>
             </div>
          </section>
          {/* About Us Section*/}
         <About/>
         {/* Our Services */}

        <LatestServices/>

          
          {/* why Choose Us */}
          <section section-4 py-5>
            <div className='container py-5'>
               <div className='section-header text-center'>
                 <span>Why Choose Us</span>
                 <h2>Discover our wide variety of projects</h2>
                 <p>
                    Create in close partnership with our clients and collaborators, this approach merges industry expertise,<br/>
                    decades of experience, innovation, and flexibilty to consitently deliver excellence.
                 </p>
             </div>
             <div className='row pt-4'>
                 <div className='col-md-4'>
                     <div className='card shadow border-0 p-4'>
                      <div className='card-icon'>
                          <img src={Icon1} alt="" />
                      </div>
                      <div className='card-title mt-3'>
                          <h3>Cutting-Edge Solutions</h3>
                      </div>
                      <div>
                        <p>Small actions create big impacts.It all begins and ends with each employee committing to safer work practices daily, ensuring they return homw safely.</p>
                      </div>
                     </div>
                 </div>

                 <div className='col-md-4'>
                     <div className='card shadow border-0 p-4'>
                      <div className='card-icon'>
                          <img src={Icon1} alt="" />
                      </div>
                      <div className='card-title mt-3'>
                          <h3>Cutting-Edge Solutions</h3>
                      </div>
                      <div>
                        <p>Small actions create big impacts.It all begins and ends with each employee committing to safer work practices daily, ensuring they return homw safely.</p>
                      </div>
                     </div>
                 </div>

                 <div className='col-md-4'>
                     <div className='card shadow border-0 p-4'>
                      <div className='card-icon'>
                          <img src={Icon1} alt="" />
                      </div>
                      <div className='card-title mt-3'>
                          <h3>Cutting-Edge Solutions</h3>
                      </div>
                      <div>
                        <p>Small actions create big impacts.It all begins and ends with each employee committing to safer work practices daily, ensuring they return homw safely.</p>
                      </div>
                     </div>
                 </div>
             </div>
            </div>
          </section>
          {/* Our Project */}
         <LatesProjects/>

         <section className='section-5 py-5'>
          <div className='container'>
            <div  className='section-header text-center'>
                 <span>Testimonials</span>
                 <h2>Discover our diverse range of projects</h2>
                 <p>We offer a diverse array of construction services,
                    spanning residential, commercial, and industrial, and industrail projects.
                 </p>
                 </div>
                 <Swiper
                 modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className='card shadow border-0'>
                        <div className='card-body p-4'>
                             <div className='rating'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                             </div>
                        </div>
                         <div  className='content pt-2 pb-1 ps-2'>
                         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid molestiae ipsa nostrum reiciendis soluta, reprehenderit similique exercitationem minima iure ea vero tenetur recusandae accusantium totam ad distinctio nihil libero?</p>
                         </div>
                         <hr/>
                         <div className='d-flex meta pb-2'>
                          <div>
                            <img src={AvatarImg} alt=""  width={50}/>
                          </div>
                          <div className='ps-2'>
                            <div className='name'>Dara</div>
                            <div>CEO</div>
                          </div>
                         </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='card shadow border-0'>
                        <div className='card-body p-4'>
                             <div className='rating'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                             </div>
                        </div>
                         <div  className='content pt-2 pb-1 ps-2'>
                         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid molestiae ipsa nostrum reiciendis soluta, reprehenderit similique exercitationem minima iure ea vero tenetur recusandae accusantium totam ad distinctio nihil libero?</p>
                         </div>
                         <hr/>
                         <div className='d-flex meta pb-2'>
                          <div>
                            <img src={AvatarImg} alt=""  width={50}/>
                          </div>
                          <div className='ps-2'>
                            <div className='name'>Dara</div>
                            <div>CEO</div>
                          </div>
                         </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='card shadow border-0'>
                        <div className='card-body p-4'>
                             <div className='rating'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                             </div>
                        </div>
                         <div  className='content pt-2 pb-1 ps-2'>
                         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid molestiae ipsa nostrum reiciendis soluta, reprehenderit similique exercitationem minima iure ea vero tenetur recusandae accusantium totam ad distinctio nihil libero?</p>
                         </div>
                         <hr/>
                         <div className='d-flex meta pb-2'>
                          <div>
                            <img src={AvatarImg} alt=""  width={50}/>
                          </div>
                          <div className='ps-2'>
                            <div className='name'>Dara</div>
                            <div>CEO</div>
                          </div>
                         </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='card shadow border-0'>
                        <div className='card-body p-4'>
                             <div className='rating'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                             </div>
                        </div>
                         <div  className='content pt-2 pb-1 ps-2'>
                         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid molestiae ipsa nostrum reiciendis soluta, reprehenderit similique exercitationem minima iure ea vero tenetur recusandae accusantium totam ad distinctio nihil libero?</p>
                         </div>
                         <hr/>
                         <div className='d-flex meta pb-2'>
                          <div>
                            <img src={AvatarImg} alt=""  width={50}/>
                          </div>
                          <div className='ps-2'>
                            <div className='name'>Dara</div>
                            <div>CEO</div>
                          </div>
                         </div>
                      </div>
                    </SwiperSlide>
                     <SwiperSlide>
                      <div className='card shadow border-0'>
                        <div className='card-body p-4'>
                             <div className='rating'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                             </div>
                        </div>
                         <div  className='content pt-2 pb-1 ps-2'>
                         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid molestiae ipsa nostrum reiciendis soluta, reprehenderit similique exercitationem minima iure ea vero tenetur recusandae accusantium totam ad distinctio nihil libero?</p>
                         </div>
                         <hr/>
                         <div className='d-flex meta pb-2'>
                          <div>
                            <img src={AvatarImg} alt=""  width={50}/>
                          </div>
                          <div className='ps-2'>
                            <div className='name'>Dara</div>
                            <div>CEO</div>
                          </div>
                         </div>
                      </div>
                    </SwiperSlide>
                     <SwiperSlide>
                      <div className='card shadow border-0'>
                        <div className='card-body p-4'>
                             <div className='rating'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                             </div>
                        </div>
                         <div  className='content pt-2 pb-1 ps-2'>
                         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid molestiae ipsa nostrum reiciendis soluta, reprehenderit similique exercitationem minima iure ea vero tenetur recusandae accusantium totam ad distinctio nihil libero?</p>
                         </div>
                         <hr/>
                         <div className='d-flex meta pb-2'>
                          <div>
                            <img src={AvatarImg} alt=""  width={50}/>
                          </div>
                          <div className='ps-2'>
                            <div className='name'>Dara</div>
                            <div>CEO</div>
                          </div>
                         </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
             </div>
         </section>
         {/* Blog */}
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
  );
};

export default Homee;
