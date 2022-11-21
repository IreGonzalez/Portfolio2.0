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
	console.log(dataText);
	const htmlHome = dataText.map((paragraph)=>{
		return (
			<p>
				{paragraph}

			</p>
	);
	})

	return (
		<main>
			<section>
				{htmlHome}
			</section>
		</main>
	);
	
};

export default Home;
