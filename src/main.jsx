import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import About from './pages/Home/About.jsx'
import Services from './pages/Home/Services.jsx'
import PricingPlan from './pages/Home/PricingPlan.jsx'
import Contact from './pages/Home/Contact.jsx'
import Mhome from './member/Mhome.jsx'
import Mabout from './member/Mabout.jsx'
import Mservices from './member/Mservices.jsx'
import MpricingPlan from './member/MpricingPlan.jsx'
import Mcontact from './member/Mcontact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/pricing-plan',
    element: <PricingPlan />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <Mhome/>,
  },
  {
    path: '/Mabout',
    element: <Mabout/>,
  },
  {
    path: '/Mservices',
    element: <Mservices/>,
  },
  {
    path: '/Mpricingplan',
    element: <MpricingPlan/>,
  },
  {
    path: '/Mcontact',
    element: <Mcontact/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>,
)
