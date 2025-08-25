import './cv.css';
import textfile from './img/folder.png';
import fileproject from './img/project.png'
import github from './img/github.png'
function About({ onClose, onMinimize }) {
  return (
    <div className="cvWindow" style={{width:600}}>
      <div className="title">
        <div>
          <img src={textfile} alt="CV Icon" />
          <p>Projects</p>
        </div>
        <div className="options" style={{marginLeft:450}}>
          <p onClick={onMinimize}>-</p>
          <p onClick={onClose}>X</p>
        </div>
      </div>
      <div className='filecontainer'>
        <div className='container'>
        <div className='project'>
            <img src={fileproject}></img>
            <a href='https://github.com/shanid1/CALICUT-CITY-'>Calicut City Game</a>
        </div>
        <div className='project'>
            <img src={fileproject}></img>
            <a href='https://github.com/shanid1/Advanced-Ecommerce-Website'>Ecommerce Website</a>
        </div>
        <div className='project'>
            <img src={fileproject}></img>
            <a href='https://github.com/shanid1/Expense-Tracker-App'>Expense Tracker App</a>
        </div>
        <div className='project'>
            <img src={fileproject}></img>
            <a href='https://github.com/shanid1/CyberStorm'>3D Multiplayer Shooter</a>
        </div>
        <div className='project'>
            <img src={github} ></img>
            <a href='https://github.com/shanid1'>More on github</a>
        </div>
        </div>
        <div className='info'>
            <p>Click on name text on folder to open project..</p>
            <hr></hr>
            <br></br>
            <p style={{color:'gray'}}>4 Folders  34kb used</p>
        </div>
      </div>

      
    </div>
  );
}

export default About;
