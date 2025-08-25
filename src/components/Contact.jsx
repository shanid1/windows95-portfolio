import './cv.css';
import textfile from './img/internet.png';
import fileproject from './img/project.png'
import github from './img/githubicon.png'
import insta from './img/instagram.png'
import leetcode from './img/leetcode.png'
import linkedin from './img/linkedin.png'
function Contact({ onClose, onMinimize }) {
  return (
    <div className="cvWindow" style={{width:400}}>
      <div className="title">
        <div>
          <img src={textfile} alt="CV Icon" />
          <p>Networks</p>
        </div>
        <div className="options" style={{marginLeft:250}}>
          <p onClick={onMinimize}>-</p>
          <p onClick={onClose}>X</p>
        </div>
      </div>
      <div className='filecontainer'>
        <div className='container'>
        <div className='project'>
            <img src={linkedin}></img>
            <a href='https://in.linkedin.com/in/muhammed-shanid-786211330'>Linkedin</a>
        </div>
        
        <div className='project'>
            <img src={insta}></img>
            <a href='https://www.instagram.com/s.h4nid'>Instagram</a>
        </div>
        
        </div>
        <div className='container'>
            <div className='project'>
            <img src={leetcode}></img>
            <a href='https://leetcode.com/u/sh4nid/'>Leetcode</a>
        </div>
        <div className='project'>
            <img src={github}></img>
            <a href='https://github.com/shanid1'>Github</a>
        </div>  
        </div>
        <div className='info'>
            <p>Email:shanidktk18@gmail.com</p>
            <hr></hr>
            <br></br>
            <p style={{color:'gray'}}>&copy;shanid</p>
        </div>
      </div>

      
    </div>
  );
}

export default Contact;
