import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";


import './index.css';
import App from './App.jsx';
import { ThinkingInReact } from './pages/ThinkingInReact.jsx';
import { AuthLayout } from './layouts/AuthLayout.jsx';
import { Register } from './pages/Register.jsx';
import Portal from './pages/Portal.jsx';
import { SignIn } from './pages/SignIn.jsx';
import { ForgotPassword } from './pages/ForgotPassword.jsx';
import PhotoBrowser from './pages/PhotoBrowser.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/thinking-in-react" element={<ThinkingInReact />} />

          <Route element={<AuthLayout />}>
            <Route path="/portal" element={<Portal />}></Route>
            <Route path="/register" element={<Register />}  />
            <Route path="/sign-in" element={<SignIn />}  />
            <Route path="/forgot-password" element={<ForgotPassword />}  />
          </Route>

          <Route path="/photo-browser" element={<PhotoBrowser />}  />

        </Routes>
      </BrowserRouter>
    
  </StrictMode>,
)
