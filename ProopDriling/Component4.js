import React, { useContext} from 'react'
import { UserContext } from './UserContext'

const Component4 = () => {
  const user = useContext(UserContext)
  console.log(user);
  return (
    <div>
      <h2>{user.id}</h2>
      <p>{user.name}</p>
    </div>
  )
}

export default Component4