import React, { useState, useRef, useMemo, useEffect } from 'react';
import Header from '../../commen/Header';
import Sidebar from '../../commen/Sidebar';
import Footer from '../../commen/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { apiUrl, token } from '../../commen/http';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const editor = useRef(null);

    const [content, setContent] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(true);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Content',
    }), []);

    // Fetch project data
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await fetch(apiUrl + `projects/${id}`, {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token()}`,
                    },
                });

                const result = await res.json();

                if (result?.data) {
                    const data = result.data;

                    setValue('title', data.title);
                    setValue('slug', data.slug);
                    setValue('short_desc', data.short_desc || '');
                    setValue('location', data.location || '');
                    setValue('sector', data.sector || '');
                    setValue('construction_type', data.construction_type || '');
                    setValue('status', data.status);
                    setContent(data.content || '');

                    if (data.image) {
                        const baseUrl = apiUrl.replace(/\/api\/$/, '/');
                        setImagePreview(`${baseUrl}uploads/projects/large/${data.image}`);
                    }
                }
            } catch (error) {
                toast.error('Failed to load project');
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id, setValue]);

    // Submit form
    const onSubmit = async (data) => {
        setIsDisable(true);

        try {
            const res = await fetch(apiUrl + `projects/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token()}`,
                },
                body: JSON.stringify({
                    ...data,
                    content,
                    imageId,
                }),
            });

            const result = await res.json();

            if (result.status) {
                toast.success(result.message);
                navigate('/admin/projects');
            } else {
                toast.error(result.message || 'Update failed');
            }
        } catch (error) {
            toast.error('Submit failed');
        } finally {
            setIsDisable(false);
        }
    };

    // Image upload
    const handleFile = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsDisable(true);
        setImagePreview(URL.createObjectURL(file));

        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await fetch(apiUrl + 'temp-images', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token()}`,
                },
                body: formData,
            });

            const result = await res.json();

            if (!result.status) {
                toast.error(result.errors?.image?.[0]);
            } else {
                setImageId(result.data.id);
                toast.success('Image uploaded');
            }
        } catch {
            toast.error('Image upload failed');
        } finally {
            setIsDisable(false);
        }
    };

    if (loading) {
        return (
            <>
                <Header />
                <div className="container my-5 text-center">
                    <div className="spinner-border" />
                    <p>Loading project...</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5>Project / Edit</h5>
                                    <Link to="/admin/projects" className="btn btn-primary">Back</Link>
                                </div>

                                <hr />

                                <form onSubmit={handleSubmit(onSubmit)}>
                                     <label htmlFor="" className='form-label'>Title</label>
                                    <input
                                        className={`form-control mb-3 ${errors.title && 'is-invalid'}`}
                                        placeholder="Title"
                                        {...register('title', { required: 'Title is required' })}
                                    />
                                    {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
                                     
                                    <label htmlFor="" className='form-label'>Slug</label>
                                    <input
                                        className="form-control mb-3"
                                        placeholder="Slug"
                                        {...register('slug')}
                                    />
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
                                        className="form-control mb-3"
                                        placeholder="Short Description"
                                        {...register('short_desc')}
                                    />
                                    </div>
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        onBlur={setContent}
                                    />
                                     <div>
                                    <input
                                        type="file"
                                        className="form-control my-3"
                                        accept="image/*"
                                        onChange={handleFile}
                                    />

                                    {imagePreview && (
                                        <img src={imagePreview} className="img-thumbnail mb-3" style={{ maxWidth: 300 }} />
                                    )}
                                   </div>
                                    <button className="btn btn-success" disabled={isDisable}>
                                        {isDisable ? 'Updating...' : 'Update'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Edit;
