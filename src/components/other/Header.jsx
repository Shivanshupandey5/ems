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
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
