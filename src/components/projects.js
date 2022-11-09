// COMPONENTS
import NotFound from "./notFound";
import ProjectFile from "./projectFile";
// STYLESHEET

import "../styles/core/_variables.scss";

const Projects = (props) => {
	const dataText = props.dataProjects.projects;
	const htmlProjects = dataText.map((textProject)=>{
		return (
			<ProjectFile 
				projectData={textProject}
				key={textProject.id}
				/>
		)
	})

	if (dataText.length === 0){
		return (
			<NotFound/>
		)
	}

	return (
		<main>
			<h2>Proyectos</h2>
			<section>
				<p>
					<p>{props.dataProjects.description}</p>
				</p>
			</section>
			<section>
				{htmlProjects}
			</section>
		</main>
	);
};

export default Projects;
