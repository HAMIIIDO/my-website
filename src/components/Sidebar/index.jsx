import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoH from '../../assets/images/hn-1.png'
import LogoSubtitle from '../../assets/images/sub-logo-2.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faComment} from '@fortawesome/free-solid-svg-icons'
import MyLinks from '../MyLinks'
import { useState } from 'react'

const Sidebar = () => {


  return(
  <div className='nav-bar'
  >
    <Link className='logo' to='/'>
      <img src={LogoH} alt="logo" />
      <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active"  to="/" ><FontAwesomeIcon icon={faHome} color="#4d4d4e" /> </NavLink>
      <NavLink className="about-link" exact="true" activeclassname="active" to="/about" ><FontAwesomeIcon icon={faUser} color="#4d4d4e"  /> </NavLink>
      <NavLink exact="true" className="contact-link" activeclassname="active" to="/contact" ><FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> </NavLink>
      <NavLink  exact="true" className="social-link" activeclassname="active" to="/my_links"  > <FontAwesomeIcon icon={faComment} color="#4d4d4e" /></NavLink>
      
      
    </nav>
  
  </div>)
}



export default Sidebar