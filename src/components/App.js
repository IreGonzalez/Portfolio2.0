import "../styles/App.scss";

// COMPONENTS
import Header from "./header.js";
import Footer from "./footer.js";
import Home from "./home.js";
import Projects from "./projects";
import Bio from "./biography";
import Contact from "./contact";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Home></Home>
			<Projects></Projects>
			<Bio></Bio>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
}

export default App;
