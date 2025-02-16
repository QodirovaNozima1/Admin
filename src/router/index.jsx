import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseContainer } from '../utils'
const Cards = lazy(()=> import("../pages/admin/Cards"))
const Create = lazy(()=> import("../pages/admin/Create"))
const Menu = lazy(()=> import("../pages/admin/Menu"))
const AboutUs = lazy(()=> import("../pages/admin/Aboutus"))
const Homework = lazy(()=> import("../pages/admin/Homework"))
const Recycle = lazy(()=> import("../pages/admin/Recycle"))
const Pick = lazy(()=> import("../pages/admin/Pick"))
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
          <Route path='cards' element={<SuspenseContainer><Cards/></SuspenseContainer>}/>
          <Route path='create' element={<SuspenseContainer><Create/></SuspenseContainer>}/>
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