/* eslint-disable react/prop-types */
function Section(props) {
  return (
    <section className={`section ${props.classname}`}>
      <div className="container">
        <div className="section__wrapper">
          <img src={props.image} alt="image" />
          <div>{props.children}</div>
        </div>
      </div>
    </section>
  );
}

export default Section;
