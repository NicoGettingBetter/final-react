import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

import forms from './forms'
import me, { initialState as meInitialState } from './me'
import tasks, { initialState as tasksInitialState } from './tasks'
import projects, { initialState as projectsInitialState } from './projects'
import entities, { initialState as entitiesInitialState } from './entities'
import comments, { initialState as commentsInitialState } from './comments'
import authHeaders, { initialState as authHeadersInitialState } from './authHeaders'

export default {
  me,
  forms,
  tasks,
  projects,
  entities,
  comments,
  authHeaders,
  railsContext: railsContextReducer
};

export const initialStates = {
  me: meInitialState,
  tasks: tasksInitialState,
  projects: projectsInitialState,
  entities: entitiesInitialState,
  comments: commentsInitialState,
  authHeaders: authHeadersInitialState
};
