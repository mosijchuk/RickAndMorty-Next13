import React from 'react';
import s from './section.module.scss'
import Typography from "@shared/Typography/Typography";

interface SectionProps {
   name?: {
      header?: string,
      description?: string
   }
   bg?: 'light' | 'dark'
   children: React.ReactNode
}

const Section:React.FC<SectionProps> = ({name, bg = 'dark', children}) => {
   const textColor = bg === 'dark' ? 'light' : 'dark'
   return (
      <section className={`${s.section} ${s[bg]}`}>
         <div className="container">
            {name && (
               <div className={s.sectionHeader}>
                  {name.header && (
                     <Typography tag={'h2'} variant={'title-2'} color={textColor}>{name.header}</Typography>
                  )}
                  {name.description && (
                     <Typography tag={'p'} variant={'body-1'} color={textColor}>{name.description}</Typography>
                  )}
               </div>
            )}
            {children}
         </div>
      </section>
   );
};

export default Section;