// STYLESHEET
import "../../../styles/core/_variables.scss";
import "./_footer.scss";

//COMPONENTS
import Rrss from "../rrss/Rrss";
//HOOKS
import { Link } from "react-router-dom";
const Footer = (props) => {
	return (
		<footer className="footer" id="footer">
				<Rrss></Rrss>
			<nav className="footer__menu">
				<Link className="footer__menu-link" to="./">Home</Link>
				<Link className="footer__menu-link" to="./bio">Biografía</Link>
				<Link className="footer__menu-link" to="./projects">Proyectos</Link>
				<Link className="footer__menu-link" to="./curriculum">Currículum</Link>
				<Link className="footer__menu-link" to="./contact">Contacto</Link>
			</nav>
			<div className="footer__copy">
				<p>©2022 I love Mixins</p>
			</div>

		</footer>
	);
};

export default Footer;
