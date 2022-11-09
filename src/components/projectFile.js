
const projectFile = (props)=>{
    const data = props.projectData.description;
    console.log(data);
    const description = data.map((paragraph)=>{
		return (
			<p>{paragraph}</p>
		)
	})
    return (
        <div>
            <h4>{props.projectData.name}</h4>
            <p>{props.projectData.descriptionShort}</p>
            <div>
                {description}
            </div>
            <nav>
                <a href="{props.projectData.linkWeb}" title="" target="_blank">
                    <img src="" />
                </a>
                <a href="{props.projectData.linkGithub}" title="" target="_blank">
                    <img src="" />
                </a>
            </nav>
        </div>
    )
}

export default projectFile;