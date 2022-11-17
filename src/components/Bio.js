// COMPONENTS
import NotFound from "./notFound";
// STYLESHEET
const Bio = ({dataBio}) => {
	if (!dataBio) {
		return <NotFound />;
	}

	const dataText = dataBio.curious;
	
	return (
		<main>
			<p>{dataBio.biography}</p>
			<p>{dataBio.curriculumText}</p>
			<p> {dataBio.evolutionText}</p>
			<div>
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
