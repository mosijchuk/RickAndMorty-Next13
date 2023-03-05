import React from 'react';
import s from './logo.module.scss'
import Typography from "@shared/Typography/Typography";
import LogoIcon from "@shared/Logo/LogoIcon";
import Link from "next/link";
import {ROUTES} from "@utils/constants";

const Logo = () => {
   return (
      <Link href={ROUTES.HOME} className={s.logo}>
         <LogoIcon />
         <Typography tag={'span'} variant={'body-1'}>The Rick And Morty</Typography>
      </Link>
   );
};

export default Logo;