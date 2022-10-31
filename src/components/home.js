// STYLESHEET
import "../styles/core/_variables.scss";

const Home = (props) => {
	return (
		<main>
				<section>
					{props.dataHome.description}
				</section>
		</main>
	);
};

export default Home;
