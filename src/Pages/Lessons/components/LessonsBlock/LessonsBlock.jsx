import "@/assets/img/online-lesson.png";
import arrow from "@/assets/img/arrow.png";
import "./LessonsBlock.scss";
export const LessonsBlock = () => {
  const lessonsBlock = [
    {
      src: "./img/online-lesson.png",
      title: "Grammar courses",
      text: "Learn how to apply the rules and structure of language",
    },
    {
      src: "./img/lesson.png",
      title: "Grammar courses",
      text: "Learn how to apply the rules and structure of language",
    },
    {
      src: "./img/teacher.png",
      title: "Grammar courses",
      text: "Learn how to apply the rules and structure of language",
    },
    {
      src: "./img/online-lesson.png",
      title: "Grammar courses",
      text: "Learn how to apply the rules and structure of language",
    },
  ];
  return (
    <section className="lessonsBlockB">
      {lessonsBlock.map((lesson, index) => (
        <section className="lessonsBlock" key={index}>
          <img className="lessonsBlock__img" alt="lessons" src={lesson.src} />
          <div className="lessonsBlock__title">{lesson.title}</div>
          <div className="lessonsBlock__text">
            {lesson.text}
            <span className="lessonsBlock__arrow">
              <img src={arrow} alt="arrow" />
            </span>
          </div>
        </section>
      ))}
    </section>
  );
};
