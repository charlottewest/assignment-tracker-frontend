import React from 'react'
import { withRouter } from 'react-router'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
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

  // handleChange (event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //
  //   this.setState({
  //     formControls: {
  //       ...this.state.formControls,
  //       [name]: value
  //     }
  //   });
  //
  // }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
      .then(() => this.props.history.push('/users'))
  }

  render () {
    const signup = this.props.location.pathname === '/signup'
    // let signUpControls;
    // if (this.props.location.pathname === '/signup') {
    //   signUpControls = (
    //     <div>
    //       <div className='form-group'>
    //         <label htmlFor='username'>First Name</label>
    //         <input
    //           className='form-control'
    //           id='firstname'
    //           onChange={this.handleChange}
    //           name='username'
    //           type='text'
    //           value={this.state.firstName} />
    //       </div>
    //       <div className='form-group'>
    //         <label htmlFor='password'>Last Name</label>
    //         <input
    //           className='form-control'
    //           id='lastname'
    //           onChange={this.handleChange}
    //           name='username'
    //           type='text'
    //           value={this.state.lastName} />
    //       </div>
    //     </div>
    //   )
    // }

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
      </form>
    )
  }
}

export default withRouter(Form)
