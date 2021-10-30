import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projects";
import Masonry from "react-masonry-css";
import { Container } from "@mui/material";

import "../App.css";

const breakpoints = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

function Projects() {
    return(
        <div className="container-wrapper">
        <Container>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {projects.map((project) => (
              <ProjectCard project={project} />
            ))}
          </Masonry>
        </Container>
      </div>
    );
}

export default Projects;