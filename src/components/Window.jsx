import './soft.css'
import Software from './Software'
import mycomp from './img/mycomp.png'
import file from './img/folder.png'
import textfile from './img/textfile.png'
import network from './img/internet.png'
import info from './img/info.png'

function Window(){
    return(
        <div className="softwares">
            <Software name="My Computer" icon={mycomp}/>
            <Software name="CV" icon={textfile}/>
            <Software name="Projects" icon={file}/>
            <Software name="Network" icon={network}/>
            <Software name="About" icon={info}/>
        </div>
    );
}
export default Window;