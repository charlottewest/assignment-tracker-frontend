import React from 'react'
import { Link } from 'react-router-dom'

export default ({ users }) => {
  const lis = users.map(user =>
    <li key={user._id}>
      <Link to={`/users/${user._id}/assignments`}>
        {user.firstname} {user.lastname} - {user.email}: {user.assignments.length}
      </Link>
    </li>
  )

  return (
    <>
      <h1>All Students</h1>
      <ul>
        { lis }
      </ul>
    </>
  )
}
