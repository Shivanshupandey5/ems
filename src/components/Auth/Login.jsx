import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-turq-600 p-20'>
        <form
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400'
            type='email'
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
            type='password'
            placeholder='Enter password'
          />
          <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>
            Log in
          </button>
        </form>

        {/* ✅ Demo credentials section for visitors */}
        <div className='mt-6 text-sm text-gray-500 text-center'>
          <p className='font-semibold'>Demo Credentials:</p>
          <p><strong>Admin:</strong> admin@me.com | <strong>Password:</strong>123</p>
          <p><strong>Employee:</strong> employee1@example.com | <strong>Password:</strong>123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
