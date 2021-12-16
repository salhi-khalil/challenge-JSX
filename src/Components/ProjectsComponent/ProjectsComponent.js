
import '../ProjectsComponent/ProjectsComponent.css';

function Projects (props){
    /*console.log(props.Projs);*/
    
    return (
        <div  id="projects">
            <h2 className="text-important">Projects</h2>
            <div className="projects-container">

                {props.Projs.map((x,i)=>{
                    return (
                    <div className="project-card">
                        <img src={x.image} alt="project" />
                        <h3>{x.title+(i+1)}</h3>
                        <p>
                        {x.description}
                        </p>
                        <p><a href={x.link+(i+1)}>Github Link</a></p>
                    </div>
                    )
                    })}
            </div>
        </div>
        
    )
}
export default Projects;