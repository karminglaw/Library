import React from 'react';
import { ImAddressBook } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-white text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly  items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-black">Contact Information</h2>
          <p className='text-black'>Email: <a href="mailto:lawming234@gmail.com" className="text-blue-400">lawming234@gmail.com</a></p>
          <p className='text-black'>Phone: <a className="text-blue-400">+601111384090</a></p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-black">Links</h2>
          <p className=''>  <a href="https://mings-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400">Resume</a></p>
          <p className=''><a href="https://www.linkedin.com/in/kar-ming-law-2120952aa/" target="_blank" rel="noopener noreferrer" className="text-blue-400">LinkedIn</a></p>
          <p className=''><a href="https://github.com/karminglaw" target="_blank" rel="noopener noreferrer" className="text-blue-400">GitHub</a></p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-black">Created By</h2>
          <p className='text-black'>Kar Ming Law</p>
        </div>
      </div>
      <div className="text-center mt-4 text-black">
        <p>&copy; {new Date().getFullYear()} Reviewo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
