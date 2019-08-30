import React from 'react'
import GradeForm from './GradeForm'

export default ({ onSubmit, assignment }) => (
  <section className='container'>
    <h1>Edit Grade</h1>
    <hr />
    <GradeForm assignment={assignment} onSubmit={onSubmit} />
  </section>
)
