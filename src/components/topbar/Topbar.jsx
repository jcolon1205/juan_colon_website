import "./Topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
           <div className="wrapper">
                <div className="left">
                    <a href="#intro" className= "logo">J.C.</a>

                    <div className="itemContainerA">
                        <Person className="icon"/>
                        <span><a href="tel:786-972-2254">786-972-2254</a></span>
                    </div> 
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span><a href="mailto:jcolon1205@email.com">jcolon1205@gmail.com</a></span>
                        </div> 
                    </div> 
                 <div className="right">
                     <div className="hamburger" onClick ={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                     </div>
                  </div>                 
                </div>          
            </div>
    );
}
