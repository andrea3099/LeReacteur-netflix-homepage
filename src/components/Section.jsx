const Section = (props) => {
  return (
    <div className="container-category-image">
      <div className="container-category">{props.moovies.category}</div>
      <div className="container-img">
        {props.moovies.images.map((affiches) => {
          return (
            <div key={affiches} className="img">
              <img src={affiches} alt="affiche-film" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Section;
