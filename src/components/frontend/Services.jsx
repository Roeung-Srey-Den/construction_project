import React, { useEffect, useState } from 'react'
import Header from '../commen/Header'
import Footer from '../commen/Footer'
import Hero from '../commen/Hero'
import ServiceImg from '../../assets/images/construction1.png';
import { apiUrl } from '../commen/http';

const Services = () => {
  const[services,setServices]=useState([]);
  const fetchAllServices = async ()=>{
    const res = await fetch(apiUrl+'get-services',{
      'method' : 'GET',

    });
    const result = await res.json();
    setServices(result.data)
  }
  useEffect(()=>{
    fetchAllServices()
  },[]);
  const getImageUrl = (imageName) => {
          if (!imageName) return ServiceImg; // Fallback to default image
          
          // Remove /api/ from apiUrl to get base URL
          const baseUrl = apiUrl.replace(/\/api\/$/, '/');
          return `${baseUrl}uploads/services/small/${imageName}`;
      }
      
  return (
    <>
    <Header/>
    <Hero preHeading='Quality. Intergrity. Value'
                 heading='Services'
                 text='We excel at transforming visitors into<br/> reality through outstanding craftsmanship and precise'/>
     <section className='section-3 bg-light py-5'>
                 <div className='container py-5'>
                  <div className='section-header text-center'>
                      <span>our services</span>
                      <h2>Our construction services</h2>
                      <p>We offer a diverse array of construction services,
                         spanning residential, commercial, and industrial, and industrail projects.
                      </p>
                  </div>
                  <div className='row pt-4'>
                    {
                                                services && services.map(service => {
                                                    return (
                                                        <div className='col-md-4 col-lg-4' key={service.id}>
                                                            <div className='item'>
                                                                <div className='service-image'>
                                                                    <img 
                                                                        src={getImageUrl(service.image)} 
                                                                        alt={service.title} 
                                                                        className='w-100'
                                                                        onError={(e) => {
                                                                            e.target.src = ServiceImg; // Fallback if image fails
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className='service-body'>
                                                                    <div className='service-title'>
                                                                        <h3>{service.title}</h3>
                                                                    </div>
                                                                    <div className='service-content'>
                                                                        <p>{service.short_desc}</p>
                                                                    </div>
                                                                    <a href='#' className='btn btn-primary'>Read More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
     
                     
     
                   
       
                  </div>
                 </div>
              </section>
    <Footer/>
    </>
  )
}

export default Services