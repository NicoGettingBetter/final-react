import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadComments } from 'actions/comments'
import { getComments, getCommentsLoaded } from 'selectors/comments'
import CommentsComponent from 'comments/Comments/CommentsComponent.jsx'

class CommentsContainer extends Component {
  componentWillMount () {
    this.props.loadComments()
  }

  render () {
    return <CommentsComponent {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  comments: getComments(state),
  commentsLoaded: getCommentsLoaded(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadComments: () => dispatch(loadComments(ownProps.task.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
