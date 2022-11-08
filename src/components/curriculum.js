// COMPONENTS
import NotFound from "./notFound";
// STYLESHEET

function curriculum(props) {
	const dataText = props.dataCV.curriculumText;
	const html = dataText.map((cvText) =>{
			return (
				<p key={cvText[50]}>{cvText}</p>
			)
		})
		
	if (props.dataCV.length === 0){
		return (
			<NotFound/>
		)
	}
	return (
		<main>
			<div className="cv">
				{html}
			</div>
		</main>
	);
}

export default curriculum;
