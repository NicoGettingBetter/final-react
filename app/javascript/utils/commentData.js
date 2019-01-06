const commentData = (comment) => {
  var data = new window.FormData()

  data.append('file', comment.file)
  data.append('content', comment.content)
  data.append('task_id', comment.taskId)

  return data
}

export default commentData
