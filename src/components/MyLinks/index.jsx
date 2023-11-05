import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faCss3, faGitAlt, faGithub, faHtml5, faInstagram, faJsSquare, faLinkedin, faNode, faReact, faSkype } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const MyLinks = () => {
  return (
    <>
<div className='container about-page' >
  <div className=' link-list'> 
    <ul>
     <li>
      <a target="_blank" rel='noreferrer' href="www.linkedin.com/in/hamid-najari-313221226"><FontAwesomeIcon icon={faLinkedin}color="#4d4d4e" /> </a>
     </li>
     <li>
      <a target="_blank" rel='noreferrer' href="https://github.com/HAMIIIDO"><FontAwesomeIcon icon={faGithub}color="#4d4d4e" /> </a>
     </li>
     <li>
      <a target="_blank" rel='noreferrer' href="https://join.skype.com/invite/Bwgs7gddAAfq"><FontAwesomeIcon icon={faSkype}color="#4d4d4e" /> </a>
     </li>
     <li>
      <a target="_blank" rel='noreferrer' href="https://www.instagram.com/najari.hamido/"><FontAwesomeIcon icon={faInstagram}color="#4d4d4e" /> </a>
     </li>
   </ul>
  </div>
  <div className="stage-cube">
    <div className="cubeSpinner">
      <div className="face_1">
      <FontAwesomeIcon icon={faNode} color="#DD0031" />
      </div>
      <div className="face_2">
      <FontAwesomeIcon icon={faHtml5} color="#F06529" />
      </div>
      <div className="face_3">
      <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
      </div>
      <div className="face_4">
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
      </div>
      <div className="face_5">
        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
      </div>
      <div className="face_6">
        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
      </div>
  </div>
</div>

</div>
<Loader type="pacman"/>
</>
  )
}

export default MyLinks