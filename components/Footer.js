import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
        <p className="">2024 Auto Dily All rights reserved</p>
        <a href="/obchodni-podminky">
        Obchodní podmínky
        </a>
        <p className="icons">
            <AiFillInstagram />
            <AiOutlineTwitter />
        </p>
    </div>
  )
}

export default Footer