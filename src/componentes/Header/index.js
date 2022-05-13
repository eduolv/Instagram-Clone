import {BsSearch, BsPlusSquare} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'
import perfil from "../../images/foto-perfil.png"
import instagramLogo from "../../images/instagram-logo.gif"

import './style.css'
import { IconContext } from 'react-icons'

export function Header() {
    return (
        <header className="header">
            <div className="container">

                <img className="logo" src={instagramLogo} />

                <div className="input-fake">
                <IconContext.Provider value={{color: "#8e8e8e" }}>
                    <BsSearch />
                </IconContext.Provider>
                    <input type="text" placeholder='Pesquisar'/>
                </div>

                <div className='menu-icons'>
                    <IconContext.Provider value={{size: "26px", color: "#2b2b2b" }}>

                    <AiFillHome />
                    <RiMessengerLine />
                    <BsPlusSquare />
                    <MdOutlineExplore />

                    </IconContext.Provider>
                    
                <img className='img-user' src={perfil} />

                </div>

            </div>
        </header>
    )
}