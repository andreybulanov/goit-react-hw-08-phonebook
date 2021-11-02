import React from 'react';
import logo from '../Components/img/kisspng-telephone-directory-address-book-mobile-phone-clip-address-book-cliparts-5a84a8a715fef0.8381726715186433670901 (1).png'

const HomeView = () => (
    <div className="home-container">
        <h1 className="home-title">Добро пожаловать в Phonebook</h1>
        <img src={logo}
            alt="phonebook" />
    </div>
);

export default HomeView;