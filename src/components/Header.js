import { LOGO_URL } from '../utils/constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState('login');
    
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-[220] h-[170]" src={ LOGO_URL } />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-3'>
                       Online Status: {onlineStatus ? "✅" : "🚫"}
                    </li>
                    <li className='px-3'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='px-3'> 
                        <Link to="/about">About Us </Link>
                    </li>
                    <li className='px-3'>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='px-3'>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className='px-3'>Cart</li>
                    <button
                    className='login'
                    onClick={() =>{
                        btnNameReact === 'Login'
                        ? setBtnNameReact('Logout')
                        : setBtnNameReact('Login')
                    }}
                    >
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}


export default Header;