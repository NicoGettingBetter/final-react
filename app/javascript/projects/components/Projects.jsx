import React from 'react'
import classNames from 'classnames'
import { Alert, Col } from 'react-bootstrap'

import CreateNewProject from 'projects/containers/CreateNewProject.jsx'
import Project from 'projects/containers/Project.jsx'

const Projects = ({ projects, projectsLoaded }) =>
  <main>
    <div className="row">
      <Col sm={8} smOffset={2}>
        <h2>Projects</h2>
        {projectsLoaded && projects.map((project, i) =>
          <Project key={i} project={project}>
          </Project>
        )}
        <CreateNewProject />
      </Col>
    </div>
  </main>

export default Projects
