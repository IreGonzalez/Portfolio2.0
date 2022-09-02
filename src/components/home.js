// STYLESHEET
import "../styles/main.scss";

const Home = (props) => {
	return (
		<main>
			<section>
				<section>
					<h3>pequeño relato</h3>
					<h2>Programadora junior con un hambre atroz por aprender</h2>
					<p>
						Estudié conservación y restauración de obras de arte, carrera que me aportó grandes cualidades como la
						resistencia a la frustración, a hacer el trabajo de manera eficiente, trabajar bajo la presión de un tiempo
						de entrega muy ajustado, a trabajar en equipo aprovechando al máximo las capacidades de cada uno para sacar
						el mayor partrido.
					</p>
					<p>
						Aunque parezca en un principio que esta experiencia o conocimientos no aportan demasiado he aprendido que
						son cualidades francamente valiosas en cualquier ámbito laboral.
					</p>
					<p>
						Actualmente me encuentro trabajando como Programadora web junior donde mi función principal es la
						maquetación, para ello uso HTML5, CSS3, jQuery, gulp y sass.
					</p>
					<p>
						Para saciar mis ganas de aprender hago pequeños proyectos por mi cuenta, tanto en JavaScript Vanilla como en
						ReactJS.
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
						Web con la que organizar y filtrar tus proyectos tejeriles, aún es una versión primitiva, pero poco a poco irá creciendo
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
