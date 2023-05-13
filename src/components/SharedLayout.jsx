import React from 'react';
import { Outlet } from "react-router-dom";
import { Sidebar, Footer } from './components'

const SharedLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout