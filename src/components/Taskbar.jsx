import './task.css';
import logo from './img/windowslogo.png';
import win95 from './img/win95.png';
import folder from './img/folder.png';
import cv from './img/textfile.png';
import network from './img/internet.png';
import about from './img/info.png';
import mycomp from './img/mycomp.png';

import Cv from './Cv.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Computer from './Computer.jsx';
import Info from './Info.jsx';

import React, { useState, useEffect } from 'react';

function Taskbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeApps, setActiveApps] = useState({});
  const [currentTime, setCurrentTime] = useState('');

  const handleStart = () => {
    setIsVisible(!isVisible);
  };

  const openApp = (id) => {
    setActiveApps((prev) => ({ ...prev, [id]: true }));
  };

  const menuItems = [
    { id: 1, name: 'Projects', icon: folder, component: <About /> },
    { id: 2, name: 'CV', icon: cv, component: <Cv /> },
    { id: 3, name: 'Network', icon: network, component: <Contact /> },
    { id: 4, name: 'About', icon: about, component: <Info /> },
    { id: 5, name: 'MyComputer', icon: mycomp, component: <Computer /> },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12 || 12;
      const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;

      const timeString = `${hours}:${paddedMinutes} ${ampm}`;
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
      {menuItems.map(
        (item) => activeApps[item.id] && <React.Fragment key={item.id}>{item.component}</React.Fragment>
      )}

      {isVisible && (
        <div className='sideBar'>
          <div className='borderSide'>
            <img src={win95} className='win95img' alt="win95" />
            <div className='apps'>
              {menuItems.map((item) => (
                <div key={item.id} className='menuItem' onClick={() => openApp(item.id)}>
                  <p>{item.name}</p>
                  <img src={item.icon} alt={item.name} />
                </div>
              ))}

              
              <div className=''>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>

              <div className='shutdown'>
                <p>Shut Down</p>
                <img src={mycomp} alt="shutdown" />
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className='taskBar'>
        <div className='windowsBtn' onClick={handleStart}>
          <img src={logo} alt="Logo" className='logo' />
          <p className='startText'>Start</p>
        </div>
        <div className='time'>
          <p>{currentTime}</p>
        </div>
      </footer>
    </>
  );
}

export default Taskbar;
