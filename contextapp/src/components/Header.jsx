import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div 
        style={{
            background: theme === 'dark' ? '#222' : '#f5f5f5',
            color: theme === 'dark' ? '#fff' : '#222',
            minHeight: '100vh',
            padding: '20px'
        }}
        >
        <p>Change the coloooooooooooooor!</p>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        </div>

    );
}

export default Header;
