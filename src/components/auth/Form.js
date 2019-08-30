import React from 'react'
import { withRouter } from 'react-router'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: '',
      username: '',
      password: '',
      firstName: '',
      lastName: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    this.setState({error: ''})
    e.preventDefault()
    this.props.onSubmit(this.state)
      .then(() => this.props.history.push('/users'))
      // I really wish this worked so I'm not deleting it
      // .then(response => {
      //   if (response && response.status !== 200) {
      //     this.setState({error: response.message})
      //   } else {
      //     this.props.history.push('/users')
      //   }
      // })
  }

  render () {
    let error;
    if (this.state.error) {
      error = <div>{this.state.error}</div>;
    }

    const signup = this.props.location.pathname === '/signup'

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Email</label>
          <input
            className='form-control'
            id='email'
            onChange={this.handleChange}
            name='email'
            type='text'
            value={this.state.email} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            className='form-control'
            id='password'
            onChange={this.handleChange}
            name='password'
            type='password'
            value={this.state.password} />
        </div>
        {
          signup
          ? (
              <div>
                <div className='form-group'>
                  <label htmlFor='username'>First Name</label>
                  <input
                    className='form-control'
                    id='firstname'
                    onChange={this.handleChange}
                    name='username'
                    type='text'
                    value={this.state.firstName} />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Last Name</label>
                  <input
                    className='form-control'
                    id='lastname'
                    onChange={this.handleChange}
                    name='username'
                    type='text'
                    value={this.state.lastName} />
                </div>
              </div>
            )
          : null
        }
        <button type='submit' className='btn btn-primary'>Submit</button>
        {error}
      </form>
    )
  }
}

export default withRouter(Form)
