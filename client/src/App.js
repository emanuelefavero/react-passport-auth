import { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

function App() {
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [data, setData] = useState(null)

  const register = () => {
    Axios({
      method: 'POST',
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: 'http://localhost:4000/register',
    }).then((res) => console.log(res.data))
  }

  const login = () => {
    Axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: 'http://localhost:4000/login',
    }).then((res) => {
      console.log(res.data)

      // Refresh Page
      window.location.reload()
    })
  }

  const logout = () => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:4000/logout',
    }).then((res) => {
      console.log(res.data)
      setData(null)

      // Refresh Page
      window.location.reload()

      // TIP: If you want to redirect the user to a different page after logging out, you can use useNavigate from react-router-dom here (if you're using react-router-dom)
    })
  }

  const getUser = () => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:4000/user',
    }).then((res) => {
      setData(res.data)
      // console.log(res.data)
    })
  }

  useEffect(() => {
    getUser()
  }, [data])

  return (
    <div className='App'>
      <div>
        <h1>Register</h1>
        <input
          type='text'
          placeholder='username'
          onChange={(e) => setRegisterUsername(e.target.value)}
          value={registerUsername}
        />
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setRegisterPassword(e.target.value)}
          value={registerPassword}
        />
        <button onClick={register}>Register</button>
      </div>
      <div>
        <h1>Login</h1>
        <input
          type='text'
          placeholder='username'
          onChange={(e) => setLoginUsername(e.target.value)}
          value={loginUsername}
        />
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setLoginPassword(e.target.value)}
          value={loginPassword}
        />
        <button onClick={login}>Login</button>
      </div>

      <div>
        <h1>Logout</h1>
        <button onClick={logout}>Logout</button>
      </div>

      <div>{data ? <h1>Welcome Back {data.username}</h1> : null}</div>
    </div>
  )
}

export default App
