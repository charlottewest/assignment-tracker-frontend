import React from 'react'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

// Helpers
import * as assignments from '../../api/assignments'

// Components
import List from './List/List'
import EditForm from './Form/Edit.Form'
import NewForm from './Form/New.Form'

import GradedAssignments from './List/List.GradedAssignments'
import UngradedAssignments from './List/List.UngradedAssignments'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.createAssignment = this.createAssignment.bind(this)
    this.destroyAssignment = this.destroyAssignment.bind(this)
    this.editAssignment = this.editAssignment.bind(this)
  }

  async createAssignment (assignment) {
    const { currentUserId, history, refreshUsers } = this.props

    await assignments.createAssignment({ user: { _id: currentUserId }, assignment })
    await refreshUsers()

    history.push(`/users/${currentUserId}/assignments`)
  }

  async destroyAssignment (assignment) {
    const { currentUserId, history, refreshUsers } = this.props

    await assignments.destroyAssignment({ user: { _id: currentUserId }, assignment })
    await refreshUsers()

    history.push(`/users/${currentUserId}/assignments`)
  }

  async editAssignment (assignment) {
    const { currentUserId, history, refreshUsers } = this.props

    await assignments.updateAssignment({ user: { _id: currentUserId }, assignment })
    await refreshUsers()

    history.push(`/users/${currentUserId}/assignments`)
  }

  async editGrade (assignment) {
    const { currentUserId, history, refreshUsers } = this.props

    await assignments.updateGrade({ user: { _id: currentUserId }, assignment })
    await refreshUsers()

    history.push(`/users/${currentUserId}/assignments`)
  }

  render () {
    const { currentUserId, isAdmin, users } = this.props

    return (
      <>
        <Route path='/users/:userId/assignments' exact component={({ match }) => {
          const user = users.find(user => user._id === match.params.userId)
          return (
            <List
              currentUserId={currentUserId}
              isAdmin={isAdmin}
              destroyAssignment={this.destroyAssignment}
              user={user} />
          )
        }} />

        <Route path='/users/:userId/assignments/graded/edit' exact component={() => {
          return <GradedAssignments users={users} onSubmit={this.editGrade}/>
        }} />
        <Route path='/users/:userId/assignments/ungraded/edit' exact component={() => {
          return <UngradedAssignments users={users} onSubmit={this.editGrade}/>
        }} />

        <Route path='/users/:userId/assignments/new' exact component={() => {
          return <NewForm onSubmit={this.createAssignment} />
        }} />
        <Route path='/users/:userId/assignments/:assignmentId/edit' exact component={({ match }) => {
          const user = users.find(user => user._id === match.params.userId)
          const assignment = user.assignments.find(user => user._id === match.params.assignmentId)
          return <EditForm onSubmit={this.editAssignment} assignment={assignment} />
        }} />

      </>

    )
  }
}

export default withRouter(Container)
