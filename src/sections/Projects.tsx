
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Attendance management system",
      projectDescription:
        "This is a web application that was made for storing all attendance,events and other contributions for the organisation.",
      projectTech: [
        "React JS",
        "Node Js",
        "Mongo DB",
        "CSS"
      ],
      
    },
    {
      image: "/project2.png",
      projectName: "Celebrity Classifier",
      projectDescription:
        "This was made using python and it's libraries. It was used to tell similarity score of different persons whose face resembles with the uploaded image. Various Ml algorithms were tested.",
      projectTech: [
        "python",
        "Numpy",
        "SciKit",
        "Matplotlib",
        "Pandas",
        "Flask",
        "Seaborn"
      ]
    },
    {
      image: "/project3.png",
      projectName: "Sorting Visualiser",
      projectDescription:
        "This was made using Javascript and various different sorting algorithms were visualised about their working and size,speed could be changed.",
      projectTech: [
        "JavaScript",
        "CSS",
        "HTML",
        
      ],
      
    },
  ];
  return (
    <div className="projects" id="work">
        <div className="title">
        <h2>Some Things I’ve Built</h2>
        </div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectName,
            projectTech,
          }) => {
            return (
                <div className="project"
                key={projectName}>
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
