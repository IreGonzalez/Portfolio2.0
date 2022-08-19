// STYLESHEET
import "../styles/Header.scss";
import github from "../content/img/github-alt-brands.svg";
import linkedIn from "../content/img/linkedin-in-brands.svg";

const Header = (props) => {
	return (
		<header className="header">
			<div>
				<svg className="hamburguer js_ham" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z" />
				</svg>
				<nav className="menu js_menu">
					<a className="menu-element">Home</a>
					<a className="menu-element">Biografía</a>
					<a className="menu-element">Proyectos</a>
					<a className="menu-element">Currículum</a>
					<a className="menu-element">Contacto</a>
				</nav>
			</div>

			<div className="social">
				<nav className="social-nav">
					<a href="https://www.linkedin.com/in/iregonzalez" title="LinkedIn">
						<img className="social-link" src={linkedIn} />
					</a>
					<a href="https://github.com/IreGonzalez" title="GitHub">
						<img className="social-link" src={github} />
					</a>
				</nav>
				<h1 className="social-name">
					Irene González
				</h1>
			</div>
		</header>
	);
};

export default Header;
