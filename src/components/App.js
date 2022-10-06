import "../";
import "../styles/pages/App.scss";
// HOK
import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOOKS
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

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
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/bio" element={<Bio />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>

			<Footer></Footer>
		</div>
	);
}

export default App;
