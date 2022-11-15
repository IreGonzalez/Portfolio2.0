// STYLESHEET
import "../styles/core/_variables.scss";
// COMPONENTS
import NotFound from "./notFound";

const Home = (props) => {
	const dataText = props.dataHome.description;
	console.log(dataText);
	const htmlHome = dataText.map((paragraph)=>{
		return (
			<p>
				{paragraph}

			</p>
	);
	})

	if (dataText.length === 0){
		return (
			<NotFound/>
		)
	}

	return (
		<main>
			<section>
				{htmlHome}
			</section>
		</main>
	);
	
};

export default Home;
