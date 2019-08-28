import React from 'react'
import { Route } from 'react-router-dom'

// Helpers
import * as users from '../../api/users'

// Components
import List from './List/List'
import GradedAssignments from './List/List.GradedAssignments'
import UngradedAssignments from './List/List.UngradedAssignments'
import AssignmentsContainer from '../assignments/Container'

export default class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      loading: true
    }

    this.refreshUsers = this.refreshUsers.bind(this)
  }

  async componentDidMount () {
    this.refreshUsers().then(() => this.setState({ loading: false }))
  }

  // Internal
  async refreshUsers () {
    const { response } = await users.fetchUsers()
    this.setState({ users: response })
  }

  render () {
    const { currentUserId, isAdmin } = this.props
    const { users, loading } = this.state
    if (loading) return <span/>
    console.log(users)
    return (
      <main className='container'>
        <Route path='/users' exact component={() => <List users={users} />} />
        <Route path='/users/assignments/graded' exact component={() => <GradedAssignments users={users} />} />
        <Route path='/users/assignments/ungraded' exact component={() => <UngradedAssignments users={users} />} />
        <AssignmentsContainer
          currentUserId={currentUserId}
          isAdmin={isAdmin}
          refreshUsers={this.refreshUsers}
          users={users} />
      </main>
    )
  }
}
