import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-10">
      <div className="social-icons">
        <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={process.env.NEXT_PUBLIC_EMAIL}>
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
