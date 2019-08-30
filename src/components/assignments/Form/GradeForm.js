import React from 'react'
import { withRouter } from 'react-router'

class GradeForm extends React.Component {
  constructor (props) {
    super(props)
    const { assignment = {} } = this.props
    const { grade = '', total = '' } = assignment
    this.state = { grade, total }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { assignment } = this.props

    if (assignment && assignment._id) {
      const body = Object.assign({}, this.state, { _id: assignment._id })
      this.props.onSubmit(body)
    } else {
      this.props.onSubmit(this.state)
    }
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
        <label htmlFor='grade'>Grade</label>
        <textarea
          className='form-control'
          id='grade'
          onChange={this.handleChange}
          name='grade'
          type='text'
          value={this.state.grade} />
        </div>
        <div className='form-group'>
        <label htmlFor='total'>Total</label>
        <textarea
          className='form-control'
          id='total'
          onChange={this.handleChange}
          name='total'
          type='text'
          value={this.state.total} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}

export default withRouter(GradeForm)
