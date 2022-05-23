import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Data } from '../Redux/actions/action'
import { sendData } from './SendData'

function B() {
  const [users, setUsers] = useState(useSelector(state => state.reducerXYZ.prod))

  if (users.length === 0) {

    sendData()
      .then((users) => {
        console.log(users)
        setUsers(users)
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