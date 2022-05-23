import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendData } from './SendData'
import { Data } from '../Redux/actions/action'

function B() {
  const dispatch = useDispatch()
  // const [users, setUsers] = useState(useSelector(state => state.reducerXYZ.prod))
  const users = useSelector(state => state.reducerXYZ.prod)

  if (users.length === 0) {
    sendData()
      .then((users) => {
        console.log(users)
        dispatch(Data(users))
      })
      .catch((err) => { alert(err) })
  }

  return (
    <div>
      <h1>Component B</h1>
      {
        users.map((data, index) => {
          return (
            <div key={index}>
              {data.title}
            </div>
          )
        })
      }

    </div>
  )
}

export default B