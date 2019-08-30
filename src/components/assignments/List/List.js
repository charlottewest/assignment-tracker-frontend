import React from 'react'

import Actions from './List.Actions'

export default ({ currentUserId, isAdmin, destroyAssignment, user }) => {
  const assignments = user.assignments.map(assignment => (
    <div key={assignment._id} className='card'>
      <div className='card-body'>
        <p className='card-text'>{ assignment.title }</p>
        <blockquote className='blockquote mb-0'>
          <footer className='blockquote-footer'>{ assignment.link }</footer>
        </blockquote>
        <p>Grade: { assignment.grade }</p>
      </div>
      <Actions
        currentUserId={currentUserId}
        isAdmin={isAdmin}
        destroyAssignment={destroyAssignment}
        assignment={assignment}
        user={user} />
    </div>
  ))

  return (
    <>
      <h1 className='mb-4'>{user.firstname} {user.lastname}'s Assignments</h1>
      { assignments }
    </>
  )
}
