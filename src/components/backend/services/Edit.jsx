import React, { useRef, useState, useMemo, useEffect } from 'react'
import Header from '../../commen/Header'
import Sidebar from '../../commen/Sidebar'
import Footer from '../../commen/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react';
import { apiUrl, token } from '../../commen/http'
import { useForm } from "react-hook-form"

const Edit = ({ placeholder }) => {
    const { id } = useParams();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || 'Content'
    }), [placeholder]);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm()

    // Fetch existing service data
    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await fetch(apiUrl + `services/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token()}`
                    }
                });

                const result = await res.json();
                
                console.log('Full API Response:', result);
                console.log('Service Data:', result.data);
                
                if (result.data) {
                    // Pre-fill form with existing data
                    setValue('title', result.data.title);
                    setValue('slug', result.data.slug);
                    setValue('short_desc', result.data.short_desc || '');
                    setValue('status', result.data.status);
                    setContent(result.data.content || '');
                    
                    // Handle image - it's stored as just the filename
                    if (result.data.image) {
                        console.log('Image filename:', result.data.image);
                        
                        const imageFilename = result.data.image;
                        
                        // Build the full image URL
                        // Images are stored in public/uploads/services/large/ folder
                        const baseUrl = apiUrl.replace(/\/api\/$/, '/');
                        const imagePath = `${baseUrl}uploads/services/large/${imageFilename}`;
                        
                        console.log('Full image URL:', imagePath);
                        setImagePreview(imagePath);
                    }
                }
            } catch (error) {
                console.error('Fetch error:', error);
                toast.error('Failed to load service data');
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [id, setValue]);

    const onSubmit = async (data) => {
        const newData = { ...data, "content": content, "imageId": imageId }
        
        try {
            setIsDisable(true);
            const res = await fetch(apiUrl + `services/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                },
                body: JSON.stringify(newData)
            });

            const result = await res.json();
            
            if (result.status == true) {
                toast.success(result.message);
                navigate('/admin/services');
            } else {
                toast.error(result.message || 'Failed to update service');
            }
        } catch (error) {
            console.error('Submit error:', error);
            toast.error('Failed to submit form: ' + error.message);
        } finally {
            setIsDisable(false);
        }
    }

    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        setIsDisable(true);
        if (!file) return;
        
        // Create preview URL for the selected file
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);
        
        formData.append("image", file);

        try {
            const res = await fetch(apiUrl + 'temp-images', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                },
                body: formData
            });

            const result = await res.json();
            
            if (result.status == false) {
                setIsDisable(false);
                toast.error(result.errors.image[0])
                // Revert to original preview on error
                setImagePreview(null);
            } else {
                setImageId(result.data.id)
                toast.success('Image uploaded successfully');
            }
        } catch (error) {
            console.error('Image upload error:', error);
            toast.error('Failed to upload image');
            setImagePreview(null);
        }
    }

    if (loading) {
        return (
            <>
                <Header />
                <main>
                    <div className='container my-5'>
                        <div className='text-center'>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className='mt-2'>Loading service data...</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }
        
    return (
        <>
            <Header />
            <main>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Sidebar />
                        </div>
                        <div className='col-md-9'>
                            <div className='card shadow border-0'>
                                <div className='card-body p-4'>
                                    <div className='d-flex justify-content-between'>
                                        <h4 className='h5'>Services / Edit</h4>
                                        <Link to="/admin/services" className='btn btn-primary'>Back</Link>
                                    </div>
                                    <hr />
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-3'>
                                            <label htmlFor="" className='form-label'>Title</label>
                                            <input
                                                {...register('title', {
                                                    required: "The title field is required"
                                                })}
                                                type="text"
                                                placeholder='Title'
                                                className={`form-control ${errors.title && 'is-invalid'}`}
                                            />
                                            {errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>}
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="" className='form-label'>Slug</label>
                                            <input
                                                type="text"
                                                placeholder='Slug'
                                                {...register('slug', {
                                                    required: "The slug field is required"
                                                })}
                                                className={`form-control ${errors.slug && 'is-invalid'}`}
                                            />
                                            {errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>}
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="" className='form-label'>Short Description</label>
                                            <textarea
                                                placeholder='Short Description'
                                                {...register('short_desc')}
                                                className='form-control'
                                                rows={4}
                                            ></textarea>
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="" className='form-label'>Content</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                config={config}
                                                tabIndex={1}
                                                onBlur={newContent => setContent(newContent)}
                                                onChange={newContent => { }}
                                            />
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="" className='form-label'>Image</label>
                                            <br />
                                            <input 
                                                onChange={handleFile} 
                                                type="file" 
                                                accept="image/*" 
                                                className='form-control mb-3' 
                                            />
                                            
                                            {imagePreview && (
                                                <div className='mt-3'>
                                                    <p className='text-muted mb-2'>Current Image:</p>
                                                    <img 
                                                        src={imagePreview} 
                                                        alt="Preview" 
                                                        className='img-thumbnail'
                                                        style={{ maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
                                                        onError={(e) => {
                                                            console.error('Image failed to load:', imagePreview);
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="" className='form-label'>Status</label>
                                            <select
                                                className='form-control'
                                                {...register('status')}
                                            >
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>
                                        </div>

                                        <button className='btn btn-primary' disabled={isDisable}>
                                            {isDisable ? 'Updating...' : 'Update'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Edit