import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homee from './components/frontend/Homee';
import About from './components/frontend/About';
import './assets/css/style.scss';
import Services from './components/frontend/Services';
import Project from './components/frontend/Project';
import Blogs from './components/frontend/Blogs';
import ContactUs from './components/frontend/ContactUs';
import Login from './components/backend/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/commen/RequireAuth';
import {default as ShowServices} from './components/backend/services/Show';
import {default as CreateService} from './components/backend/services/Create';
import {default as EditService} from './components/backend/services/Edit';

import {default as ShowProjects} from './components/backend/projects/Show';
import {default as CreateProjects} from './components/backend/projects/Create';
import {default as EditProjects} from './components/backend/projects/Edit';

import {default as ShowArticles} from './components/backend/articles/Show';
function App() {
  return (
      <>
    <BrowserRoute basename="/construction_project">
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin/login" element={<Login/>} />


        <Route path="/admin/dashboard" element={
          <RequireAuth>
           <Dashboard/>
          </RequireAuth>
          } />

        <Route path="/admin/services" element={
          <RequireAuth>
           <ShowServices/>
          </RequireAuth>
          } />

          <Route path="/admin/services/create" element={
          <RequireAuth>
           <CreateService/>
          </RequireAuth>
          } />
          

           <Route path="/admin/services/edit/:id" element={
          <RequireAuth>
           <EditService/>
          </RequireAuth>
          } />
          

          <Route path="/admin/projects" element={
          <RequireAuth>
          <ShowProjects/>
          </RequireAuth>
          } />

          <Route path="/admin/projects/create" element={
          <RequireAuth>
          <CreateProjects/>
          </RequireAuth>
          } />
        
           <Route path="/admin/projects/edit/:id" element={
          <RequireAuth>
           <EditProjects/>
          </RequireAuth>
          } />

            <Route path="/admin/articles" element={
          <RequireAuth>
           <EditProjects/>
          </RequireAuth>
          } />
      </Routes>
    </BrowserRouter>
    <ToastContainer
    position="top-center"
    />
  </>
  );
}

export default App;
