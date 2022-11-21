// STYLESHEET
import "./_app.scss";
import "../styles/Main.scss";

// HOOKS
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// FILES
import Data from "../content/data.json";

// COMPONENTS
import Header from "./shared/header/Header.js";
import Footer from "./shared/footer/Footer.js";
import Home from "./home/Home.js";
import Projects from "./projects/Projects";
import Bio from "./bio/Bio";
import Contact from "./contact/Contact";
import NotFound from "./shared/notFound/NotFound";
import Curriculum from "./curriculum/Curriculum";

function App() {
	// const dataHome = Data[0];
	// const dataBio = Data[1];
	// const dataProjects = Data[2];
	// const dataCV = Data[3];
	// const [dataHome, dataBio, dataProjects, dataCV] = Data
	const{intro, bio, projects, cv} = Data
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route index path="/" element={<Home data={intro} />} />
				<Route path="/bio" element={<Bio data={bio} />} />
				<Route path="/projects" element={<Projects data={projects} />} />
				<Route path="/curriculum" element={<Curriculum data={cv} />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
