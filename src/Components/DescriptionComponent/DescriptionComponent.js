
import './DescriptionComponent.css';

function Description (props) {
  
    return (
        <div id='descrp-container'>
            <h1> HELLO, MY NAME IS <span className="rotate text-important">{props.Name}</span>,<br/> AND I {props.Job}.</h1>
            <img id='avatar' src={props.Avatar} alt='avatar'/>

        </div>
    )
}
export default Description;