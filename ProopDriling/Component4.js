import React, { useContext} from 'react'
import { UserContext } from './UserContext'

const Component4 = () => {
  const {user, text} = useContext(UserContext)

  return (
    <div>
      <h2>{user.id}</h2>
      <p>{user.name}</p>
      <h1>{text}</h1>
    </div>
  )
}

export default Component4