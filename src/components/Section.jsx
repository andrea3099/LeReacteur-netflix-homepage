import logoNetflix from "../assets/img/logo-netflix.png";

const Section = (props) => {
  return (
    <div className="container">
      <div className="container-logo">
        <img src={logoNetflix} alt="logo-netflix" />
      </div>
      {props.data.map((moovies) => {
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
  );
};
export default Section;
