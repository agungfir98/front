import Intro from "./main_component/intro";
import Project from "./main_component/project";
import Skills from "./main_component/skills";

export default function Main() {
  return (
    <div className="container mt-3">
      <Intro />
      <Skills />
      <Project />
    </div>
  );
}
