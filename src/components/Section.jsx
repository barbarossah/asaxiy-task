import Button from "../ui/Button";

/* eslint-disable react/prop-types */
function Section(props) {
  return (
    <section id={props.id} className={`section ${props.classname}`}>
      <div className="container">
        <div className="section__wrapper">
          <img src={props.image} alt="image" />
          <div>
            {props.children}
            {props.button && <Button>{props.button}</Button>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
