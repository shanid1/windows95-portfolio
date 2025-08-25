import './cv.css';
import textfile from './img/info.png';
import fileproject from './img/project.png'
import github from './img/github.png'
function Info({ onClose, onMinimize }) {
  return (
    <div className="cvWindow" style={{width:600}}>
      <div className="title">
        <div>
          <img src={textfile} alt="CV Icon" />
          <p>Info</p>
        </div>
        <div className="options" style={{marginLeft:450}}>
          <p onClick={onMinimize}>-</p>
          <p onClick={onClose}>X</p>
        </div>
      </div>
        <div className='filecontainer'style={{backgroundColor:'gray',border:0,width:550}}>
        
        <div className='info' >
            <p>This website(Windows95 Replica) is completely made 
            from scratch by <span style={{color:'red'}}>Muhammed Shanid</span> </p>
            <hr></hr>
            <br></br>
             <p><span style={{color:'green'}}>MY SKILLS:- </span>
              <br></br><br></br>
              HTML-CSS
              <br></br><br></br>
              PYTHON
              <br></br><br></br>
              JAVASCRIPT
              <br></br><br></br>
              C
              <br></br><br></br>
              C++
              <br></br><br></br>
              C#
              <br></br><br></br>
              UNITY ENGINE
              <br></br><br></br>
              REACT
              <br></br><br></br>
              FLUTTER
              <br></br><br></br>
              ANDROID STUDIO
              <br></br><br></br>
              ARDUINO IDE
              <br></br><br></br>
              BASH
              <br></br><br></br>
              BLENDER
              <br></br><br></br>
              AFTER EFFECTS
              <br></br><br></br>
              FIREBASE
              <br></br><br></br>
              MYSQL
              <br></br><br></br>
              MONGODB
              <br></br><br></br>
              JAVA
              <br></br><br></br>
              LINUX
              <br></br><br></br>
              NODEJS
              <br></br><br></br>
              PHP
              <br></br><br></br>
              SELENIUM-OPENCV-PHOTOSHOP ETC..
               </p>
            
        </div>
      </div>

      
    </div>
  );
}

export default Info;
