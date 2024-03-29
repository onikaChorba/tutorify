import "./Button.scss";

function Button(props) {
  const {
    orange,
    green,
    whiteOrange,
    whiteGreen,
    children,
    small,
    big,
    medium,
    search,
  } = props;

  const createParamsClass = () => {
    let colorClassName = "button__";
    if (green) colorClassName += "green";
    if (orange) colorClassName += "orange";
    if (whiteOrange) colorClassName += "white-orange";
    if (whiteGreen) colorClassName += "white-green";

    let sizeClassName = " button__size_";
    if (small) sizeClassName += "xs";
    if (medium) sizeClassName += "s";
    if (big) sizeClassName += "m";
    if (search) sizeClassName += "search";

    return colorClassName + sizeClassName;
  };

  return <div className={`button ${createParamsClass(props)}`}>{children}</div>;
}

export default Button;
