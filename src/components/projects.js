// COMPONENTS
import NotFound from "./notFound";
// STYLESHEET

import "../styles/core/_variables.scss";

const Projects = (props) => {
	const dataText = props.dataProjects;
	const htmlProjects = dataText.map((textProject)=>{
		return (
			<div>
				<h4>{textProject.name}</h4>
				<p>{textProject.descriptionShort}</p>
				<p>{textProject.description[0]}</p>
				<p>{textProject.description[1]}</p>
				<p>{textProject.description[2]}</p>
				<p>{textProject.description[3]}</p>
				<nav>
					<a href="{textProject.linkWeb}" title="" target="_blank">
						<img src="" />
					</a>
					<a href="{textProject.linkGithub}" title="" target="_blank">
						<img src="" />
					</a>
				</nav>
			</div>
		)
	})

	return (
		<main>
			<h2>Proyectos</h2>
			<section>
				<p>
					<p>{props.dataProjects.description}</p>
				</p>
			</section>

			<section>
				<div>
					<h4>{props.dataProjects.projects[0].name}</h4>
					<p>{props.dataProjects.projects[0].descriptionShort}</p>
					<p>{props.dataProjects.projects[0].description[0]}</p>
					<p>{props.dataProjects.projects[0].description[1]}</p>
					<p>{props.dataProjects.projects[0].description[2]}</p>
					<p>{props.dataProjects.projects[0].description[3]}</p>
					<nav>
						<a href="{props.dataProjects.projects[0].linkWeb}" title="" target="_blank">
							<img src="" />
						</a>
						<a href="{props.dataProjects.projects[0].linkGithub}" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>
				<div>
					<h4>{props.dataProjects.projects[1].name}</h4>
					<p>{props.dataProjects.projects[1].descriptionShort}</p>
					<p>{props.dataProjects.projects[1].description[0]}</p>
					<p>{props.dataProjects.projects[1].description[1]}</p>
					<p>{props.dataProjects.projects[1].description[2]}</p>
					<nav>
						<a href="{props.dataProjects.projects[1].linkWeb}" title="" target="_blank">
							<img src="" />
						</a>
						<a href="{props.dataProjects.projects[1].linkGithub}" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>
				<div>
					<h4>{props.dataProjects.projects[2].name}</h4>
					<p>{props.dataProjects.projects[2].descriptionShort}</p>
					<p>{props.dataProjects.projects[2].description[0]}</p>
					<p>{props.dataProjects.projects[2].description[1]}</p>
					<p>{props.dataProjects.projects[2].description[2]}</p>
					<nav>
						<a href="{props.dataProjects.projects[2].linkWeb}" title="" target="_blank">
							<img src="" />
						</a>
						<a href="{props.dataProjects.projects[2].linkGithub}" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>
				<div>
					<h4>{props.dataProjects.projects[3].name}</h4>
					<p>{props.dataProjects.projects[3].descriptionShort}</p>
					<p>{props.dataProjects.projects[3].description[0]}</p>
					<p>{props.dataProjects.projects[3].description[1]}</p>
					<nav>
						<a href="{props.dataProjects.projects[3].linkWeb}" title="" target="_blank">
							<img src="" />
						</a>
						<a href="{props.dataProjects.projects[3].linkGithub}" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>
				<div>
					<h4>{props.dataProjects.projects[4].name}</h4>
					<p>{props.dataProjects.projects[4].descriptionShort}</p>
					<p>{props.dataProjects.projects[4].description[0]}</p>
					<p>{props.dataProjects.projects[4].description[1]}</p>
					<p>{props.dataProjects.projects[4].description[2]}</p>
					<nav>
						<a href="{props.dataProjects.projects[4].linkWeb}" title="" target="_blank">
							<img src="" />
						</a>
						<a href="{props.dataProjects.projects[4].linkGithub}" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>
				<div>
					<h4>{props.dataProjects.projects[5].name}</h4>
					<p>{props.dataProjects.projects[5].descriptionShort}</p>
					<p>{props.dataProjects.projects[5].description[0]}</p>
					<p>{props.dataProjects.projects[5].description[1]}</p>
					<nav>
						<a href="{props.dataProjects.projects[5].linkWeb}" title="" target="_blank">
							<img src="" />
						</a>
						<a href="{props.dataProjects.projects[5].linkGithub}" title="" target="_blank">
							<img src="" />
						</a>
					</nav>
				</div>
			</section>
			<section>
				<div>
					<h4>{props.dataProjects.projects[6].name}</h4>
					<p>{props.dataProjects.projects[6].descriptionShort}</p>
					{/* <p>{props.dataProjects.projects[6].description}</p>
					<nav>
						<a href="{props.dataProjects.projects[6].linkWeb}" title="" target="_blank">
							<img src="" />
						</a>
						<a href="{props.dataProjects.projects[6].linkGithub}" title="" target="_blank">
							<img src="" />
						</a>
					</nav> */}
				</div>

				<div>
					<h4>{props.dataProjects.projects[7].name}</h4>
					<p>{props.dataProjects.projects[7].descriptionShort}</p>
					{/* <p>{props.dataProjects.projects[7].description}</p>
					<nav>
						<a href="{props.dataProjects.projects[7].linkWeb}" title="" target="_blank">
							<img src="" />
						</a>
						<a href="{props.dataProjects.projects[7].linkGithub}" title="" target="_blank">
							<img src="" />
						</a>
					</nav> */}
				</div>
			</section>
		</main>
	);
};

export default Projects;
