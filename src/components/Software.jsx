import './soft.css';
import Cv from './Cv.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Computer from './Computer.jsx';
import Info from './Info.jsx';

import { useState } from 'react';

function Software({ name, icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isContacts, setIsContacts] = useState(false);
  const [isComp, setIsComp] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClick = () => {
    if (name === "CV") {
      setIsOpen(true);
      
      setIsMinimized(false); 
    }
    if (name === "Projects") {
      setIsProjects(true);
      setIsMinimized(false); 
    }if (name === "Network") {
      setIsContacts(true);
      setIsMinimized(false); 
    }
    if (name === "My Computer") {
      setIsComp(true);
      setIsMinimized(false); 
    }if (name === "About") {
      setIsInfo(true);
      setIsMinimized(false); 
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsProjects(false);
    setIsContacts(false);
    setIsInfo(false);
    setIsComp(false);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  return (
    <>
      
      {isOpen && !isMinimized && (
        <Cv onClose={handleClose} onMinimize={handleMinimize} />
      )}
      {isProjects && !isMinimized && (
        <About onClose={handleClose} onMinimize={handleMinimize} />
      )}
       {isContacts && !isMinimized && (
        <Contact onClose={handleClose} onMinimize={handleMinimize} />
      )}
      {isComp && !isMinimized && (
        <Computer onClose={handleClose} onMinimize={handleMinimize} />
      )}
      {isInfo && !isMinimized && (
        <Info onClose={handleClose} onMinimize={handleMinimize} />
      )}

      <div className="software" onDoubleClick={handleClick}>
        <div className="icon">
          <img src={icon} alt={name} />
        </div>
        <p>{name}</p>
      </div>
    </>
  );
}

export default Software;
