//import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
//import { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
// import { isAuthenticated } from '../hooks/myhooks';

const Navbar = () => {
    const {logout} = useLogout()
    //const user = JSON.parse(localStorage.getItem('user'))
    const {user} = useAuthContext()
    const handleClick = () => {
      logout()
    }

    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <h1>Blogs</h1>
                </Link>
                <nav>
                    {user && (     
                    <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log Out</button>
                    
                    </div>
                    )}
               {!user && (                   
                 <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </div>)}

                </nav>
            </div>
        </header>
    )
}

export default Navbar;