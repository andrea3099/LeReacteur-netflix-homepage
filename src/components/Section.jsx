const Section = (props) => {
  return (
    <div className="container-category-image">
      <div className="container-category">{props.title}</div>
      <div className="container-img">
        <div className="img">
          <img src={props.list} alt="affiche-film" />
        </div>
      </div>
    </div>
  );
};
export default Section;
