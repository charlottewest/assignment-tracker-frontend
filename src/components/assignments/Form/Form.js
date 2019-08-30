import React from 'react'
import { withRouter } from 'react-router'

class Form extends React.Component {
  constructor (props) {
    super(props)
    const { assignment = {} } = this.props
    const { title = '', link = '', description = '', grade = '', total = '' } = assignment
    this.state = { title, link, description, grade, total }

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
    // const currPage = this.props.location.pathname
    // let formContent
    // if ((currPage === '/users/assignments/graded') || (currPage === '/users/assignments/ungraded')) {
    //   formContent = ['grade', 'total']
    // } else {
    //   formContent = ['title', 'link', 'description']
    // }
    //
    // const fieldContent = formContent.map(content => {
    //   console.log(content)
    //
    //   return (
    //     <div className='form-group'>
    //       <label htmlFor={content}>{content}</label>
    //       <input
    //         className='form-control'
    //         id={content}
    //         onChange={this.handleChange}
    //         name={content}
    //         type='text'
    //         value={this.state.title} />
    //     </div>
    //   )
    // })
    const currPage = this.props.location.pathname
    let formContent
    if ((currPage === '/users/assignments/graded') || (currPage === '/users/assignments/ungraded')) {
      formContent = (
        <div>
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
        </div>
      )
    } else {
      formContent = (
        <div>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            className='form-control'
            id='title'
            onChange={this.handleChange}
            name='title'
            type='text'
            value={this.state.title} />
        </div>
        <div className='form-group'>
          <label htmlFor='link'>Link</label>
          <input
            className='form-control'
            id='link'
            onChange={this.handleChange}
            name='link'
            type='text'
            value={this.state.link} />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            className='form-control'
            id='description'
            onChange={this.handleChange}
            name='description'
            type='text'
            value={this.state.description} />
        </div>
        </div>
      )
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {formContent}
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}

export default withRouter(Form)
