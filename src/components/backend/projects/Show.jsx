
import Header from '../../commen/Header'
import Sidebar from '../../commen/Sidebar'
import { Link } from 'react-router-dom'
import Footer from '../../commen/Footer'
import React, { useEffect, useState } from 'react'
import { apiUrl,token } from '../../commen/http'

const Show = () => {
    const [projects, setProjects] = useState([]);
    
    //http://localhost:8000/api/projects
      const fetchProjects = async () => {
        try {
            const res = await fetch(apiUrl + 'projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
    
            const result = await res.json();
            
            console.log('===== API RESPONSE =====');
            console.log('Full result:', result);
            console.log('Project array:', result.data);
            if (result.data && result.data.length > 0) {
                console.log('First Project:', result.data[0]);
                console.log('First project image:', result.data[0].image);
                console.log('First project image_id:', result.data[0].image_id);
            }
            console.log('========================');
            
            setProjects(result.data);
    
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
        const deleteProject = async (id) => {
        if (!window.confirm("Are you sure you want to delete?")) return;

        try {
            const res = await fetch(apiUrl + 'projects/' + id, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token()}`
            }
            });

            const result = await res.json();

            if (result.status) {
            setProjects(prev =>
                prev.filter(project => project.id !== id)
            );
            toast.success(result.message);
            } else {
            toast.error(result.message);
            }
        } catch (error) {
            toast.error('Delete failed');
        }
};

    useEffect(()=>{
        fetchProjects();
    },[])
  return (
    <>
    <Header/>
    <main >
        <div className='container my-5'>
          <div className='row'>
            <div className='col-md-3'>
                 <Sidebar/>
            </div>
            <div className='col-md-9 '>
                 <div className='card shadow border-0'>
                    <div className='card-body p-4'>
                          <div className='d-flex justify-content-between'>
                             <h4 className='h5'>Projects</h4>
                             <Link to="/admin/projects/create" className='btn btn-primary'>Create</Link>
                          </div>
                          <hr />
                          <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projects && projects.map(project =>{
                                       return (
                                            <tr key={`projects-${project.id}`}>
                                            <td>{project.id}</td>
                                            <td>{project.title}</td>
                                            <td>{project.slug}</td>
                                            <td>
                                                {
                                                (project.status==1) ? 'Active' : 'Block'
                                                }
                                            </td>
                                            <td>
                                                  <Link to={`/admin/projects/edit/${project.id}`} className='btn btn-primary btn-sm'>Edit</Link>   
                                                  <Link onClick={() => deleteProject(project.id)} to="#" className='btn btn-secondary btn-sm ms-2'>Delete</Link>   
                                            </td>                         
                                        </tr>
                                        )
                                    })
                                }
                               
                            </tbody>

                          </table>

                    </div>
                 </div>
            </div>

         </div>
        </div>
         
    </main>
    <Footer/>
    </>
  )
}

export default Show