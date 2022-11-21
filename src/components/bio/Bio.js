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
			<p>{data.biography}</p>
			<p>{data.curriculumText}</p>
			<p> {data.evolutionText}</p>
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
