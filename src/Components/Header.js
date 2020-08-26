import React from 'react';
import "./Header.css";
import logo from './logo.png';


export const Header = () => {
    return (
        <div className="container">
            <img src={logo} className='img' alt="animation video"></img>
            <ul className="links">
                <li><button href=''>Home</button></li>
                <li><button href=''>About Us</button></li>
                <li><button href=''>Blog</button></li>
                <li><button href='' >Services<select>
                    <option></option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    </select></button></li>
            </ul>
        </div>
    )
}
