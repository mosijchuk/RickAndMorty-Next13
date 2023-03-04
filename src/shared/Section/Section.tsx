import React from 'react';
import s from './section.module.scss'

interface SectionProps {
   children: React.ReactNode
}
const Section:React.FC<SectionProps> = ({children}) => {
   return (
      <section className={s.section}>
         <div className="container">
            {children}
         </div>
      </section>
   );
};

export default Section;