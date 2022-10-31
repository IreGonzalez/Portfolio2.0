import "../";
import "../styles/pages/App.scss";

// HOOKS
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// ARCHIVOS
import Data from "../content/data.json";

// COMPONENTS
import Header from "./header.js";
import Footer from "./footer.js";
import Home from "./home.js";
import Projects from "./projects";
import Bio from "./biography";
import Contact from "./contact";
import NotFound from "./notFound";
import Curriculum from "./curriculum";

function App() {
	const dataHome = Data[0];
	const dataBio = Data[1];
	const dataProjects = Data[2];
	const dataCV = Data[3];
	console.log(Data);
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route index path="/" element={<Home dataHome={dataHome} />} />
				<Route path="/bio" element={<Bio dataBio={dataBio} />} />
				<Route path="/projects" element={<Projects dataProjects={dataProjects} />} />
				<Route path="/curriculum" element={<Curriculum dataCV={dataCV} />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
