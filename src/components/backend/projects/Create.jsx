import React, { useMemo, useRef, useState } from 'react'
import Header from '../../commen/Header'
import Sidebar from '../../commen/Sidebar'
import Footer from '../../commen/Footer'
import {Link, useNavigate} from 'react-router-dom'
import { apiUrl, token } from '../../commen/http'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react';
const Create = ({placeholder}) => {
 const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const config = useMemo(()=>({
        readonly:false,
        placeholder: placeholder|| 'Content'
    }),
    [placeholder]
);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm()
    
    const onSubmit = async (data) => {
        const newData = {...data,"content":content,"imageId":imageId}
        
        try {
            setLoading(true);
            const res = await fetch(apiUrl + 'projects', {
                method: 'POST', // Changed to POST
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                },
                body: JSON.stringify( newData) // Send the form data
            });
    
            const result = await res.json();
            
            if (!res.ok) {
                throw new Error(result.message || 'Failed to create service');
            }
            
            // Success - redirect to services list
            toast.success(result.message);
            navigate('/admin/projects');
    
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    }
    const handleFile = async (e) =>{
        const formData= new FormData();
        const file = e.target.files[0];
        formData.append("image",file);
        setIsDisable(true);
        const res = await fetch(apiUrl + 'temp-images', {
                method: 'POST', // Changed to POST
                headers: {

                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                },
                body: formData // Send the form data
            }).then(response => response.json())
              .then(result => {
                    setIsDisable(false);
                  if(result.status == false){
                      toast.error(result.errors.image[0])
                  }else{
                      setImageId(result.data.id)
                  }
              });
    }
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
                             <h4 className='h5'>Project /  Create</h4>
                             <Link to="/admin/projects" className='btn btn-primary'>Back</Link>
                          </div>
                          <hr />
                       <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label'>Title</label>
                            <input
                            {...register('title',{
                                required : "The title field is required"
                            })}
                            type="text" 
                            placeholder='Title'
                            className={`form-control ${errors.title && 'is-invalid'}`}
                            />
                            {errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>}
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="" className='form-label'>Slug</label>
                            <input type="text"
                            placeholder='Slug'
                            {...register('slug',{
                                required : "The slug field is required"
                            })}
                            className={`form-control ${errors.slug && 'is-invalid'}`}
                             />
                            {errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>}
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label htmlFor="" className='form-label'>Location</label>
                                <input type="text"
                                placeholder='Location'
                                {...register('location')}
                                className={`form-control`}
                                />
  
                            </div>
                             <div className='col-md-6'>
                             <div className='md-3'>
                                <label className='form-label'>Construction</label>
                                <select className='form-control' id=""
                                 {
                                    ...register('sector')
                                }
                                >
                                    <option value="">Construction Type</option>
                                    <option value="Residentail construction">Residential construction</option>
                                    <option value="Commercial contruction">Commercial construction</option>
                                    <option value="Industrail contruction">Industrial construction</option>
                                    <option value="Infrastructure contruction">Infrastructure construction</option>
                                </select>
                              
  
                            </div>
                        </div>
                             
                        </div>
                        <div className='row'>
                       
                        <div className='col-md-6'>
                                <label className='form-label'>Sector</label>
                                <select className='form-control' id=""
                                 {
                                    ...register('construction_type')
                                }
                                >
                                    <option value="">Sector</option>
                                    <option value="Health">Health</option>
                                    <option value="Education">Education</option>
                                    <option value="Corporate">Corporate</option>
                                </select>
                              
  
                            </div>
                        <div className='col-md-6'>
                            <div className='mb-3'>
                            <label htmlFor="" className='form-label'>Status</label>
                            <select className='form-control'
                            {...register('status')}
                            >
                                <option value="1">Active</option>
                                <option value="0">Block</option>
                            </select>
                        </div>
                        </div>
                        </div> 
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label'>Short Description</label>
                            <textarea 
                            placeholder='Short Description'
                            {...register('short_desc')}
                            className='form-control' rows={4}></textarea>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="" className='form-label'>Content</label>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => {}}
                        />
                        </div>

                         <div className='mb-3'>
                            <label htmlFor="" className='form-label'>Image</label>
                            <br/>
                            <input onChange={handleFile} type="file" />
                        </div>
    
                        <button className='btn btn-primary' disabled={isDisable}>
                            {isDisable ? 'Submitting...' : 'Submit'}
                        </button>
                        </form> 
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

export default Create