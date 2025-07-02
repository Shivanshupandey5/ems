import React, { useState, useEffect, useRef } from 'react';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const glowRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  // 🌈 Mouse-follow glow effect
  useEffect(() => {
    const moveGlow = (e) => {
      const glow = glowRef.current;
      if (glow) {
        glow.style.left = `${e.clientX - 200}px`;
        glow.style.top = `${e.clientY - 200}px`;
      }
    };
    window.addEventListener('mousemove', moveGlow);
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);

  return (
      <div className="relative min-h-screen w-full bg-[#0e0e0e] flex items-center justify-center overflow-hidden px-4">

      {/* 🌟 Glow Effect */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-[400px] h-[400px] bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-3xl opacity-30 transition-all duration-300 ease-out"
      />

      {/* 🧊 Glassmorphic Login Card */}
        <div className="relative z-10 w-full max-w-md border border-white/20 rounded-xl p-6 sm:p-10 md:p-14 bg-white/10 backdrop-blur-lg shadow-2xl text-white animate-fade-in-up">

        {/* 👋 Greeting */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold">{getGreeting()},<br />Welcome to Employee Management System</h2>
          <p className="text-sm mt-1 text-gray-300">Please log in to continue</p>
          <div className="mt-3 text-xs text-gray-400">
            <p className="font-semibold">Demo Credentials:</p>
            <p>Admin: <code>admin@me.com</code> | Password: <code>123</code></p>
            <p>Employee: <code>employee1@example.com</code> | Password: <code>123</code></p>
          </div>
        </div>

        {/* 📝 Login Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none bg-transparent border border-emerald-400 font-medium text-base py-2 px-4 rounded-full placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500 transition-all"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter password"
            className="w-full outline-none bg-transparent border border-emerald-400 font-medium text-base py-2 px-4 rounded-full placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500 transition-all"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 font-semibold text-white text-base py-2 rounded-full"
          >
            Log in
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
