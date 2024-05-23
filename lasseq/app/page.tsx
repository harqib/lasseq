import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-10">
      <div className="social-icons">
        <a href="https://www.linkedin.com/company/lasseq-tech/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/lasseq.tech/?next=%2F" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="lasseq.contact@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="top-text">
        <h1>خلّيك على القرص</h1>
      </div>

      <img
        src="lasseq_logo.gif" 
        alt="Lasseq Tech Logo"
        width={400} 
        height={300} 
        className="logo" 
      />

      <div className="bottom-text">
        <p>COMING SOON</p>
      </div>

      
    </main>
  );
}
