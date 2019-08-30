import React from 'react'

import EditGradeForm from '../Form/EditGrade.Form'

export default ({ users, onSubmit }) => {

  let assignmentsArray = []
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].assignments.length; j++) {
      if (!users[i].assignments[j].grade) {
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
        Assignment: {assignment.assignment.title} Grade: {assignment.assignment.grade}
        <EditGradeForm onSubmit={onSubmit} assignment={assignment.assignment} />
      </li>
  )

  return (
    <>
      <h1>Ungraded Assignments</h1>
      <ul>
        { lis }
      </ul>
    </>
  )
}
