import Loader from 'react-loaders'
import './index.scss'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(()=>{
        setTimeout(()=>{
          setLetterClass('text-animate-hover')
        }, 3000)
      })
     const sendEmail =(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_mrsyhoi', 'template_3zywtff', refForm.current, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
          alert('Message successfully sent!');
          window.location.reload(false)
      }, (err) => {
        console.log(err)
          alert('Somthing went wrong, please try again!');
      });
     }
  return (
    <>
    <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e',]} idx={15} />
              </h1>
            <p>
                I am intersted in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using bellow form either.
            </p>
            <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail} >
                    <ul>
                        <li className='half'>
                        <input type="text" name='name' placeholder='Name' required /></li>
                        <li className='half'>
                        <input type="email" name='email' placeholder='Email' required /></li>
                        <li>
                            <input placeholder='Subject' type='text' name='subject' required/>
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required/>
                        </li>
                        <li>
                            <input className ="flat-button" type='submit' value='SEND' />
                            <NavLink   to="/location" ><FontAwesomeIcon icon={faLocation} className='flat-button location' /> </NavLink>
                            
                        </li>
                        </ul>
                </form>
            </div>
        </div>
        <div className="info-map">

            Hamid Najari,
            <br />
            Morocco,
            <br />
            Agadir 80000
            <br />
            <span>hamidenajari9@gmil.com</span>
         </div>
        <div className="map-wrap">
            <MapContainer center={[30.378041, -9.479118]} zoom={13} >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[30.378041, -9.479118]}>
                    <Popup>Hamido lives here, come over for a cup of coffee :)</Popup>
                </Marker>
            </MapContainer>
        </div>
    </div>

    <Loader type='pacman'/>
    </>
    
  )
}

export default Contact