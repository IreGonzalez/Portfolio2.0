// COMPONENTS
import NotFound from "../shared/notFound/NotFound";
import ProjectFile from "./ProjectFile";

// STYLESHEET
import "./_projects.scss";

const Projects = ({ data }) => {
  if (!data) {
    return <NotFound />;
  }
  return (
    <main className="main__projects">
      <h2 className="main__projects--title">Proyectos</h2>
      <section className="main__projects--section intro">
        <p>{data.project_introduction_text_1}</p>
      </section>
      <section className="main__projects--section container">
        // TODO: se pueden crear de manera dinámica usando el número de proyecto
        a partir de un Array que modifique manualmente eligiendo los proyectos
        que quiero mostrar. De hecho debería crear un componente y que se
        renderice según el servicio de entrada de datos
        <div className="project--container">
          <img src="" alt="" className="project--img" />
          <h3 className="project--title">{data.first_project_web_4_title}</h3>
          <h4 className="project--subtitle">
            {data.first_project_web_4_short_description}
          </h4>
          <p className="project--content">{data.first_project_web_4_text_1}</p>
          <p className="project--content">{data.first_project_web_4_text_2}</p>
          <p className="project--content">{data.first_project_web_4_text_3}</p>
          <a
            href={data.first_project_web_4_link_code}
            title={data.first_project_web_4_link_code_text}
            target="_blank"
            className="project--link code"
          >
            {data.first_project_web_4_link_code_text}
          </a>
          <a
            href={data.first_project_web_4_link_web}
            title={data.first_project_web_4_link_web_text}
            target="_blank"
            className="project--link web"
          >
            {data.first_project_web_4_link_web_text}
          </a>
        </div>
        {/* <div>
          <img src="" alt="" />
          <h3>{data.first_project_web_5_title}</h3>
          <h4>{data.first_project_web_5_short_description}</h4>
          <p>{data.first_project_web_5_text_1}</p>
          <p>{data.first_project_web_5_text_2}</p>
          <p>{data.first_project_web_5_text_3}</p>
          <a
            href={data.first_project_web_5_link_code}
            title={data.first_project_web_5_link_code_text}
            target="_blank"
          >
            {data.first_project_web_5_link_code_text}
          </a>
          <a
            href={data.first_project_web_5_link_web}
            title={data.first_project_web_5_link_web_text}
            target="_blank"
          >
            {data.first_project_web_5_link_web_text}
          </a>
        </div> */}
      </section>
    </main>
  );
};

export default Projects;
