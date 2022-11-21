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

	return (
		<main>
			<h2>Proyectos</h2>
			<section>
				<p>
					<p>{data.description}</p>
				</p>
			</section>
			<section>
				{dataText.map((textProject, i) =>(
					<ProjectFile 
					projectData={textProject}
					key={i}
					/>
				))}
			</section>
		</main>
	);
};

export default Projects;
