import React, { useEffect, useState } from 'react'
import Header from '../commen/Header'
import Footer from '../commen/Footer'
import Hero from '../commen/Hero'
import ConstructionImg from '../../assets/images/contruction2.png';
import { apiUrl } from '../commen/http';

const Project = () => {
      const [projects, setProjects] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      
      // Helper function to get full image URL
       const getImageUrl = (imageName) => {
           if (!imageName) return ConstructionImg; // Changed from ProjectImg to ConstructionImg
           
           // Remove /api/ from apiUrl to get base URL
           const baseUrl = apiUrl.replace(/\/api\/$/, '/');
           return `${baseUrl}uploads/projects/small/${imageName}`;
       }
      
      const fetchProjects = async() => {
          try {
              setLoading(true);
              const res = await fetch(apiUrl + 'get-projects', {
                  method: 'GET'
              });
              
              if (!res.ok) {
                  throw new Error(`HTTP error! status: ${res.status}`);
              }
              
              const result = await res.json();
              console.log(result);
              
              if(result.status === true) {
                  setProjects(result.data);
              }
          } catch (err) {
              console.error('Error fetching projects:', err);
              setError(err.message);
          } finally {
              setLoading(false);
          }
      }
  
      useEffect(() => {
          fetchProjects();
      }, []);
      
      if (loading) return <div className="text-center py-5">Loading projects...</div>;
      if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;
      
  return (
    <>
    <Header/>
         <main>
               <Hero preHeading='Quality. Intergrity. Value'
                 heading='Our Projects'
                 text='We excel at transforming visitors into<br/> reality through outstanding craftsmanship and precise'/>
         </main>
           <section className='section-3 bg-light py-5'>
                     <div className='container py-5'>
                      <div className='section-header text-center'>
                          <span>our Projects</span>
                          <h2>Discover our diverse range of projects</h2>
                          <p>We offer a diverse array of construction services,
                             spanning residential, commercial, and industrial projects.
                          </p>
                      </div>
                      <div className='row pt-4'>
                        {
                              projects.map(project => (
                                  <div className='col-md-4 col-lg-4' key={project.id}>
                                      <div className='item'>
                                          <div className='service-image'>
                                              <img 
                                                  src={getImageUrl(project.image)} 
                                                  alt={project.title} 
                                                  className='w-100'
                                                  onError={(e) => {
                                                      e.target.src = ConstructionImg; // Fallback if image fails
                                                  }}
                                              />
                                          </div>
                                          <div className='service-body'>
                                              <div className='service-title'>
                                                  <h3>{project.title}</h3>
                                              </div>
                                              <div className='service-content'>
                                                  <p>{project.short_desc}</p>
                                              </div>
                                              <a href='#' className='btn btn-primary'>Read More</a>
                                          </div>
                                      </div>
                                  </div>
                              ))
                          }                      
                      </div>
                     </div>
                  </section>
    <Footer/>
    </>
  )
}

export default Project