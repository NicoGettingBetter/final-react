import { connect } from 'react-redux'
import React, { Component } from 'react'

import { loadProjects } from 'actions/projects'
import { getProjects, getProjectsLoaded } from 'selectors/projects'

import Projects from 'projects/components/Projects.jsx'

class ProjectsContainer extends Component {
  componentWillMount () {
    this.props.loadProjects()
  }

  render () {
    return <Projects {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    projects: getProjects(state),
    projectsLoaded: getProjectsLoaded(state)
  }
}

const mapDispatchToProps = {
  loadProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)
