import React from 'react'
import { withRouter } from 'react-router'

import AuthenticatedLinks from './Navigation.AuthenticatedLinks'
import UnauthenticatedLinks from './Navigation.UnauthenticatedLinks'
import AuthenticatedAdminLinks from './Navigation.AuthenticatedAdminLinks'

const Navigation = ({ currentUserId, isAdmin, logoutUser }) => {
  let navigationLinks
    if (currentUserId  && isAdmin) {
      navigationLinks = <AuthenticatedAdminLinks currentUserId={currentUserId} logoutUser={logoutUser} />
    } else if (currentUserId) {
      navigationLinks = <AuthenticatedLinks currentUserId={currentUserId} logoutUser={logoutUser} />
    } else {
      navigationLinks = <UnauthenticatedLinks />
    }

  return (
    <section className='bg-light border-bottom mb-4'>
      <div className='container'>
        <span>{isAdmin}</span>
        {navigationLinks}
      </div>
    </section>
  )
}
export default withRouter(Navigation)
