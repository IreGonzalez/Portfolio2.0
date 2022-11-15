// STYLESHEET
import "../styles/core/_variables.scss";
import "../styles/Main.scss";

const Rrss = (props) =>{
    return (
        <nav className="social-nav">
            <a className="social-link" href="https://www.linkedin.com/in/iregonzalez" title="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a className="social-link" href="https://github.com/IreGonzalez" title="GitHub">
                <i className="fa-brands fa-github-alt"></i>
            </a>
        </nav>
    );
}

export default Rrss;