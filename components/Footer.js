import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="">2024 Auto Dily All rights reserved</p>
      <div>
        <Link href="/obchodni-podminky">
          Obchodní podmínky
        </Link>
      </div>
      <div>
        <Link href="/airmatic">
          Airmatic
        </Link>
      </div>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer