import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const  Navigate = useNavigate()
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault();
 
            await axios.post('http://localhost:3000/users/login', { email, password })
            .then((response) => {
              console.log(response.data);
              localStorage.setItem('token', response.data.token);
              Navigate('/profile')
            })
            .catch((error) => {
              console.log(error);
            });
        
       
    };

  return (
        <main className="flex items-center justify-center min-h-screen bg-slate-500">
        <section className="bg-white p-8 rounded-2xl shadow-lg w-96">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">LOGIN</h1>
          <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
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
    
          <p className='text-center'> do u have an account? <Link to ='/register'> register</Link></p>
          </form>
        </section>
      </main>
      
    




  )
}

export default Login