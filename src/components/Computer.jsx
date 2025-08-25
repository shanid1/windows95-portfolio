import './cv.css';
import textfile from './img/windowslogo.png';
import ss from './img/ss.png';
import fileproject from './img/project.png'
import github from './img/github.png'
function Computer({ onClose, onMinimize }) {
  return (
    <div className="cvWindow" style={{width:530}}>
      <div className="title">
        <div>
          <img src={textfile} alt="CV Icon" />
          <p>My Computer</p>
        </div>
        <div className="options" style={{marginLeft:400}}>
          <p onClick={onMinimize}>-</p>
          <p onClick={onClose}>X</p>
        </div>
      </div>
      <div className='filecontainer' >
        <img src={ss}></img>
        
      </div>

      
    </div>
  );
}

export default Computer;
