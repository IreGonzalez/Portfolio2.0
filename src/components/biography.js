// STYLESHEET
const Bio = (props) => {
	
	return (
		<main>
			<p>{props.dataBio.biography}</p>
			<p>{props.dataBio.curriculumText}</p>
			<p> {props.dataBio.evolutionText}</p>
			<p> {props.dataBio.curious[0].title}</p>
			<p>{props.dataBio.curious[0].description}</p>

			<p> {props.dataBio.curious[1].title}</p>
			<p>{props.dataBio.curious[1].description}</p>

			<p> {props.dataBio.curious[2].title}</p>
			<p>{props.dataBio.curious[2].description}</p>
		</main>
		// <main>
		// 	<section>
		// 		<h3>pequeño relato</h3>
		// 		<h2>Asómate al gérmen de esta programadora</h2>
		// 		<p>
		// 			En mi casa siempre hubo ordenador y como en casi todos sitios había que turnarse como buenos hermanos. Para
		// 			poder jugar me las tenía que ver con MS-DOS y en casa de mi abuelo jugábamos al Arkanoid en una pantalla de 16
		// 			colores gracias al disco de 5 1/4, todo un lujazo.
		// 		</p>
		// 		<p>
		// 			Durante la carrera, gracias a Ubuntu, fui capaz a sobrevivir a Windows Vista y empecé a adentrarme en el mundo
		// 			del software libre de forma totalmente autodidacta. Incluso me atreví a instalarme un emulador de
		// 			windows...wine...con el que me peleé hasta aburrirme, solo para intentar jugar.
		// 		</p>
		// 		<p>
		// 			El día que me hablaron de Adalab y me pusieron sobre la mesa aquello de la programación front-end, lo tuve
		// 			claro, era mi próximo destino.
		// 		</p>
		// 	</section>
		// 	<section>
		// 		<h3>Descripción</h3>
		// 		<article>
		// 			<h2>Adalab</h2>
		// 			<p>
		// 				Durante los meses de formación en Adalab he realizado distintos tipos de proyectos: El primero que realicé
		// 				sola es la base de la web por la que te encuentras navegando, a la que he realizado diversas modificaciones
		// 				de maquetación, así como he añadido funcionalidades tales como el menú hamburguesa mediante Java Script.
		// 			</p>
		// 			<p>
		// 				Durante varias semanas he estado inmersa en el mundo de la programación gracias a Adalab, consiguiendo
		// 				realizar proyectos individuales y en grupo, aplicando la filosofía Agile para gestionar el cambio constante
		// 				en el que me encontraba sumergida junto a mis compañeras.
		// 			</p>
		// 			<p>
		// 				Soy una persona curiosa, con inquietud por aprender constantemente y crecer, así que estoy deseando tener mi
		// 				oportunidad y seguir creciendo.
		// 			</p>
		// 			<p>
		// 				Me encanta la combinación del trabajo en equipo y el individual, poniendo en valor las cualidades de cada
		// 				miembro por el bien del conjunto.
		// 			</p>
		// 		</article>
		// 		<article>
		// 			<h2>Mi evolución en el ámbito Laboral</h2>
		// 			<p>
		// 				El trabajo que estoy desarrollando actualmente es en esencia maquetación, en este ámbito he aprendido mucho,
		// 				tanto css como el tener que buscar e investigar para conseguir cumplir con el diseño realizado por el
		// 				cliente.
		// 			</p>
		// 		</article>
		// 	</section>
		// 	<section>
		// 		<h2>3 datos curiosos</h2>
		// 		<div>
		// 			<h4>Ávida Lectora</h4>
		// 			<p>
		// 				Coger un libro con tiempo para terminármelo es un vicio. Me encanta la novela fantástica, aunque no rechazo
		// 				un buen libro de novela negra
		// 			</p>
		// 		</div>
		// 		<div>
		// 			<h4>Crochetera</h4>
		// 			<p>
		// 				Siempre quiero una vueltecita más y lo dejo..., pero no suele ser solo una, siempre hay proyectos en lista
		// 				de espera
		// 			</p>
		// 		</div>
		// 		<div>
		// 			<h4>Ordenada</h4>
		// 			<p>Economizo mi tiempo, así que intento ser consciente de lo que hago para ahorrame el revisar</p>
		// 		</div>
		// 	</section>
		// </main>
	);
};

export default Bio;
