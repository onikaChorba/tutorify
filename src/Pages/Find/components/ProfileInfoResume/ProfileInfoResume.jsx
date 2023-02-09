import { ProfileInfoNav } from "../ProfileInfoNav/ProfileInfoNav";
import "./ProfileInfoResume.scss";

export const ProfileInfoResume = () => {
  return (
    <section>
      <div className="profileInfoResume">
        <article className="profileInfoResumeArticle">
          <h5 className="profileInfoResumeArticle__title">Resume</h5>
          <ProfileInfoNav />
          <div className="profileInfoResumeArticle__text">
            <p className="resumeText">Sunderland BSc Hons</p>
            <p className="resumeText">1993-1996</p>
          </div>
        </article>
      </div>
    </section>
  );
};
