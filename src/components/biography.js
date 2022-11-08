// COMPONENTS
import NotFound from "./notFound";
// STYLESHEET
const Bio = (props) => {
	const dataText = props.dataBio.curious;
	const html = dataText.map((textBio)=>{
		return(
			<div key={textBio.id}>
				<p> {textBio.title}</p>
				<p>{textBio.description}</p>
			</div>
		)
	})
	if (props.dataBio.length === 0){
		return (
			<NotFound/>
		)
	}
	return (
		<main>
			<p>{props.dataBio.biography}</p>
			<p>{props.dataBio.curriculumText}</p>
			<p> {props.dataBio.evolutionText}</p>
			<div>
				{html}
			</div>
		</main>
	);
};

export default Bio;
