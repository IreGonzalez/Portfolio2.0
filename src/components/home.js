// STYLESHEET
import "../styles/Main.scss";

const Home = (props) => {
	return (
		<main>
			<section>
				<section>
					<h3>pequeño relato</h3>
					<h2>Breve descripción introductoria</h2>
					<p>
						cuenta lo que quieras
					</p>
				</section>
			</section>
			<section>
				<h2>Proyectos</h2>
				<div>
					<h4>Buscador de personajes</h4>
					<p>Se trata de un buscador de personajes de la serie de animación Rick y Morty</p>
				</div>
				<div>
					<h4>Buscador de series</h4>
					<p>Web en la que almacenar un listado de tus series favoritas</p>
				</div>
				<div>
					<h4>Knit Projects</h4>
					<p>
						Web con la que organizar y filtrar tus proyectos tejeriles, aún es una versión primitiva, pero poco a poco
						irá creciendo
					</p>
				</div>
				<div>
					<h4>Antiguo Portfolio</h4>
					<p>El primer proyecto que realicé de manera individual adaptado y rediseñado para ser mi portfolio</p>
				</div>
				<div>
					<h4>"Google" extension</h4>
					<p>Aplicación web en la que estoy trabajando y practicando JavaScript Vanilla</p>
				</div>
				<div>Ver más proyectos</div>
			</section>
		</main>
	);
};

export default Home;
