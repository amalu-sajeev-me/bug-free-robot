import "./section.css";

function Section(props) {
  return (
    <section className={props.css}>
      <div className="heading">{props.h}</div>
      <div className="content">
      {props.children}
      </div>
    </section>
  );
}

export default Section;
