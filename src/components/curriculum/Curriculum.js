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
	return (
		<main>
			<div className="cv">
				{dataText.map((cvText, i) =>(
					<p key={i}>
						{cvText}
					</p>
				))}
			</div>
		</main>
	);
}

export default curriculum;
