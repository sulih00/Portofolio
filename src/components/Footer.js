import React from 'react'
import './css/footer.css'
import { FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skill</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>      
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/somdottasarkar/"><FaLinkedin /></a>
        <a href="https://github.com/Somdotta07"><FaGithub /></a>
        <a href="https://twitter.com/somdotta_sarkar"><FaTwitter /></a>        
      </div>
      <div className="footer_copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer