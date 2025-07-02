import React, { useEffect, useState } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('User');

  useEffect(() => {
    const userData = localStorage.getItem('loggedInUser');
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        if (parsedUser.role === 'admin') {
          setUsername('Admin');
        } else if (parsedUser.role === 'employee' && parsedUser.data?.firstName) {
          setUsername(parsedUser.data.firstName);
        } else {
          setUsername('User');
        }
      } catch (e) {
        console.error('Could not parse loggedInUser:', e);
        setUsername('User');
      }
    }
  }, []);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-[#1c1c1c] rounded-xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-medium text-gray-200">Hello 👋</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">{username}</h2>
      </div>

      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 transition-all text-sm sm:text-base font-medium text-white px-4 sm:px-6 py-2 rounded-md shadow-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
