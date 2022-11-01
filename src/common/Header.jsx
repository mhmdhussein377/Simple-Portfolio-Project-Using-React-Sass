import React, {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import {RiMenu3Line} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import {menu} from '../components/data/data';

const Header = () => {
    let [mobile,
        setMobile] = useState(false);
    return (
        <header>
            <ul
                className={`${mobile
                ? "mobile-nav"
                : "menu"}`}>
                {menu.map((item) => (
                    <li key={item.id}>
                        <Link to={item.url} className="link">
                            {item.text}
                        </Link>
                        <span>{item.icon}</span>
                    </li>
                ))}
            </ul>
            <div className="icons">
                <button onClick={() => setMobile(!mobile)}>
                    {mobile
                        ? <AiOutlineClose />
                        : <RiMenu3Line />}
                </button>
            </div>
        </header>
    );
}

export default Header