import React, {ReactNode} from 'react';
import s from './center-info.module.scss'
interface Props {
   mt?: boolean
   column?: boolean
   children: ReactNode
}
const CenterInfo: React.FC<Props> = ({mt=true, column=false,children}) => {
   return (
      <div className={`${s.center} ${mt && s.mt}  ${column && s.column}`}>
         {children}
      </div>
   );
};

export default CenterInfo;