import icon from "@/assets/img/students.png";
import "./ReviewBlocks.scss";
export const ReviewBlocks = () => {
  const dataReviewBlock = [
    { number: "500 000", info: "students" },
    { number: "70 000", info: "repetitors" },
    { number: "6", info: "countries" },
    {
      number: "2200",
      info: "sities and towns",
    },
    { number: "200", info: "subjects" },
  ];
  return (
    <div className="reviewBlocks">
      {dataReviewBlock.map((block, index) => (
        <section key={index}>
          <div className="reviewBlock">
            <div className="reviewBlock__info">
              <div className="reviewBlock__number">{block.number} +</div>
              <div className="reviewBlock__text">{block.info}</div>
            </div>
            <img src={icon} alt="icon" className="reviewBlock__icon" />
          </div>
        </section>
      ))}
    </div>
  );
};

{
  /* <ReviewBlock
            key={block.toString()}
            number={block.number}
            text={block.text}
            src={block.src}
          /> */
}
