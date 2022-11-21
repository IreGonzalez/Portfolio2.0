
const projectFile = ({projectData})=>{
    const data = projectData.description;
    console.log(data);
    const description = data.map((paragraph)=>{
		return (
			<p>{paragraph}</p>
		)
	})
    return (
        <div>
            <h4>{projectData.name}</h4>
            <p>{projectData.descriptionShort}</p>
            <div>
                {description}
            </div>
            <nav>
                <a href="{projectData.linkWeb}" title="" target="_blank">
                    <img src="" />
                </a>
                <a href="{projectData.linkGithub}" title="" target="_blank">
                    <img src="" />
                </a>
            </nav>
        </div>
    )
}

export default projectFile;