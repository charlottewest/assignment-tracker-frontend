import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ListActions = ({ currentUserId, isAdmin, destroyAssignment, assignment, user }) => {
  let editOptions

  if (currentUserId === user._id) {
    editOptions = (
      <>
        <Link className='btn btn-link' to={`/users/${user._id}/assignments/${assignment._id}/edit`}>Edit Assignment</Link>
        <button
          className='btn btn-link text-danger'
          onClick={() => destroyAssignment(assignment)}>
          Delete Assignment
        </button>
      </>
    )
  }
  return (
    <div className='card-footer text-muted d-flex justify-content-around'>
      {editOptions}

      <span className='btn btn-link text-muted' disabled>Created {moment(assignment.created_at).fromNow()}</span>
    </div>
  )
}

export default withRouter(ListActions)
