import React from 'react';
import s from './loading-local.module.scss'
import Spinner from "@shared/Spinner/Spinner";


const LoadingLocal: React.FC = () => {
   return (
      <div className={s.loadingLocal}>
         <Spinner />
      </div>
   );
};
export default LoadingLocal;