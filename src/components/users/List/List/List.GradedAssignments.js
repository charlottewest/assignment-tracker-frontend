import React from 'react'
// import { Link } from 'react-router-dom'

export default ({ users }) => {

  let postsArray = []
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].posts.length; j++) {
      const post = {
        firstname: users[i].firstname,
        lastname: users[i].lastname,
        email: users[i].email,
        post: users[i].posts[j]
      }
      postsArray.push(post)
    }
  }

  const lis = postsArray.map(post =>
      <li>
        {post.post.title}
      </li>
  )

  return (
    <>
      <h1>Graded Assignments</h1>
      <ul>
        { lis }
      </ul>
    </>
  )
}
