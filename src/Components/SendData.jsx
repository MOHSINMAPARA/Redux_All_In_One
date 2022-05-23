import axios from 'axios'

export const sendData = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        return res.data
    }
    catch (err) {
        alert(err)
    }
}