import React from 'react';
import { Outlet } from "react-router-dom";
import { Sidebar } from './components'

const SharedLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default SharedLayout