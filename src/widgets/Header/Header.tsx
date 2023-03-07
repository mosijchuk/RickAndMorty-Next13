import React from 'react';
import Link from "next/link";
import {ROUTES} from "@utils/constants";
import Logo from "@shared/Logo/Logo";
import s from './header.module.scss'
import g from '@styles/global.module.scss'

const Header = () => {
   return (
      <header className={s.header}>
         <div className={`${g.container} ${s.headerWrapper}`}>
            <Logo/>
            <nav>
               <ul>
                  <li><Link href={ROUTES.CHARACTERS}>Characters</Link></li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;