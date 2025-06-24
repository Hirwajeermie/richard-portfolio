import React, { useEffect, useState } from "react";
import { Linkedin, Facebook, Instagram, Menu, X, ChevronDown, ChevronUp  } from "lucide-react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll'

import './home.css'
import develo from '../assets/develo.png'

const ContactIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Icon with Tooltip */}
      <div className="group relative">
        <a
          href="https://wa.me/+250788755102 "
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
        <span className="absolute z-10 -left-32 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none">
          Chat on WhatsApp
        </span>
      </div>

      {/* Call Icon with Tooltip */}
      <div className="group relative">
        <a
          href="tel:+250788755102 "
          className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <FaPhoneAlt className="w-6 h-6" />
        </a>
        <span className="absolute z-10 -left-24 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none">
          Call Now
        </span>
      </div>
    </div>
  );
};

export default function Home() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
      <div className="border border-gray-200 rounded-md mb-2 overflow-hidden">
        <button 
          className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
          onClick={onClick}
        >
          <span className="font-medium">{title}</span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        
        {isOpen && (
          <div className="p-4 bg-white">
            {content}
          </div>
        )}
      </div>
    );
  };

  const [openIndex, setOpenIndex] = useState(0);
  
  const items = [
    {
      title: "Explore more about me",
      content: ` Driven by a commitment to advancing my expertise, I returned to the University 
      of Birmingham to undertake more advanced postgraduate studies through a research degree. 
      This work focused on the use of geosynthetics in the construction of low-volume 
      roads built on weak expansive soils—an area critical to infrastructure development
       in geotechnically challenging environments. This research led to the development
        of published and unpublished manuscripts, contributing to the advancement of 
        scientific knowledge in the field.
       Professionally, I have served as a geotechnical 
        consultant on numerous construction and infrastructure projects across Rwanda, and 
        I have also been involved in several international assignments. My areas of 
        specialization include geotechnical investigations, slope stability analysis, 
        foundation design, soil improvement, pavement engineering, and problematic ground
        conditions such as expansive soils, soft soils, and collapsible soils. I am also 
       currently involved in geotechnical aspects associated with mining projects.
      Alongside my consultancy work, I serve on the academic staff at the University
       of Rwanda, where I teach/have taught core courses such as Soil Mechanics, Rock Mechanics, 
       Engineering Mechanics, and Volcanology. I am passionate about bridging the gap between 
       academic research and engineering practice, and about mentoring the next generation of engineers.
       With a foundation in academic excellence and a career grounded in real-world application, 
       I bring a unique blend of research-based insight and hands-on engineering 
       expertise to the projects I undertake.
      `
    },
    
 
  ];
  return (
    <div id="home">
    <div className="min-h-screen overflow-hidden relative">
      {/* Space background with stars */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full"></div>
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
            <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.8 + 0.2,
                }}
            ></div>
        ))}
        </div>

        {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-400 rounded-full blur-lg opacity-80 z-0"></div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gray-900 text-white fixed  px-4 py-2 w-full">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold"></div>
            
            {/* Mobile Menu Button - Only visible on small screens */}
            <button 
              className="md:hidden flex items-center justify-center p-2 rounded-md text-white focus:outline-none" 
              onClick={toggleMobileMenu}
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop Navigation - Always visible on medium screens and larger */}
            <nav className={`hidden md:flex items-center space-x-8 ${sticky ? ' ' : '-'}`}>
              <ul className="flex space-x-8">
                <li><Link to="home" smooth={true} offset={0} duration={500} className="hover:text-blue-400">Home</Link></li>
                <li><Link to='Skills' smooth={true} offset={-230} duration={500} className="hover:text-blue-400">Skills</Link></li>
                <li><Link to="Project" smooth={true} offset={-150} duration={500} className="hover:text-blue-400">Projects</Link></li>
              </ul>
              
              <div className="flex space-x-4">
                <a href="tel:+250788755102" className="p-2 rounded-full border border-gray-600 hover:border-blue-400">
                  <FaPhoneAlt size={18} />
                </a>
                <a href="https://wa.me/+250788755102" className="p-2 rounded-full border border-gray-600 hover:border-blue-400">
                  <FaWhatsapp size={18} />
                </a>
              </div>
              
              <Link to="Contactus" smooth={true} offset={-260} duration={500} className="px-6 py-2 border border-white hover:bg-white hover:text-gray-900 transition-colors">
                Contact Me
              </Link>
            </nav>
          </div>
          
          {/* Mobile Menu - Only visible on small screens when toggled */}
          <div className={`md:hidden ${mobileMenu ? 'block' : 'hidden'} pt-4 pb-3 border-t border-gray-700 mt-3`}>
            <div className="flex flex-col space-y-4">
              <Link to="home" smooth={true} offset={0} duration={500} className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={() => setMobileMenu(false)}>Home</Link>
              <Link to='Skills' smooth={true} offset={-230} duration={500} className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={() => setMobileMenu(false)}>Trainining Course</Link>
              <Link to="Project" smooth={true} offset={-150} duration={500} className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={() => setMobileMenu(false)}>Projects</Link>
              <Link to="Contactus" smooth={true} offset={-260} duration={500} className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={() => setMobileMenu(false)}>Contact Me</Link>
              
              <div className="flex space-x-4 px-3">
                <a href="tel:+250788755102" className="p-2 rounded-full border border-gray-600 hover:border-blue-400">
                  <FaPhoneAlt size={18} />
                </a>
                <a href="https://wa.me/+250788755102" className="p-2 rounded-full border border-gray-600 hover:border-blue-400">
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>
        </header>
              
        <section className=" mx-auto px-4 py-12">
          <div className='Introd-text font-bold'>
            <h1 className="text-black m-auto font-bold">Richard SHUMBUSHO: GEOTECHNICAL EXPERT& CIVIL ENGINEER </h1>
          </div>
          <div className="Homeb">
            <div className="Home-left">
            <div className="flex flex-col md:flex-row items-center">
            <div className="w-full pb-8 ">
              <div className="Move-text inline-block px-4 py-2 bg-gray-900 text-white rounded-md mb-4">
                Welcome to my Portfolio
              </div>
              <h1 className="text-4xl m-auto md:text-xl font-bold mb-6 underline">
                About me - Geotechnical Engineer/Geotechnical Specialist
              </h1>
              <p className="text-black-300 m-8 f-line">
              I am a dedicated and results-driven geotechnical engineer with over a decade of academic and professional 
              experience in civil, geotechnical, and highway engineering. My work combines technical depth, 
              research-based innovation, and practical insight, enabling me to deliver tailored, reliable solutions 
              in both local and international construction projects.
              <br/><br></br> I hold a Bachelor of Science in Civil Engineering from 
              the University of Rwanda, awarded in 2012 with First Class Honours—the highest academic distinction.
              In 2014, I earned a Master of Science in Geotechnical Engineering with Distinction
             from the University of Birmingham, UK—the highest academic award achievable in the program.
              My research focused on the stabilization of expansive soils using fly ash and lime, 
              exploring sustainable ground improvement techniques with practical implications
               for infrastructure development. 
              </p>
              
              <div>

          </div>
            </div>

              </div>
            </div>

            <div className="Home-right">
              <img className="develop" src={develo} alt="" />
            </div>
             
          </div>
          <div> 
            <div className="w-full text-black-300 m-8 p-3 auto f-line mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => setOpenIndex(index === openIndex ? null : index)}
        />
      ))}
    </div>
    <Link to="Footer" smooth={true} offset={-260} duration={500} className="inline-flex items-center px-6 py-3 bg-gray-900 border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors">
                Contact Me
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8l4 4-4 4" />
                  <path d="M8 12h8" />
                </svg>
              </Link>
            </div>
        </section>
        
        {/* Small rocket decoration
        <div className="hidden md:block absolute right-20 top-64 transform rotate-45">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 5 L25 15 L15 15 Z" fill="#FF5252" />
            <rect x="18" y="15" width="4" height="15" fill="#FF5252" />
            <circle cx="20" cy="32" r="3" fill="#FF7B7B" />
            <path d="M15 25 L12 30 L15 28" fill="#FF7B7B" />
            <path d="M25 25 L28 30 L25 28" fill="#FF7B7B" />
          </svg>
        </div> */}
      </div>
      {/* Contact Icons */}
      <ContactIcons />
    </div>
    </div> 
  );
}
export  {Home}