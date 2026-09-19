import React, { useEffect } from 'react'
import Header from '../../commen/Header'
import Sidebar from '../../commen/Sidebar'
import { Link } from 'react-router-dom'
import Footer from '../../commen/Footer'
import { apiUrl, token } from '../../commen/http'
const Show = () => {
 
    const fetchArticles  = async () =>{
       
        const [articles, setArticles] = useState([]);

    try {
          const res = await fetch(apiUrl + 'articles', {
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
          
          setArticles(result.data);
  
      } catch (error) {
          console.error('Fetch error:', error);
      }
    }
    useEffect(() => {
    fetchArticles();
    })

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
                             <h4 className='h5'>Article</h4>
                             <Link to="/admin/articles/create" className='btn btn-primary'>Create</Link>
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
                                    articles && articles.map(articles =>{
                                       return (
                                            <tr key={`articles-${articles.id}`}>
                                            <td>{articles.id}</td>
                                            <td>{articles.title}</td>
                                            <td>{articles.slug}</td>
                                            <td>
                                                {
                                                (articles.status==1) ? 'Active' : 'Block'
                                                }
                                            </td>
                                            <td>
                                                  <Link to={`/admin/articles/edit/${articles.id}`} className='btn btn-primary btn-sm'>Edit</Link>   
                                                  <Link onClick={() => deleteAricles(articles.id)} to="#" className='btn btn-secondary btn-sm ms-2'>Delete</Link>   
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