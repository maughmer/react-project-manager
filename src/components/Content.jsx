import { useContext } from "react";

import { ProjectContext } from "../store/projects-context";
import Welcome from "./Welcome";
import AddProject from "./AddProject";
import Project from "./Project";

export default function Content() {
  const { currentProject } = useContext(ProjectContext);

  let content;

  if (currentProject === undefined) {
    content = <Welcome />;
  } else if (currentProject === null) {
    content = <AddProject />;
  } else {
    content = <Project />;
  }

  return (
    <>
      {content}
    </>
  )
}
