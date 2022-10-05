// STYLESHEET
import "../styles/core/_variables.scss";

const Projects = (props) => {
	return (
		<main>
			<h2>Proyectos</h2>
			<section>
				<p>
					En el siguiente apartado encontrarás por orden de ejecución los ejercicios realizados en las evaluaciones de
					Adalab, algunas ya están modificadas y otras son completamente nuevas y de idea propia.
				</p>
			</section>

			<section>
				<div>
					<h4>Antiguo Portfolio</h4>
					<p>
						Se trata del primer proyecto individual que realicé, en su origen tenía un aspecto diferente así que lo adapté y rediseñé para poder tener un portfolio al acabar en Adalab
					</p>
					<p>
						Si entras en el enlace y navegas un poco en él entenderás porqué he decidido rediseñarlo y hacerlo completamente nuevo
					</p>
					<nav>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>

				{/* <div>
					<h4>Adivina el número</h4>
					<p>Primer mini-proyecto realizazo en JavaScript Vanilla de manera totalmente individual y autónoma.</p>
					<p>Se trata de uhn pequeño juego en el que tienes que adivinar un número al azar entre 1 y 100</p>
				</div> */}
				<div>
					<h4>Buscador de series</h4>
					<p>
						Accede a la Web, realiza tu búsqueda y guarda tus series favoritas en la lista y si ya no te gusta, ¡borrala!
					</p>
					<p>
						Cada vez que accedas a la web, tu selección permanecerá intacta en la caché de tu ordenador siempre que no la resetees.
					</p>
					<p>
						Se trata del primer proyecto individual realizado por completo en JavaScript con el que puse a prueba mis conocimientos iniciales sobre este lenguaje.
					</p>
					<nav>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>

				<div>
					<h4>Knit Projects</h4>
					<p>
						Web con la que organizar y filtrar los proyectos kniting que estés realizando. Aunque aparentemente lo veas vacío, seguro que si consultas el código no te parece lo mismo.
					</p>
					<p>
						Este proyecto comenzó siendo un gestor de clubs con el que me inicié en el uso de la biblioteca de JavaScrip, React. Realizamos este proyecto donde la mayor dificultad estaba en reprogramar nuestro cerebro.
					</p>
					<p>
						Actualmente este proyecto está en plena fase de transformación, mi intención es completar las versiones tablet y desktop para hacerla totalmente responsive, también quiero implementar más funcionalidades como escoger entre distintas técnicas tejeriles o ordenarlos según prioridad de entrega.
					</p>
					<nav>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>

				<div>
					<h4>Buscador de personajes</h4>
					<p>
						Si te gusta la serie echa un vistazo a los personajes que han surgido hasta ahora, filtralos como quieras y... ¡A por los siguientes!
					</p>
					<p>
						En este ejercicio final las directrices únicamente solicitaban una petición a la Api y algún filtro, pero no pude conformarme viendo que había tantos personajes decidí realizar la paginación (aún no es perfecta, pronto seguiré trabajando en ella)
					</p>
					<p>
						A la hora de realizar los filtros me encontré con el handicap de no conocer la serie así que me las averigué para que en cada paginación los filtros se modifican de manera automática facilitando en cada momento las opciones necesarias.
					</p>
					<p>
						Gracias a esto ya estoy trabajando con la nueva api adaptando el diseño de la página, estoy deseando poder enseñarla, aún queda tener un poco de paciencia.
					</p>
					<nav>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>

				<div>
					<h4>"Google" extension</h4>
					<p>Landpage en la que estoy implementando distintas funcionalidades para practicar JavaScript Vanilla.</p>
					<p>
						El fondo de pantalla cambia de forma random entre distintas imágenes extraídas de Flikr, al introducir tu nombre en el Input aoparecerá en tu saludo de Buenos días.
					</p>
					<p>
						Actualmente sigo trabajando en este proyecto para implementar más funcionalidades, como que pase de Buenos días a Buenas tardes y noches, añadir frases motivacionales o curiosas, mejorar la  etc.
					</p>
					<nav>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>
			</section>
			<section>
				<div>
					<h4>Equipo Cabra</h4>
					<p>Primera web realizada en equipo</p>
					<nav>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>

				<div>
					<h4>Awesome profile-cards</h4>
					<p>Segundo proyecto en equipo, el primero en el que introdujimos JavaScript</p>
					<nav>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
						<a href="" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>
			</section>
		</main>
	);
};

export default Projects;
