import React from 'react';
import s from './loading.module.scss'

interface LoadingProps {
   type: 'screen' | 'spinner'
}

const LoadingSpinner: React.FC<LoadingProps> = ({type = 'spinner'}) => {
   return (
      <div className={`${s.loadingSpinner} ${type === 'screen' && s.screen}`}>
         <span> </span>
      </div>
   );
};

export default LoadingSpinner;