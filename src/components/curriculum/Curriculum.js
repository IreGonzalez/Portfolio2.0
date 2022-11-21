// COMPONENTS
import NotFound from "../shared/notFound/NotFound";
// STYLESHEET
import "../../styles/core/_variables.scss";
import "./_curriculum.scss";

function curriculum({data}) {
	if (!data) {
		return <NotFound />;
	}
	const dataText = data.curriculumText;
	const html = dataText.map((cvText) =>{
			return (
				<p key={cvText[50]}>{cvText}</p>
			)
		})
	return (
		<main>
			<div className="cv">
				{html}
			</div>
		</main>
	);
}

export default curriculum;
