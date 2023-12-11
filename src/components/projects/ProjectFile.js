
const projectFile = ({projectData})=>{
    const data = projectData.description;
    return (
        <div>
            <h4>{projectData.name}</h4>
            <p>{projectData.descriptionShort}</p>
            <div>
                {data.map((paragraph, i) => (
                    <p>{paragraph}</p>
                ))}
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