import React from 'react';
import './AboutUs.css'; 
import '../Components/TestimonialCarousal';
import TestimonialCarousal from '../Components/TestimonialCarousal';


const AboutUs = () => {

  const teamMembers = [
    { id: 1, name: 'Sudip Roy', photoUrl: '/Sudip.jpeg' },
    { id: 2, name: 'Anjali Kashyap', photoUrl: '/jane_smith.jpg' },
    { id: 3, name: 'Tishta Banik', photoUrl: '/Tishta.jpg' },
    { id: 4, name: 'Srijan Banerjee', photoUrl: '/Srijan.jpeg' },
    
  ];

  return (
    <div>
      <div className="about-us">
        <div className="about-us-logo">
          <img src="/ResumeLogo.png" alt="Website Logo" />
        </div>
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>
            We at <span className="purple-text">ResumeSnap</span> are dedicated to helping you
            create professional, high-quality resumes that stand out in today's
            competitive job market. Our user-friendly platform is designed to make
            the resume-building process easy and efficient, whether you're a
            seasoned professional or just starting your career. <br/>By choosing us you're getting access to:-
          </p>
          <ul>
            <li>Our cutting-edge resume builder website.</li>
            <li>Specialized resume templates and examples crafted by certified resume writers.</li>
            <li>Advice from industry recruiters.</li>
          </ul>
        </div>
      </div>
      <div className="history">
        <div className="history-header">
          <svg id="wave" style={{ transform: 'rotate(180deg)', transition: '0.3s' }} viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(72.693, 9.893, 89.165, 1)" offset="0%"></stop>
                <stop stopColor="rgba(243.986, 71.157, 209.635, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path style={{ transform: 'translate(0, 0px)', opacity: 1 }} fill="url(#sw-gradient-0)" d="M0,196L240,204.2C480,212,960,229,1440,269.5C1920,310,2400,376,2880,334.8C3360,294,3840,147,4320,89.8C4800,33,5280,65,5760,130.7C6240,196,6720,294,7200,351.2C7680,408,8160,425,8640,424.7C9120,425,9600,408,10080,392C10560,376,11040,359,11520,334.8C12000,310,12480,278,12960,277.7C13440,278,13920,310,14400,343C14880,376,15360,408,15840,392C16320,376,16800,310,17280,245C17760,180,18240,114,18720,89.8C19200,65,19680,82,20160,81.7C20640,82,21120,65,21600,122.5C22080,180,22560,310,23040,334.8C23520,359,24000,278,24480,228.7C24960,180,25440,163,25920,179.7C26400,196,26880,245,27360,261.3C27840,278,28320,261,28800,277.7C29280,294,29760,343,30240,375.7C30720,408,31200,425,31680,383.8C32160,343,32640,245,33120,245C33600,245,34080,343,34320,392L34560,441L34560,490L34320,490C34080,490,33600,490,33120,490C32640,490,32160,490,31680,490C31200,490,30720,490,30240,490C29760,490,29280,490,28800,490C28320,490,27840,490,27360,490C26880,490,26400,490,25920,490C25440,490,24960,490,24480,490C24000,490,23520,490,23040,490C22560,490,22080,490,21600,490C21120,490,20640,490,20160,490C19680,490,19200,490,18720,490C18240,490,17760,490,17280,490C16800,490,16320,490,15840,490C15360,490,14880,490,14400,490C13920,490,13440,490,12960,490C12480,490,12000,490,11520,490C11040,490,10560,490,10080,490C9600,490,9120,490,8640,490C8160,490,7680,490,7200,490C6720,490,6240,490,5760,490C5280,490,4800,490,4320,490C3840,490,3360,490,2880,490C2400,490,1920,490,1440,490C960,490,480,490,240,490L0,490Z"></path>
            <text x="41.2%" y="8%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="30px" fontFamily="Poppins" transform="rotate(180, 720, 245)">The Team</text>
            <text x="55%" y="18%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="15px" textLength="37%" lengthAdjust="spacingAndGlyphs" fontFamily="Poppins" transform="rotate(180, 720, 245)">Our team formed with a mission to revolutionalize the way people </text>
            <text x="55%" y="22%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="15px" textLength="37%" lengthAdjust="spacingAndGlyphs" fontFamily="Poppins" transform="rotate(180, 720, 245)">create resumes. It is a group of four passionate individuals who </text>
            <text x="55%" y="26%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="15px" textLength="37%" lengthAdjust="spacingAndGlyphs" fontFamily="Poppins" transform="rotate(180, 720, 245)">are committed to provide the best resume building experience. We </text>
            <text x="55%" y="30%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="15px" textLength="37%" lengthAdjust="spacingAndGlyphs" fontFamily="Poppins" transform="rotate(180, 720, 245)">continuously update our platform based on user feedback and the latest </text>
            <text x="55%" y="34%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="15px" textLength="37%" lengthAdjust="spacingAndGlyphs" fontFamily="Poppins" transform="rotate(180, 720, 245)">trends to ensure that you have access to the most effective resources.</text>
            <line x1="47%" y1="40%" x2="53%" y2="40%" stroke="#FFD700" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <div className="team-member-photo" style={{ backgroundImage: `url(${member.photoUrl})` }}></div>
            <div className="team-member-name">{member.name}</div>
          </div>
        ))}
        
      </div>
      <TestimonialCarousal />
      
    </div>
  );
};

export default AboutUs;
