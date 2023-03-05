import React from 'react';
import s from './section.module.scss'
import Typography from "@shared/Typography/Typography";

interface SectionProps {
   header?: {
      name?: string,
      description?: string
   }
   bg?: 'light' | 'dark'
   children: React.ReactNode
}

const Section:React.FC<SectionProps> = ({header, bg = 'dark', children}) => {
   const textColor = bg === 'dark' ? 'light' : 'dark'
   return (
      <section className={`${s.section} ${s[bg]}`}>
         <div className="container">
            {header && (
               <div className={s.sectionHeader}>
                  {header.name && (
                     <Typography tag={'h2'} variant={'title-2'} color={textColor}>{header.name}</Typography>
                  )}
                  {header.description && (
                     <Typography tag={'p'} variant={'body-1'} color={textColor}>{header.description}</Typography>
                  )}
               </div>
            )}
            {children}
         </div>
      </section>
   );
};

export default Section;