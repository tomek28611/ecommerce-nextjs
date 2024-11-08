import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2024 Auto Dily All rights reserved</p>

      {/* Pierwsze dwa linki osobno */}
      <div>
        <Link href="/obchodni-podminky">
          Obchodní podmínky
        </Link>
      </div>
      <div>
        <Link href="/podpora">
          Podpora
        </Link>
      </div>

      {/* Pozostałe linki w dwóch rzędach */}
      <div className="footer-links">
        <div>
          <Link href="/airmatic">
            Airmatic
          </Link>
        </div>
        <div>
          <Link href="/nahradni-dily/mercedes/motory">
            Motory
          </Link>
        </div>
        <div>
          <Link href="/nahradni-dily/mercedes/naprava">
            Náprava
          </Link>
        </div>
        <div>
          <Link href="/nahradni-dily/mercedes/karoserie">
            Karoserie
          </Link>
        </div>
        <div>
          <Link href="/nahradni-dily/mercedes/elektrika">
            Elektrika
          </Link>
        </div>
        <div>
          <Link href="/nahradni-dily/mercedes/rafky">
            Ráfky
          </Link>
        </div>
        <div>
          <Link href="/nahradni-dily/mercedes/interier">
            Interiér
          </Link>
        </div>
      </div>

      {/* Ikony mediów społecznościowych */}
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
