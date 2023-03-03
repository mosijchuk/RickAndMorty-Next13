import React from 'react';
import Logo from "@components/icons/Logo";
import Link from "next/link";
import {ROUTES} from "@utils/constants";

const Header = () => {
   return (
      <header className="bg-slate-200 w-full">
         <div className="container flex justify-between py-4 items-center text-slate-700">
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