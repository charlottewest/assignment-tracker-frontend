import React from 'react'
import { Link } from 'react-router-dom'
import EditGradeForm from '../Form/EditGrade.Form'

export default ({ users, onSubmit }) => {
  let assignmentsArray = []
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].assignments.length; j++) {
      if (users[i].assignments[j].grade) {
        const user = {
          firstname: users[i].firstname,
          lastname: users[i].lastname,
          email: users[i].email,
          assignment: users[i].assignments[j]
        }
        assignmentsArray.push(user)
      }
    }
  }

  const lis = assignmentsArray.map(user =>
      <li key={user.assignment._id}>
        Student:
        <Link to={`/users/${user._id}/assignments`}>
          {user.email}
        </Link>
        Assignment: {user.assignment.title} Grade: {user.assignment.grade}
        <EditGradeForm onSubmit={onSubmit} assignment={user.assignment} />
      </li>
  )

  return (
    <>
      <h1>Graded Assignments</h1>
      <ul>
        { lis }
      </ul>
    </>
  )
}
