// STYLESHEET
import "../../../styles/core/_variables.scss";
import "./_header.scss";

// COMPONENTS
import Rrss from "../rrss/Rrss";
//HOOKS
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<header className="header" id="header">
			<div className="header__hamburguer">
				<i className="header__hamburguer--icon hamburguer fa-solid fa-ellipsis js-hamburguer"></i>
				<nav className="header__menu js-hamburguerList hidden">
					<Link className="menu-link" to="./">Home</Link>
					<Link className="menu-link" to="./bio">Biografía</Link>
					<Link className="menu-link" to="./projects">Proyectos</Link>
					<Link className="menu-link" to="./curriculum">Currículum</Link>
					<Link className="menu-link" to="./contact">Contacto</Link>
				</nav>
			</div>
			<h1 className="header__title" id="title">Irene González</h1>
			<Rrss></Rrss>
		</header>
	);
};

export default Header;
