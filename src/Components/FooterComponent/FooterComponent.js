import '../FooterComponent/FooterComponent.css'
function Footer (props){
    return (
        <footer>
            <p>Copyritghts &copy; {props.Name} {props.Year}</p>
        </footer>
    )
}
export default Footer;