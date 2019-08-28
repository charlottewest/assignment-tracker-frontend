import React from 'react'
// import { Link } from 'react-router-dom'

export default ({ users }) => {

  let assignmentsArray = []
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].assignments.length; j++) {
      if (users[i].assignments[j].grade) {
        const assignment = {
          firstname: users[i].firstname,
          lastname: users[i].lastname,
          email: users[i].email,
          assignment: users[i].assignments[j]
        }
        assignmentsArray.push(assignment)
      }
    }
  }

  const lis = assignmentsArray.map(assignment =>
      <li>
        {assignment.assignment.title} {assignment.assignment.grade}
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
