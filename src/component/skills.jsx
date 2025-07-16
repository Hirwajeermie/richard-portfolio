import React from "react";
import "./skills.css"
import { ExternalLink } from "lucide-react";
// import Plaxis from "../assets/plaxis.png";
// import Geotechnical from "../assets/geotechnica.png";
// import Civil from "../assets/Civil.png";

export default function skills() {
  const projects = [
    {
      id: 1,
      title: "Rural roads for development course (2017) – Birmingham, UK",
      description: "  ",
      // img: Plaxis,
      
    },
    {
      id: 2,
      title: "Workshop on the use of geogrids in civil engineering projects (2019) organized by TENSAR – one of the largest manufacturers of geogrids – Warrington, UK",
      description: "",
      // img: Civil,
      
    },
    {
      id: 3,
      title: "Expert training with PrimECS – Master builder academy (2024)",
      description: "  ",
      // img: Geotechnical,
     
    },
  ];

  return (
    <div id="Skills"> 
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="movee text-3xl font-bold text-center mb-12"> Trainining Course </h2>
        
        <div className="grid grid-cols- sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="movee bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="movee relative h-64 overflow-hidden">
        {/* Project Screenshot 
        <img
          src={project.img}
          alt={``}
          className="w-full h-full object-cover"
        />
        
        {/* Project Image Overlay - Laptop/Device Frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-11/12 h-5/6 rounded-md ${project.id === 1 || project.id === 2 ? 'bg-purple-100' : 'bg-gray-200'} p-1`}>
            <div className="relative w-fuw-full h-full overflow-hidden">
              <img
                src={project.img}
                alt={`${project.title} interface`}
                className="w-full h-full object-cover rounded"
              />
              
              {/* Mock browser/app UI elements */}
              {project.id === 1 && (
                <div className="absolute top-0 left-0 w-full h-6 bg-gray-800 rounded-t flex items-center px-2 space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              )}
              {project.id === 2 && (
                <div className="movee absolute top-0 left-0 w-full h-6 bg-white rounded-t flex items-center px-2">
                  <div className="w-1/3 h-3 bg-gray-200 rounded"></div>
                </div>
              )}
              {project.id === 3 && (
                <div className="movee absolute top-0 right-0 w-full h-full flex items-center justify-center">
                  <div className=" ">
                    <div className="w-full h-4 bg-gray-700 rounded-t-lg"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        {/*
        <a 
          href={project.githubLink} 
          className="inline-flex items-center text-sm font-medium p-2 bg-gray-800 text-white hover:text-gray-900"
        >
          View in  
          <ExternalLink className="ml-1 w-4 h-4  " />
        </a>*/}
      </div>
    </div>
  ); 
}