import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

import "./ProfileInfoAbout.scss";

export const ProfileInfoAbout = ({ person }) => {
  return (
    <section className="profileInfoAbout">
      <article className=" profileInfoAboutArticle">
        <h3 className="profileInfoAboutArticle__title">About Me</h3>
        <p className="profileInfoAboutArticle__text">
          <ReactReadMoreReadLess
            charLimit={100}
            readMoreText={"Read more"}
            readLessText={"Read less"}
            readMoreClassName="read-more-less--more--about"
            readLessClassName="read-more-less--less--about"
          >
            {person.about}
          </ReactReadMoreReadLess>
        </p>
      </article>
    </section>
  );
};
