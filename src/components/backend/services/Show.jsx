import React, { useEffect, useState } from 'react'
import Header from '../../commen/Header'
import Footer from '../../commen/Footer'
import Sidebar from '../../commen/Sidebar'
import { apiUrl, token } from '../../commen/http'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

const Show = () => {
 const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
        const res = await fetch(apiUrl + 'services', {
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
        console.log('Services array:', result.data);
        if (result.data && result.data.length > 0) {
            console.log('First service:', result.data[0]);
            console.log('First service image:', result.data[0].image);
            console.log('First service image_id:', result.data[0].image_id);
        }
        console.log('========================');
        
        setServices(result.data);

    } catch (error) {
        console.error('Fetch error:', error);
    }
};
const deleteService = async(id) =>{
    if(confirm("Are you sure want to delete? ")){
      const res = await fetch(apiUrl+'services/'+id,{
        'method':'DELETE',
        'headers':{
            'Content-type' : 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${token()}`
        }
    });
      const result = await res.json();
      if (result.status == true ){
        const newServices = services.filter(service => service.id != id)
        setServices(newServices);
        toast.success(result.message)
      }else{
        toast.error(result.message)
      }
      
    }
    

}

useEffect(() => {
    fetchServices();
}, []);


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
                             <h4 className='h5'>Services</h4>
                             <Link to="/admin/services/create" className='btn btn-primary'>Create</Link>
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
                                    services && services.map(service =>{
                                       return (
                                            <tr key={`service-${service.id}`}>
                                            <td>{service.id}</td>
                                            <td>{service.title}</td>
                                            <td>{service.slug}</td>
                                            <td>
                                                {
                                                (service.status==1) ? 'Active' : 'Block'
                                                }
                                            </td>
                                            <td>
                                                  <Link to={`/admin/services/edit/${service.id}`} className='btn btn-primary btn-sm'>Edit</Link>   
                                                  <Link onClick={() => deleteService(service.id)} to="#" className='btn btn-secondary btn-sm ms-2'>Delete</Link>   
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