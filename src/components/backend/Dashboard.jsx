import React from 'react'
import Header from '../commen/Header'
import Footer from '../commen/Footer'
import Sidebar from '../commen/Sidebar'
const Dashboard = () => {
  return (
   <>
   <Header/>
    <main >
        <div className='container my-5'>
          <div className='row'>
            <div className='col-md-3'>
                 <Sidebar/>
                {/* sidebard */}

            </div>
            <div className='col-md-9 dashboard'>
                {/* Dashboard */}
                 <div className='card shadow border-0'>
                    <div className='card-body d-flex justify-content-center align-items-center'>
                          <h4>Welcome to the admin console</h4>
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

export default Dashboard