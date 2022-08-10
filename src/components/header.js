// STYLESHEET

import "../styles/Header.scss";

const Header = (props) => {
	return (
		<header>
			<div>
        <p>Home</p>
				<p>Biografía</p>
				<p>Proyectos</p>
				<p>Currículum</p>
        <p>Contacto</p>
			</div>
      <div>
        <p>Linkedin</p>
        <p>GitHub</p>
      </div>
			<p>
				Irene
				<br /> González
			</p>
		</header>
	);
};

export default Header;
