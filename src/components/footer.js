// STYLESHEET
import "../styles/core/_variables.scss";
//COMPONENTS
import Rrss from "./rrss";
//HOOKS
import { Link } from "react-router-dom";
const Footer = (props) => {
	return (
		<footer>
			<div>
				<p>©2022 I love Mixins</p>
			</div>
			<nav>
				<Link to="./">Home</Link>
				<Link to="./bio">Biografía</Link>
				<Link to="./projects">Proyectos</Link>
				<Link to="./curriculum">Currículum</Link>
				<Link to="./contact">Contacto</Link>
			</nav>
			<div>
				<Rrss></Rrss>
				<p>Irene González</p>
			</div>

		</footer>
	);
};

export default Footer;
