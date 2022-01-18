import "./Projects.scss"

export default function Projects() {

    const list = [
        {
            id:"featured",
            title: "Featured"        
        },
        {
            id:"stream",
            title: "Stream Website"        
        },
        {
            id:"portfolio",
            title: "Resume Website"        
        },
        {
            id:"social",
            title: "Comedy Website"        
        },
    ];
    return(
         <div className="projects" id ="projects">
       <h1>Projects</h1>
       <ul>
          {list.map(item=>(
              <projectsList title={item.title}/>
          ))}
       </ul>
       <div className="container">
           <div className="item">
               <a href="https://mystreamingprojectapp.herokuapp.com/"><img src="assets/reactCode.jpg" alt ="" /></a>
               <h3>Streaming Website</h3>
               </div>                        
           <div className="item">
           <a href="#intro"><img src="assets/RessumePic.png" alt ="" /></a> 
               <h3 list>Resume Website</h3>
           </div>
           <div className="item">
           <a href="https://marioramilcomedy.com/"><img src="assets/MarioRamillComedyLogoFace.jpg" alt ="" /></a>
               <h3>Comedian Website</h3>
           </div>
       </div>
      </div>
    )
   
}


