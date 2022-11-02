function curriculum(props) {
	return (
		<div className="cv">
			<p>{props.dataCV.curriculumText[0]}</p>
			<p>{props.dataCV.curriculumText[1]}</p>
			<p>{props.dataCV.curriculumText[2]}</p>
			<p>{props.dataCV.curriculumText[3]}</p>
		</div>
	);
}

export default curriculum;
