// COMPONENTS
import NotFound from "../shared/notFound/NotFound";
import ProjectFile from "./ProjectFile";

// STYLESHEET
import "./_projects.scss";
// TODO: se pueden crear de manera dinámica usando el número de proyecto
// a partir de un Array que modifique manualmente eligiendo los proyectos
// que quiero mostrar. De hecho debería crear un componente y que se
// renderice según el servicio de entrada de datos

const Projects = ({ data }) => {
  if (!data) {
    return <NotFound />;
  }
  return (
    <main className="main__projects">
      <section className="main__projects--section container">
        <div className="project__container">
          <div className="project__img--container">
            <img src="" alt="" className="project--img" />
          </div>
          <div className="project__text--container">
            <h3 className="project--title">{data.first_project_web_4_title}</h3>
            <h4 className="project--subtitle">
              {data.first_project_web_4_short_description}
            </h4>
            <p className="project--content">
              {data.first_project_web_4_text_1}
            </p>
            <p className="project--content">
              {data.first_project_web_4_text_2}
            </p>
            <p className="project--content">
              {data.first_project_web_4_text_3}
            </p>
            <p className="project--content">
              {data.first_project_web_4_text_4}
            </p>
          </div>
          <div className="project__link--container">
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
        </div>
        <div className="project__container">
          <div className="project__img--container">
            <img src="" alt="" className="project--img" />
          </div>
          <div className="project__text--container">
            <h3 className="project--title">{data.first_project_web_5_title}</h3>
            <h4 className="project--subtitle">
              {data.first_project_web_5_short_description}
            </h4>
            <p className="project--content">
              {data.first_project_web_5_text_1}
            </p>
            <p className="project--content">
              {data.first_project_web_5_text_2}
            </p>
            <p className="project--content">
              {data.first_project_web_5_text_3}
            </p>
          </div>
          <div className="project__link--container">
            <a
              href={data.first_project_web_5_link_code}
              title={data.first_project_web_5_link_code_text}
              target="_blank"
              className="project--link code"
            >
              {data.first_project_web_5_link_code_text}
            </a>
            <a
              href={data.first_project_web_5_link_web}
              title={data.first_project_web_5_link_web_text}
              target="_blank"
              className="project--link web"
            >
              {data.first_project_web_5_link_web_text}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
