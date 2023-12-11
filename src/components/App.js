// STYLESHEET
import "../styles/Main.scss";

// HOOKS
import { Routes, Route } from "react-router-dom";

// FILES
import Data from "../content/data.json";

// COMPONENTS
import Header from "./shared/header/Header.js";
import Home from "./home/Home.js";
import Projects from "./projects/Projects";
import NotFound from "./shared/notFound/NotFound";

function App() {
	return (
		<div className="App">
			  <Header></Header>
      <Routes>
        <Route index path="/" element={<Home data={Data} />} />
        <Route path="/projects" element={<Projects data={Data} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
		</div>
	);
}

export default App;
