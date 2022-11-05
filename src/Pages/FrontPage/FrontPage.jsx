import { Hero } from "./sections/Hero/Hero";
import { Learn } from "./sections/Learn/Learn";
import { Purchase } from "./sections/Purchase/Purchase";
import { WillGet } from './sections/WillGet/WillGet';
import { Works } from "./sections/Works/Works";
import { Edu } from "./sections/Edu/Edu";
import { GetLessons } from "./sections/GetLessons/GetLessons";
function FrontPage() {
  return (
    <menu>
      <Hero />
      <Learn />
      <Purchase/>
      <WillGet/>
      <Works/>
      <Edu/>
      <GetLessons/>
    </menu>
  );
}

export default FrontPage;
