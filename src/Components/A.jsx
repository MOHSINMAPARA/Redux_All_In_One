import React from 'react'
import { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { Data } from '../Redux/actions/action'
import { Link } from 'react-router-dom'
import { sendData } from './SendData'

function A() {

    // const [users, setUsers] = useState([])
    const dispatch = useDispatch()
    const users = useSelector(state => state.reducerXYZ.prod)
    useEffect(() => {
        sendData()
            .then((users) => {
                console.log(users)
                // setUsers(users)
                dispatch(Data(users))
            })
            .catch((err) => { alert(err) })
    }, [])

    return (
        <div>
            <h1>Component A</h1>
            <Link to='/B'> Goto Link B </Link>
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            {user.title}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default A