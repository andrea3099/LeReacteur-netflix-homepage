import "./App.css";
import data from "./assets/movies_rnexgr.json";
import Section from "./components/Section";
import logoNetflix from "./assets/img/logo-netflix.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="container-logo">
          <img src={logoNetflix} alt="logo-netflix" />
        </div>
        {data.map((moovies) => {
          return <Section moovies={moovies} key={moovies.category} />;
        })}
      </div>
    </>
  );
}

export default App;
