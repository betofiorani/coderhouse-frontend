import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css'

const Footer = props => {
  return (
    <div className='footer'>
      <p>creado por <span>Beto Fiorani</span> como proyecto final en CoderHouse</p>
      <div className='footer-redes'>
        <a href="https://www.linkedin.com/in/beto-fiorani/" target={'_blank'} rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://www.linkedin.com/in/beto-fiorani/" target={'_blank'} rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=5493514029030&text=Hola%20Beto!&type=phone_number&app_absent=0" target={'_blank'} rel="noreferrer">
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  )
}

export default Footer