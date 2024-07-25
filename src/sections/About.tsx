import React from 'react'
import Image from "next/image";
function About() {
  return (
    <div className='about' id="about">
    <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! My name is Shivam, and I am passionate about creating
            web applications and learning new technologies. My interest in web development was
            sparked in 2019 when I built some projects and now i am learning about cloud technologies.
          </p>
          <p className="about-grid-info-text">
            I am looking for a good career in software industrywhere working on some projects i can learn and strengthen my profile.
            
          </p>

          <p className="about-grid-info-text">
            Additionally, I made some projects and did internship in the field of full stack web development.
            I did my bachelors in computer science and engineering and masters in information technology and systems.
          </p>
          
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Node.Js</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Cpp</li>
            <li className="about-grid-info-list-item">Mongo DB</li>
            <li className="about-grid-info-list-item">SQL</li>
            <li className="about-grid-info-list-item">Python Libraries(Numpy,Pandas)</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/shivam.png" alt="profile" fill />
          </div>
        </div>
      </div>
      </div>
  )
}

export default About