import "./List.scss";

function List(props) {
  const { small, medium, green, orang } = props;

  const createParamsClass = ({}) => {
    let colorClassName = "list__";
    if (green) colorClassName += "listGreen";
    if (orang) colorClassName += "listOrang";

    let sizeClassName = " list__";
    if (small) sizeClassName += "listSmall";
    if (medium) sizeClassName += "listMedium";

    return colorClassName + sizeClassName;
  };
  return (
    <div className={`list  ${createParamsClass(props)}`}>
      <div className="list-container">
        <div className="list__icon">
          <img src={props.src} alt="check" />
        </div>
        <div className="list__info">
          <p className="list-title">{props.title}</p>
          <div className="list-text">
            <p>
              {" "}
              {props.text} {props.span}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
