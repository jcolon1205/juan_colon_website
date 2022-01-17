import "./Intro.scss"
import { init } from 'ityped'
import{ useEffect, useRef} from "react"
 
export default function Intro() {
    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: [" Software Engineer", "Social Media Marketer", "Content Creator"] });
           
            
        }, []);
    return (
        <div className="intro" id="intro">
        <div className="left">
        <div className="imgContainer">
                <img src="assets/MePic1.png" alt=""/>
                </div>    
        </div>  
         <div className="right">
         <div className="wrapper">
          <h2>Hello, My Name is</h2>
          <h1>Juan Colon</h1>
          <h3>   <span ref={textRef}></span>
          </h3>
                </div>
                <a href="#resume">
                   <img src="assets/arrowDown.png" alt="" /> 
                </a>
             </div>  
        </div>
    )
}
