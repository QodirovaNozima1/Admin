import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseContainer } from '../utils'
import Contacts from '../pages/admin/Contacts'
import Blogs from '../pages/admin/Blogs'
import Menu from '../pages/admin/Menu'
import AboutUs from '../pages/admin/Aboutus'
import Homework from '../pages/admin/Homework'
import Recycle from '../pages/admin/Recycle'
import Pick from '../pages/admin/Pick'
// import Home from '../pages/Home'
// import Contact from '../pages/Contact'
// import About from '../pages/About'
// import Layout from '../pages/Layout'
const Home = lazy(()=> import("../pages/Home"))
const About = lazy(()=> import("../pages/About"))
const Contact = lazy(()=> import("../pages/Contact"))
const Layout = lazy(()=> import("../pages/Layout"))
const Admin = lazy(()=> import("../pages/admin/Admin"))
const Groups = lazy(()=> import("../pages/admin/Groups"))
const Users = lazy(()=> import("../pages/admin/Users"))
const Shop = lazy(()=> import("../pages/admin/Shop"))
const Videolar = lazy(()=> import("../pages/admin/groups/Videolar"))
const Text = lazy(()=> import("../pages/admin/groups/Text"))
const Table = lazy(()=> import("../pages/admin/groups/Table"))



const RouterMain = () => {
  return (
    <Routes>
        <Route path='/' element={<SuspenseContainer><Layout/></SuspenseContainer>}>
            <Route path='/' element={<SuspenseContainer><Home/></SuspenseContainer>}/>
            <Route path='about' element={<SuspenseContainer><About/></SuspenseContainer>}/>
            <Route path='contact' element={<SuspenseContainer><Contact/></SuspenseContainer>}/>
        </Route>
        <Route path='admin' element={<SuspenseContainer><Admin/></SuspenseContainer>}>
          <Route path='groups' element={<SuspenseContainer><Groups/></SuspenseContainer>}>
            <Route index element={<SuspenseContainer><Videolar/></SuspenseContainer>}/>
            <Route path='table' element={<SuspenseContainer><Table/></SuspenseContainer>}/>
            <Route path='text' element={<SuspenseContainer><Text/></SuspenseContainer>}/>
          </Route>
          <Route path='users' element={<SuspenseContainer><Users/></SuspenseContainer>}/>
          <Route path='shop' element={<SuspenseContainer><Shop/></SuspenseContainer>}/>
          <Route path='contacts' element={<SuspenseContainer><Contacts/></SuspenseContainer>}/>
          <Route path='blogs' element={<SuspenseContainer><Blogs/></SuspenseContainer>}/>
          <Route path='menu' element={<SuspenseContainer><Menu/></SuspenseContainer>}/>
          <Route path='aboutus' element={<SuspenseContainer><AboutUs/></SuspenseContainer>}/>
          <Route path='homework' element={<SuspenseContainer><Homework/></SuspenseContainer>}/>
          <Route path='recycle' element={<SuspenseContainer><Recycle/></SuspenseContainer>}/>
          <Route path='pick' element={<SuspenseContainer><Pick/></SuspenseContainer>}/>
          {/* <Route path='product/:id' element={<SuspenseContainer><Detail/></SuspenseContainer>}/> */}
        </Route>
    </Routes>
  )
}

export default RouterMain