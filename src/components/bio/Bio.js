// COMPONENTS
import NotFound from "../shared/notFound/NotFound";

// STYLESHEET
import "../../styles/core/_variables.scss";
import "./_bio.scss";


const Bio = ({data}) => {
	if (!data) {
		return <NotFound />;
	}
	const dataText = data.curious;
	return (
		<main>
			<div>
				{/* {
					data.map((dataPart, i) => (
						<div>
							{dataPart.map((text, i) => (
								<p>{text}</p>
							))}
						</div>
					))
				} */}
				<div>
					<h2>Introducción al mundo tecnológico</h2>
					{data.text.map((text, i) => (
								<p>{text}</p>
						))}
				</div>
				<div>
					<h2>Formación</h2>
					{data.curriculumText.map((text, i) => (
								<p>{text}</p>
						))}
				</div>
				<div>
					<h2>Actualidad</h2>
					{data.evolutionText.map((text, i) => (
								<p>{text}</p>
						))}
				</div>
			</div>
			<div>
				<h2>Datos curiosos</h2>
				{dataText.map((textBio, i) => (
					<div key={i}>
						<p> {textBio.title}</p>
						<p>{textBio.description}</p>
					</div>
				))}
			</div>
		</main>
	);
};

export default Bio;
