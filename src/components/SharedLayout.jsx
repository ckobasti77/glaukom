import React from 'react';
import { Outlet } from "react-router-dom";
import { Sidebar, Footer } from './components'

const SharedLayout = ({ scrollToTop }) => {
  return (
    <>
      <Sidebar scrollToTop={scrollToTop} />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout