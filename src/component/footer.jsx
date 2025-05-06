import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="bg-gray-900 text-white w-full">
      {/* CTA Banner 
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left w-full md:w-3/4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
              Membership in Professional Associations:
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto md:mx-0">
              Member of Institute of Engineers Rwanda (IER)<br />
              Member of technical advisory board of EarthEnable in their mission to promote the use of earth materials in construction.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <button 
              className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors w-full sm:w-auto"
              onClick={() => {
                // You can either open the CV in a new tab
                window.open('/path/to/your-cv.pdf', '_blank');
                
                // Or trigger a download
                 const link = document.createElement('a');
                 link.href = '/path/to/Richard-CV.pdf.pdf';
                 link.download = 'Richard-CV.pdf';
                 document.body.appendChild(link);
                 link.click();
                 document.body.removeChild(link);
              }}
            >
              View My CV
            </button>
          </div>
        </div>
      </div>*/}

      <div id="Footer"> 
      {/* Footer */}
      <footer className="container mx-auto px-3 sm:px-4 pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3 md:mb-6">Contact Us</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">We'd love to hear from you! Reach out to us via any of the below channels.</p>
          </div>

          <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Phone Number */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300 bg-gray-800 bg-opacity-50 hover:bg-opacity-70">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2 sm:mb-0">
                <Phone className="h-4 w-4" />
              </div>
              <div className="ml-0 sm:ml-4 text-center sm:text-left">
                <h3 className="text-base md:text-lg font-semibold">Phone</h3>
                <p className="text-gray-400 text-sm md:text-base">+250 788755102</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300 bg-gray-800 bg-opacity-50 hover:bg-opacity-70">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2 sm:mb-0">
                <Mail className="h-4 w-4" />
              </div>
              <div className="ml-0 sm:ml-4 text-center sm:text-left">
                <h3 className="text-base md:text-lg font-semibold">Email</h3>
                <p className="text-gray-400 text-sm md:text-base">shumburich3@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300 bg-gray-800 bg-opacity-50 hover:bg-opacity-70">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2 sm:mb-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="ml-0 sm:ml-4 text-center sm:text-left">
                <h3 className="text-base md:text-lg font-semibold">Location</h3>
                <p className="text-gray-400 text-sm md:text-base">Rwanda, Kigali City, Kicukiro District</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300 bg-gray-800 bg-opacity-50 hover:bg-opacity-70">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2 sm:mb-0">
                <FaWhatsapp className="h-4 w-4" />
              </div>
              <div className="ml-0 sm:ml-4 text-center sm:text-left">
                <h3 className="text-base md:text-lg font-semibold">WhatsApp</h3>
                <p className="text-gray-400 text-sm md:text-base">+250 788755102</p>
              </div>
            </div>

            {/* Telegram */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300 bg-gray-800 bg-opacity-50 hover:bg-opacity-70">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2 sm:mb-0">
                <FaTelegram className="h-4 w-4" />
              </div>
              <div className="ml-0 sm:ml-4 text-center sm:text-left">
                <h3 className="text-base md:text-lg font-semibold">Telegram</h3>
                <p className="text-gray-400 text-sm md:text-base">+250 788755102</p>
              </div>
            </div>

            {/* Linkedin 
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300 bg-gray-800 bg-opacity-50 hover:bg-opacity-70">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2 sm:mb-0">
                <Linkedin className="h-4 w-4" />
              </div>
              <div className="ml-0 sm:ml-4 text-center sm:text-left">
                <h3 className="text-base md:text-lg font-semibold">Linkedin</h3>
                <p className="text-gray-400 text-sm md:text-base">0785126033</p>
              </div>
            </div>
            */}
          </div>
          

          {/* Social Media Links */}
          <div className="mt-8 md:mt-12 text-center">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Follow Us</h3>
            <div className="flex justify-center gap-4 sm:gap-5 md:gap-6 text-blue-600">
              {/* Facebook */}
              <a href="#" className="hover:text-blue-800 transition duration-200 transform hover:scale-110">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              {/* Twitter */}
              <a href="#" className="hover:text-blue-400 transition duration-200 transform hover:scale-110">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-pink-500 transition duration-200 transform hover:scale-110">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="hover:text-blue-700 transition duration-200 transform hover:scale-110">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="hover:text-red-600 transition duration-200 transform hover:scale-110">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-xs sm:text-sm">
          <p>© 2025 Richard. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
        </div>
    );
}