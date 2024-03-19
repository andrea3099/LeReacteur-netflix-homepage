import "./App.css";
import data from "./assets/movies_rnexgr.json";
import logoNetflix from "./assets/img/logo-netflix.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="container-logo">
          <img src={logoNetflix} alt="logo-netflix" />
        </div>
        {data.map((moovies) => {
          return (
            <div className="container-category-image">
              <div className="container-category">{moovies.category}</div>
              <div className="container-img">
                {moovies.images.map((affiches) => {
                  return (
                    <div className="img">
                      <img src={affiches} alt="affiche-film" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
