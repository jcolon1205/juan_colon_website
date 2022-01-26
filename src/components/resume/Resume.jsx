import "./Resume.scss"
import React from "react";


export default function Resume() {


    class DownloadLink extends React.Component {
    render() {
            return (
                <a href={this.props.src} download>{this.props.children}</a>
            )
        }
    }
    return (
        <div className="resume" id="resume">
            <h1>My Resume</h1>
            <h5>Click on Resume to download</h5>
         <div className="imgContainer"><DownloadLink src="assets/Juan_Colon_Resume_Jan2022.pdf"><img src="assets/ResuemePicNew.png" width="100%" 
     height="92%" alt="" /></DownloadLink>
   
                
                </div>   
        </div>
        
    )
}
