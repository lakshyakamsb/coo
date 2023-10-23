import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const Icon = () => {
    const phoneNumber = '9971048209'; // Replace this with your actual phone number
    const iconStyle = {
        position: 'fixed',
        bottom: '80px',
      };
      const iconStyle2 = {
        position: 'fixed',
        right: '20px',
        bottom: '80px',
      };
    return (
      <div>
        
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
          style={iconStyle}
        >
          <FontAwesomeIcon icon={faWhatsapp} size="4x" />
        </a>
        <a
          href={`tel:${phoneNumber}`}
          className="phone-link"
          style={iconStyle2}
        >
          <FontAwesomeIcon icon={faPhoneVolume} size="4x" />
        </a>
      </div>
    );
  };
  
  export default Icon;
  