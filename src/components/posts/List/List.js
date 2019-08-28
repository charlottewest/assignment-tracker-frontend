import React from 'react'

import Actions from './List.Actions'

export default ({ currentUserId, destroyPost, user }) => {
  const posts = user.posts.map(post => (
    <div key={post._id} className='card'>
      <div className='card-body'>
        <p className='card-text'>{ post.title }</p>
        <blockquote className='blockquote mb-0'>
          <footer className='blockquote-footer'>{ post.link }</footer>
        </blockquote>
        <p>Grade: { post.grade }</p>
      </div>
      <Actions
        currentUserId={currentUserId}
        destroyPost={destroyPost}
        post={post}
        user={user} />
    </div>
  ))

  return (
    <>
      <h1 className='mb-4'>{user.firstname} {user.lastname}'s Posts</h1>
      { posts }
    </>
  )
}
