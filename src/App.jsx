import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Resume from "./components/resume/Resume";
import Works from "./components/works/Works";
import Referrals from "./components/referrals/Referrals";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";



function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">       
       <Intro/>
       <Resume/>
       <Works/>
       <Referrals/>      
       <Contact/>

      </div>
      
     </div>
  );
}

export default App;
