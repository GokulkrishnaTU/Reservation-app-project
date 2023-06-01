import React from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import Featured from '../../components/featured/featured'

import "./home.css"
import Propertylist from '../../components/propertylist/propertylist'
import Featuredproperty from '../../components/featuredproperty/featuredproperty'
import Maillist from '../../components/maillist/maillist'
import Footer from '../../components/footer/footer'
import { useLocation } from 'react-router-dom'

function home() {
  const location=useLocation()
  console.log("homeLocation",location);

  return (

    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by propety type</h1>
        <Propertylist/>
        <h1 className="homeTitle">Homes giests love</h1>
        <Featuredproperty/>
        <Maillist/>
        <Footer/>


      </div>

    </div>
  )
}

export default home
