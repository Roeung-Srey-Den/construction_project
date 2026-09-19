import React, { useEffect, useState } from 'react'
import ConstructionImg from '../../assets/images/contruction2.png';
import { apiUrl } from './http';

export const LatesProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Helper function to get full image URL
    const getImageUrl = (imagePath) => {
        if (!imagePath) return ConstructionImg;
        // If the image path is already a full URL, return it
        if (imagePath.startsWith('http')) return imagePath;
        // Otherwise, construct the full URL from your API base
        return `${apiUrl.replace('/api/', '')}${imagePath}`;
    }
    
    const fetchLatesProjects = async() => {
        try {
            setLoading(true);
            const res = await fetch(apiUrl + 'get-latestproject?limit=4', {
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
        fetchLatesProjects();
    }, []);
    
    if (loading) return <div className="text-center py-5">Loading projects...</div>;
    if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;
    
    return (
        <>
            <section className='section-3 bg-light py-5'>
                <div className='container-fluid py-5'>
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
                                <div className='col-md-3 col-lg-3' key={project.id}>
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
        </>
    )
}