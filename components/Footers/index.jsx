import React from "react";

const Footer = () => {
  const date = new Date(); 

  return (
    <React.Fragment>
      <footer className="text-center text-white">
        <div className="text-center text-gray-700 p-4">
          © {date.getFullYear()} Copyright: <a 
          className="text-gray-800" 
          target="_blank" 
          href="https://mohiuddin-mazumder.web.app/"
          >
            
            Mohiuddin Mazumder
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
