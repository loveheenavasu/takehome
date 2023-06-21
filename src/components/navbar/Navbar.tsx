import { useState } from 'react';
import './Navbar.css';
import logoImg from '../../assets/images/TwineLogo.png'
import ProfilePicture from '../../assets/images/ProfilePicture.png'

import { FaSearch } from 'react-icons/fa';
import { HiBell } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';


export default function Navbar() {
    const [hamburgerMenu, setHamburgerMenu] = useState(false)

    const handleHamburgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu)
    }

    return (
        <div className='navBar' id="navBar-parent"  >
            <div className='siteLogo'>
                <div className="hamburger" onClick={handleHamburgerMenu}>
                    {hamburgerMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}

                </div>
                <img className='logoImg' src={logoImg} alt="logoImg"></img>
            </div>
            <div className={`navbarMenu ${hamburgerMenu ? "active " : ""}`}>
                <ul className={`menuList `}>
                    <li>art</li>
                    <li>collab</li>
                    <li>create</li>
                </ul>

            </div>
            <div className='profileInfo'>
                <div className={`profileInfoitem inputField `}  >
                    <FaSearch color='#5b721d' fontWeight="700" />
                </div>
                <div className=' profileInfoitem profileImg'>
                    <img src={ProfilePicture} alt="priflePictre" />
                    <div className='notificationIcon'>
                        <HiBell />
                        0
                    </div>
                </div>
            </div>
        </div >
    )
}