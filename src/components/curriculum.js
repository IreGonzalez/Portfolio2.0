// COMPONENTS
import NotFound from "./notFound";
// STYLESHEET

function curriculum(props) {
	const dataText = props.dataCV.curriculumText;
	console.log("datatext",dataText);
	const html = dataText.map((cvText) =>{
			return (
				<p>{cvText}</p>
			)
		})
		
	if (props.dataCV.length === 0){
		return (
			<NotFound/>
		)
	}
	return (
		<div className="cv">
			{html}
		</div>
	);
}

export default curriculum;
