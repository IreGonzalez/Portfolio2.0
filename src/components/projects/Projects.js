// COMPONENTS
import NotFound from "../shared/notFound/NotFound";
import ProjectFile from "./ProjectFile";

// STYLESHEET
import "../../styles/core/_variables.scss";
import "./_projects.scss";

const Projects = ({data}) => {
	if (!data) {
		return <NotFound />;
	}
	const dataText = data.projects;
	console.log(data.projects);
	const htmlProjects = dataText.map((textProject)=>{
		return (
			<ProjectFile 
				projectData={textProject}
				key={textProject.id}
				/>
		)
	})

	return (
		<main>
			<h2>Proyectos</h2>
			<section>
				<p>
					<p>{data.description}</p>
				</p>
			</section>
			<section>
				{htmlProjects}
			</section>
		</main>
	);
};

export default Projects;
