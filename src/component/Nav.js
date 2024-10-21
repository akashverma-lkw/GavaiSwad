import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CgLogIn } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { PiPlantDuotone } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import './Nav.css'
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = ({ search, setSearch, searchproduct }) => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    
    return (
        <div>
            <div className="header">
                <div className="top_header">
                    <div className="icon">
                    <PiPlantDuotone />&nbsp;
                    </div>
                    <div className="info">
                        <p>100% Natural and Organic Products . . .</p>
                    </div>
                </div>
                <div className="mid_header">
                    <div className="logo">
                       <Link to='/'> <img src='images/logo2.png' alt="" /></Link>
                    </div>
                    <div className="search_box">
                        <input type="text" value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)} />
                        <button onClick={searchproduct}><CiSearch /></button>
                    </div>
                    {
                        isAuthenticated ?
                        // if user is login then Logout button will shown
                            <div className="user">
                                <div className="icon">
                                    <CiLogout />
                                </div>
                                <div className="btn">
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                                </div>
                            </div>
                            :
                            // if user is not login then Login button will shown
                            <div className="user">
                                <div className="icon">
                                    <CgLogIn />
                                </div>
                                <div className="btn">
                                    <button onClick={() => loginWithRedirect()}>Login</button>
                                </div>
                            </div>
                    }
                </div>
                <div className="last_header">
                    <div className="user_profile">
                        {
                            // user profile record 
                         isAuthenticated ?
                         <>
                         <div className="icon">
                         <FaUser />
                         </div>
                         <div className="info">
                         <h2>{user.name}</h2>
                         <p>{user.email}</p>
                         </div>
                         </>  
                         :
                         <>
                         <div className="icon">
                         <FaUser />
                         </div>
                         <div className="info">
                             <p>Please Login</p>
                         </div>
                         </> 
                        }
                    </div>
                    <div className="nav">
                        <ul>
                            <li><Link to='/' className='link'>Home</Link></li>
                            <li><Link to='/shop' className='link'>Shop</Link></li>
                            <li><Link to='/cart' className='link'>Cart</Link></li>
                            <li><Link to='/about' className='link'>About</Link></li>
                            <li><Link to='/contact' className='link'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="offer">
                        <p>Flat 20% off on all products</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;
