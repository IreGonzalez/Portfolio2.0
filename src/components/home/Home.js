// COMPONENTS
import NotFound from "../shared/notFound/NotFound";
import Rrss from "../shared/rrss/Rrss";

const Home = ({ data }) => {
  if (!data) {
    return <NotFound />;
  }

  return (
    <main className="main__home">
      <section className="main__home--container">
        <div className="main__home--title">
          <h1>Irene González Pinilla</h1>
          <h2>Front-end Developer</h2>
          <Rrss></Rrss>
        </div>
        <div className="main__home--text">
          <div className="container">
            <p>{data.intro_history_text_bio_1}</p>
            <p>{data.intro_history_text_bio_2}</p>
            <p>{data.intro_history_text_bio_3}</p>
            <p>{data.intro_history_text_bio_4}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
