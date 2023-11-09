// COMPONENTS
import NotFound from "../shared/notFound/NotFound";
import Rrss from "../shared/rrss/Rrss";

const Home = ({ data }) => {
  if (!data) {
    return <NotFound />;
  }
  const dataText = data.description;

  return (
    <main className="main__home">
      <section>
        <h1>Irene González Pinilla</h1>
        <h2>Front-end Developer</h2>
        <Rrss></Rrss>
        <div>
          <p>{data.intro_history_text_bio_1}</p>
          <p>{data.intro_history_text_bio_2}</p>
          <p>{data.intro_history_text_bio_3}</p>
          <p>{data.intro_history_text_bio_4}</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
