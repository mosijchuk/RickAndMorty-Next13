import React from 'react';
import LoadingLocal from "@entites/LoadingLocal/LoadingLocal";
import s from './loading-full.module.scss'

const LoadingFull: React.FC = () => {
   return (
      <div className={s.loadingFull}>
         <LoadingLocal />
      </div>
   )
};

export default LoadingFull;