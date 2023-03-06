import React, {ReactNode} from 'react';
import s from './center-info.module.scss'
interface Props {
   children: ReactNode
}
const CenterInfo: React.FC<Props> = ({children}) => {
   return (
      <div className={s.center}>
         {children}
      </div>
   );
};

export default CenterInfo;