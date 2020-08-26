import React from 'react';
import "./Header.css";
import logo from './logo.png';


export const Header = () => {
    return (
        <div className="container">
            <img src={logo} className='img'></img>
            <ul className="links">
                <li><a href=''>Home</a></li>
                <li><a href=''>About Us</a></li>
                <li><a href=''>Blog</a></li>
                <li><a href='' >Services<select>
                    <option></option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    </select></a></li>
            </ul>
        </div>
    )
}
