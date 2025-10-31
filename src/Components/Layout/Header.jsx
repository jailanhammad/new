import React from 'react';
import "./Header.css";
import logo from '../../Assets/logo.svg';
import Nav from './Nav';

const Header = () => {
    return ( 

<>


<header className='header'>

<div className='logo'>
    <img src={logo} className='logo'/>
</div>

<Nav />


</header>






</>

     );
}
 
export default Header;