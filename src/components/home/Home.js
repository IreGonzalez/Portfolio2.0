// STYLESHEET
import "../../styles/core/_variables.scss";
import "./_home.scss";

// COMPONENTS
import NotFound from "../shared/notFound/NotFound";

const Home = ({data}) => {
	if (!data) {
		return <NotFound />;
	}
	const dataText = data.description;

	return (
		<main>
			<section>
				{dataText.map((paragraph, i) =>(
					<p key={i}>
					{paragraph}
					</p>
				))}
			</section>
		</main>
	);
	
};

export default Home;
