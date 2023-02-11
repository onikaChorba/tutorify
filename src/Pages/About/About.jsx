import { HelpFind } from "./sections/HelpFind/HelpFind";
import { Hero } from "./sections/Hero/Hero";
import { ReviewBlocks } from "./sections/ReviewBlocks/ReviewBlocks";

function About() {
  return (
    <menu>
      <Hero />
      <ReviewBlocks />
      <HelpFind />
    </menu>
  );
}
export default About;
