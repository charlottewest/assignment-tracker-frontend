import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// Helpers
import * as auth from '../api/auth'
import * as token from '../helpers/local-storage'

// Components
import Header from './shared/Header'
import Navigation from './shared/Navigation/Navigation'
import Login from './auth/Login.Form'
import Signup from './auth/Signup.Form'
import UsersContainer from './users/Container'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUserId: null,
      isAdmin: false,
      loading: true
    }

    this.loginUser = this.loginUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.signupUser = this.signupUser.bind(this)
  }

  async componentDidMount () {
    if (token.getToken()) {
      const { user } = await auth.profile();
      this.setState({ currentUserId: user._id, isAdmin: user.admin, loading: false });
    } else {
      this.setState({ loading: false })
    }
  }

  async loginUser (user) {
    const response = await auth.login(user)
    await token.setToken(response)

    const profile = await auth.profile()
    this.setState({ currentUserId: profile.user._id })
    this.setState({ isAdmin: profile.user.admin })
  }

  logoutUser () {
    token.clearToken()
    this.setState({ currentUserId: null })
    this.setState({ isAdmin: false })
  }

  async signupUser (user) {
    const response = await auth.signup(user)
    await token.setToken(response)

    const profile = await auth.profile()
    this.setState({ currentUserId: profile.user._id })
    this.setState({ isAdmin: profile.user.admin })
  }

  render () {
    const { currentUserId, isAdmin, loading } = this.state
    if (loading) return <span />

    return (
      <Router>
        <Header />
        <Navigation
          currentUserId={currentUserId}
          isAdmin={isAdmin}
          logoutUser={this.logoutUser} />
        <Switch>
          <Route path='/login' exact component={() => {
            return currentUserId
              ? <Redirect to='/users' />
              : <Login onSubmit={this.loginUser} />
          }} />
          <Route path='/signup' exact component={() => {
            return currentUserId
              ? <Redirect to='/users' />
              : <Signup onSubmit={this.signupUser} />
          }} />

          <Route path='/users' render={() => {
            return currentUserId
              ? <UsersContainer currentUserId={currentUserId} isAdmin={isAdmin} />
              : <Redirect to='/login' />
          }} />

          <Redirect to='/login' />
        </Switch>
      </Router>
    )
  }
}

export default App
