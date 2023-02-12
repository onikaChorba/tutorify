import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

import "./FreeLessons.scss";

export const FreeLessons = () => {
  return (
    <section className="freeLessons">
      <article className=" freeLessonsArticle">
        <h3 className="freeLessonsArticle__title">Free courses online</h3>
        <p className="freeLessonsArticle__text">
          <ReactReadMoreReadLess
            charLimit={300}
            readMoreText={"Read more"}
            readLessText={"Read less"}
            readMoreClassName="read-more-less--more--about"
            readLessClassName="read-more-less--less--about"
          >
            No matter your level, our free English video courses provide the
            tools you need to advance your language skills. The videos have been
            created by Preply’s expert team, and beginners to advanced learners
            can benefit from these free online courses. Our handpicked selection
            of courses covers grammar, speaking, pronunciation, and business
            English from A1 to C2 levels and above, so if you’re looking for
            free English lessons online, look no further. No matter your level,
            our free English video courses provide the tools you need to advance
            your language skills. The videos have been created by Preply’s
            expert team, and beginners to advanced learners can benefit from
            these free online courses. Our handpicked selection of courses
            covers grammar, speaking, pronunciation, and business English from
            A1 to C2 levels and above, so if you’re looking for free English
            lessons online, look no further.
          </ReactReadMoreReadLess>
        </p>
      </article>
    </section>
  );
};
