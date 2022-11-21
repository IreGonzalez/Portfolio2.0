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
					{data.text.map((text, i) => (
								<p>{text}</p>
						))}
				</div>
				<div>
					{data.curriculumText.map((text, i) => (
								<p>{text}</p>
						))}
				</div>
				<div>
					{data.evolutionText.map((text, i) => (
								<p>{text}</p>
						))}
				</div>
			</div>
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
