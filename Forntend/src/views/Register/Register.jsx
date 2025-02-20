import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();
    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
      
        axios.post('http://localhost:3000/users/register',{username,email, password})
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', response.data.token);
            navigate('/profile')

        }).catch(err => {
          console.error('Register failed:', err.response?.data?.message || err.message)
        })
        
        // send data to backend API
    }
  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-500">
    <section className="bg-white p-8 rounded-2xl shadow-lg w-96">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Register</h1>
      <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
        <input 
         value={username}
          onChange={ e => setusername(e.target.value)}
          type="text" 
          placeholder="Username" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input 
         value={email}
          onChange={ e => setEmail(e.target.value)}
          type="email" 
          placeholder="Email" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input 
         value={password}
         onChange={ e => setPassword(e.target.value)}
          type="password" 
          placeholder="Password" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>

      <p className='text-center'> do u have an account? <Link to ='/login'> Login</Link></p>
      </form>
    </section>
  </main>
  
  )
}

export default Register