import './cv.css';
import textfile from './img/textfile.png';

function Cv({ onClose, onMinimize }) {
  return (
    <div className="cvWindow">
      <div className="title">
        <div>
          <img src={textfile} alt="CV Icon" />
          <p>CV</p>
        </div>
        <div className="options">
          <p onClick={onMinimize}>-</p>
          <p onClick={onClose}>X</p>
        </div>
      </div>

      <iframe
        src="/resume-sample.pdf"
        width="100%"
        height="100%"
        title="CV PDF"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}

export default Cv;
