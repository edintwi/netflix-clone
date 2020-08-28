import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons'


const searchIcon = <FontAwesomeIcon icon={faSearch} />
const gifticon = <FontAwesomeIcon icon={faGift} />
const bellIcon = <FontAwesomeIcon icon={faBell} />
const caretDown = <FontAwesomeIcon icon={faCaretDown} />


export default ({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="logo"></img>
                </a>
            </div>
            <div className="header-menu">
                <a href="/"> Ínicio </a>
                <a href="/"> Séries </a>
                <a href="/"> Filmes </a>
                <a href="/"> Mais Recentes </a>
                <a href="/"> Minha Lista </a>
            </div>
            <div className="header-menu2">
                <a href="/"> <FontAwesomeIcon icon={faSearch} /> </a>
                <a href="/"> INFANTIL </a>
                <a href="/"> <FontAwesomeIcon icon={faGift} /> </a>
                <a href="/"> <FontAwesomeIcon icon={faBell} /></a>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="usuário"></img>
               <FontAwesomeIcon  className="header-button" icon={faCaretDown} />
            </div>
        </header>
    );
}