import "./List.scss";
import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

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
          <img src={props.src} alt="check" className="listIcon" />
        </div>
        <div className="list__info">
          <p className="list-title">{props.title}</p>
          <div className="list-text">
            <ReactReadMoreReadLess
              charLimit={70}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {props.text}
            </ReactReadMoreReadLess>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
